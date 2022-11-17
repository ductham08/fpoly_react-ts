import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "../slices/products"


const store = configureStore({
    reducer: {
        product: productReducer,

    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store