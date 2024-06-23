import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import OrderNow from './pages/orderNow.tsx'
import SignUp from './pages/signUp.tsx'
import SignIn from './pages/signIn.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order-now",
    element: <OrderNow />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
