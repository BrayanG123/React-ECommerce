import { Footer } from "../ui/Footer"
import { Navbar } from "../ui/Navbar"
import { SecondNavbar } from "../ui/SecondNavbar"





export const EcommerceLayout = ({ children }) => {


  return (
    <>

        <div className="container-fluid">

            <Navbar />

            <SecondNavbar />

            <div className="container mb-3 mt-3">

                { children }

            </div>

            <Footer />

        </div>
    
    </>
  )



}
