import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartProducts: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log('Estado cart dentro de addToCart:', state)
            const newProduct = action.payload
            const productExist = state.cartProducts.find(item => item.id === newProduct.id)
            if(productExist) {
                productExist.quantity += 1;
            }else {
                state.cartProducts.push({...newProduct, quantity: 1})
            }
        },
        deleteProduct: (state, action) => {
            const productId = action.payload
            const productInCart = state.cartProducts.find(item => item.id === productId)
            if (productInCart.quantity > 1) {
                productInCart.quantity -= 1;
            }else {
                state.cartProducts = state.cartProducts.filter(item=> item.id !== productId)
            }
        },
        clearCart:  (state) => {
            state.cartProducts = [];
        }
    }
    
})

export const {addToCart,deleteProduct, clearCart} = cartSlice.actions

export default cartSlice.reducer