import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../databases/realtimeDatabase";

export const shopApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
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
        })
    })
})

export const {useGetCategoryQuery, useGetProductsQuery, useGetProductByIdQuery} = shopApi;