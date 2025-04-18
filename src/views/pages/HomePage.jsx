import { SecondNavbar } from "../ui/SecondNavbar"
import { EcommerceLayout } from "./EcommerceLayout"
import { ProductManagement } from "./ProductManagement/ProductManagement"
import { PutAndDeletePage } from "./ProductManagement/PutAndDeletePage"
import { ProductsPage } from "./ProductsPage"



export const HomePage = () => {




  return (  

    <>

      {/* <Navbar />
      <SecondNavbar />
      <Carousel /> */}
      {/* <div>HomePage Hola Mundo</div> */}
    
      {/* <Footer/> */}

      <EcommerceLayout>
  
        
        {/* <ProductsPage /> */}
        {/* <ProductManagement /> */}
        <PutAndDeletePage />

      </EcommerceLayout>
    </>
    
  )


}
