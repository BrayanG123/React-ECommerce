import { useEffect } from "react";
import { useProductStore } from "../../../controllers/product/useProductStore"
import { useForm } from "../../../helpers/useForm";


const formData = {
    name: '',
    price: 0,
    category: '',
    brand: '',
}

export const ProductManagement = () => {

    const { startCreateProduct,  } = useProductStore();

    const { name, price, category, brand, onInputChange } = useForm( formData );

    const createSubmit = ( event ) => {
        event.preventDefault();
        // console.log('con llaves')
        // console.log({productFormFields})
        // console.log('sin llaves')
        // console.log(productFormFields)
        startCreateProduct( { name, price, category, brand } );
    }

    // useEffect( () => {
        
    // }, [errorMessage])

  return (
    <>
        <div className="container justify-content-center">

            <form onSubmit={ createSubmit }>

                <div className="form-group mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre del Producto</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        // id="formGroupExampleInput" 
                        placeholder="Introduzca el nombre"
                        name="name"
                        value={ name }
                        onChange={ onInputChange }
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label"> Precio </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        // id="formGroupExampleInput2" 
                        placeholder="Introduzca el precio"
                        name="price"
                        value={ price }
                        onChange={ onInputChange }
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label"> Marca </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        // id="formGroupExampleInput2" 
                        placeholder="Introduzca la marca"
                        name="brand"
                        value={ brand }
                        onChange={ onInputChange }
                    />
                </div>

                <div className="form group mb-3">
                    <label htmlFor="inputState" className="form-label">Categoria</label>
                    <select 
                        // id="inputState" 
                        name="category"
                        className="form-select"
                    >
                        <option 
                            
                            value={ category }
                            onChange={ onInputChange }
                        >
                            iluminacion</option>
                        <option>hogar</option>
                        <option>cocina</option>
                    </select>
                </div>

                <div className="d-grid gap-2">
                    <input 
                        type="submit" 
                        className="btnSubmit" 
                        value="Crear Producto" />
                </div>
            </form>
        </div>
    </>
  )

}
