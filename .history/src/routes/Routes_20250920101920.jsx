import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import {Home} from "../pages"

function Routes() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                }
            ]

        }
    ]) 
  return <RouterProvider router={router}/>
}

export default Routes