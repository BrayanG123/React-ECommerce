import { Carousel } from "../ui/Carousel"
import { Footer } from "../ui/Footer"
import { Navbar } from "../ui/Navbar"
import { SecondNavbar } from "../ui/SecondNavbar"
import { EcommerceLayout } from "./EcommerceLayout"
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
  
        <ProductsPage />

      </EcommerceLayout>
    </>
    
  )


}
