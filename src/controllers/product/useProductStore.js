import { useDispatch, useSelector } from "react-redux";
import { onLoadProducts, onSetActiveProduct } from "../store";
import ecommerceApi from "../api/ecommerceApi";




export const useProductStore = () => {

    const dispatch = useDispatch();

    const { products, activeProduct } = useSelector( state => state.products );

    const setActiveProduct = ( productsProduct ) => {
        dispatch( onSetActiveProduct( productsProduct ) );
    }

    const startLoadingProducts = async() => {

        try {
            const { data } = await ecommerceApi.get('/v1/products');
            // console.log({data})
            dispatch( onLoadProducts( data ) );
        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error)
        }

    }

    return {
        //Propiedades
        products,
        activeProduct,

        //Metodos
        startLoadingProducts,
    }


}
