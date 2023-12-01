import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Cart from "./router/cart/Cart.jsx"
import Form from "./router/form/Form.jsx"
import Fav from './router/fav/Fav.jsx'
import BuyForm from './router/buyForm/BuyForm.jsx'
import BuyConfirm from "./router/buyConfirm/BuyConfirm.jsx"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart />
  },

  {
    path: "form",
    element: <Form />
  },

  {
    path: "fav",
    element: <Fav />
  },
  
  {
    path: "buyform",
    element: <BuyForm />
  },
  
  {
    path: "confirm",
    element: <BuyConfirm />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
