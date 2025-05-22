import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            user: null,
            token: null,
            localId: null,
            imageCamera: null
        }
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.value.user = payload.user
            state.value.token = payload.token
            state.value.localId = payload.localId
        },
        clearUser: (state) => (state.value = {user: null, token: null}),
        setCameraImage: (state, {payload}) => {
            state.value.imageCamera = payload
        }
    }
})

export const {setUser, clearUser, setCameraImage} = authSlice.actions

export default authSlice.reducer