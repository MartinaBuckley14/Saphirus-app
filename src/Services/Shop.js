import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../databases/realtimeDatabase";

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    tagTypes: ['profileGetImage', 'getOrders'],
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => `categories.json`
        }),
        getProducts: builder.query({
            query: () => `products.json`,
            //Hay que formatear los datos
            transformResponse: (response) => {
                const responserTransform = Object.values(response)
                return responserTransform
            }
        }),
        getProductById: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo="${productId}"`,
            transformResponse: (response) => {
                const values = Object.values(response);
                return values.length > 0 ? values[0] : null;
            }
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            }), 
            invalidateTags: ['getOrders']
        }),
        getOrder: builder.query({
            query: () => `orders.json`,
            providesTags: ['getOrders']
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileGetImage']
        }),
        postImageProfile: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: 'PUT',
                body: {image}
            }),
            invalidatesTags: ['profileGetImage']
        })
    })
})

export const {useGetCategoryQuery, useGetProductsQuery, useGetProductByIdQuery, usePostOrderMutation, useGetProfileImageQuery, usePostImageProfileMutation, useGetOrderQuery} = shopApi;