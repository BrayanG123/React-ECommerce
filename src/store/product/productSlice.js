


import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({

    name: 'product',

    initialState: {
        page: 0,
        isLoadingProducts: true,
        products: [

        ],
        activeProduct: null,
    },

    reducers: {

        onSetActiveProduct: ( state, {payload} ) => {
            state.activeProduct = payload;
        },

        onAddNewProduct: (state, {payload} ) => {
            state.products.push( payload );
            state.activeProduct = null;
        },

        onLoadProducts: ( state, { payload = [] }) => {
            state.isLoadingProducts = false;
            payload.forEach( product => {
                const exists = state.products.some( dbProduct => dbProduct.id === product.id );
                if ( !exists ) {
                    state.products.push( product );
                }
            } )
        }
    }

});


// Action creators are generated for each case reducer function
export const { 
    
    onSetActiveProduct, 
    onAddNewProduct, 
    onLoadProducts 

} = productSlice.actions;