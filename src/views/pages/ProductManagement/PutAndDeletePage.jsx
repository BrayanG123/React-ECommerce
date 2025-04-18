import { useEffect } from "react";
import { useProductStore } from "../../../controllers"
import { ProductHCard } from "../../components/ProductHCard";







export const PutAndDeletePage = () => {

    const { products, startLoadingProducts } = useProductStore();

    useEffect(() => {
        startLoadingProducts();
      }, []);

    return (
        // Horizontal
        <div className="container ">
            {
                products.map( product => (
                    <ProductHCard 
                        key={product.id}
                        {...product}
                    />
                ) )
            }
        </div>
    )

}
