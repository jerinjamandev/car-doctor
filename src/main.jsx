import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root.jsx';
import Home from './pages/Home.jsx';
import Checkout from './pages/Checkout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/chekout',
        element:<Checkout></Checkout>
      }


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />

  </StrictMode>,
)
