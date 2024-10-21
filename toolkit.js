import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART")

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
})

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState())
})


store.dispatch(addToCart({ id: 1, qty: 20 }))