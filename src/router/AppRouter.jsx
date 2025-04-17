// import { Route, Routes } from "react-router-dom"


import { HomePage } from "../views/pages/HomePage"

import { Navigate, Route, Routes } from "react-router-dom"
import { ProductsPage } from "../views/pages/ProductsPage";
import { LoginPage } from "../views/pages/auth/LoginPage";
// import { LoginPage } from "../auth";
// import { CalendarPage } from "../calendar";
// import { useAuthStore } from "../hooks";
// import { useEffect } from "react";




export const AppRouter = () => {
  return (
    <>
      <Routes>
            
            {/* <>
              <Route path="/auth/*" element={ <LoginPage /> }/>
              <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
            </> */}
          
            <>
              <Route path="/products" element={ <ProductsPage /> }/>
              {/* <Route path="/" element={ <HomePage /> }/> */}
                       
              <Route path="/" element={ <LoginPage /> }/> {/* Borrar luego esto */}

              <Route path="/*" element={ <Navigate to="/" /> }/>
            </>
                              
      </Routes>
    </>
  );
}


// export const AppRouter = () => {

//     const { status, checkAuthToken } = useAuthStore();
//   // const authStatus = 'not-authenticated'; //'authenticated'  <--- esto no descomentar

//     useEffect(() => {
      
//       checkAuthToken();
    
//     }, [])
    

//     if ( status === 'checking' ) {
//       return (
//         <h3>Cargando...</h3>
//       )
//     }

//     return (
//         <Routes>
//             {
                
//                 ( status === 'not-authenticated' )
//                     ? (
//                       <>
//                         <Route path="/auth/*" element={ <LoginPage /> }/>
//                         <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
//                       </>
//                     )
//                     : (
//                       <>
//                         <Route path="/" element={ <CalendarPage /> }/>
//                         <Route path="/*" element={ <Navigate to="/" /> }/>
//                       </>
//                     ) 
            
//             }
                    
//         </Routes>
//   )

// }
