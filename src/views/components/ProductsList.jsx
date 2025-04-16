import { useSelector } from "react-redux"
import { useProductStore } from "../../controllers"
import { ProductItem } from "./ProductItem"




 const arreglo = [
    {
        id: 1,
        nombre: 'tele',
        precio: 2000    
    },
    {
        id: 2,
        nombre: 'licuadora',
        precio: 150    
    },
    {
        id: 3,
        nombre: 'plancha',
        precio: 120    
    },
    {
        id: 4,
        nombre: 'secadora',
        precio: 280    
    },
    {
        id: 5,
        nombre: 'foco',
        precio: 20    
    },
    {
        id: 6,
        nombre: 'extratora',
        precio: 200    
    },
    {
        id: 7,
        nombre: 'lavadora',
        precio: 2000    
    },
    {
        id: 8,
        nombre: 'laptop',
        precio: 3000    
    },
    {
        id: 9,
        nombre: 'celular',
        precio: 1100    
    },
    {
        id: 10,
        nombre: 'xbox',
        precio: 2000    
    },
    {
        id: 11,
        nombre: 'monitor',
        precio: 250   
    },
    {
        id: 12,
        nombre: 'tostadora',
        precio: 150    
    },
]


export const ProductsList = () => {

    const { products } = useSelector( state => state.products )
    console.log(products);
    // const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher] )

    // const heroes = getHeroesByPublisher(publisher); //no descomentar esta
    return (

        <div className="row rows-cols-1 row-cols-md-3 g-3 mt-3">
            { 

                products.map( product => (
                    <ProductItem 
                        key={product.id}
                        {...product}
                    />
                ) )

                // heroes.map( hero => (
           
                //     <HeroItem
                //         key={hero.id} 
                //         {...hero}
                //     />

                // )
            }
            
            
        
        </div>
    )
}
