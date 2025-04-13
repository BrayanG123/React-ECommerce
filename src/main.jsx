// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './styles.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { EcommerceApp } from './ECommerceApp'; //Aplicacion
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([

      {
        path: "*",
        element: <EcommerceApp />,
      },],

      {
        future: {
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_relativeSplatPath: true,
          v7_skipActionErrorRevalidation: true,
        },
      }
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }}/>
    {/* <MainApp /> */}
  </React.StrictMode>
);



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )
