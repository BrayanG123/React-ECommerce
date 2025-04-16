import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product/productSlice";



export const store = configureStore({
   
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
    }),

    reducer: {
        
        products: productSlice.reducer,
        // auth: authSlice.reducer,
        // calendar: calendarSlice.reducer,
        // ui: uiSlice.reducer
    }

})