import { useDispatch, useSelector } from "react-redux";
import { onAddNewProduct, onLoadProducts, onSetActiveProduct } from "../../store";
import ecommerceApi from "../../api/ecommerceApi";
import Swal from "sweetalert2";




export const useProductStore = () => {

    const dispatch = useDispatch();

    const { products, activeProduct } = useSelector( state => state.products );

    const setActiveProduct = ( productsElement ) => {
        dispatch( onSetActiveProduct( productsElement ) );
    }

    // Get productos
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

    //Put Productos
    const startCreateProduct = async( productsElement ) => {

        try {
            const { data } = await ecommerceApi.post( '/v1/products', productsElement ); //no tiene id porq es un prod nuevo
            console.log(data);
            dispatch( onAddNewProduct({ ...productsElement, id: data.id }) ); //aqui ponemos el id, asignado por el backend, al store
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error, 'error');
        }
    }

    return {
        //Propiedades
        products,
        activeProduct,

        //Metodos
        startLoadingProducts,
        startCreateProduct
    }


}
