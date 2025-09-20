import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function Routes() {

    const router = createBrowserRouter([
        {
            path: "/"
        }
    ]) 
  return (
    <div>Routes</div>
  )
}

export default Routes