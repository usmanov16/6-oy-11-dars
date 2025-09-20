import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'


function Routes() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/>

        }
    ]) 
  return <RouterProvider router={router}/>
}

export default Routes