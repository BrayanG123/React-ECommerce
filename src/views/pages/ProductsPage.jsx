import { useEffect } from "react"
import { ProductsList } from "../components/ProductsList"
import { Carousel } from "../ui/Carousel"
import { useProductStore } from "../../controllers"




export const ProductsPage = () => {

  const { products, startLoadingProducts } = useProductStore();

  useEffect(() => {
    startLoadingProducts();
  }, []);

  return (

    // Ya esta dentro de un container
    <>
        <Carousel />
        <ProductsList />
    
    </>

  )
}
