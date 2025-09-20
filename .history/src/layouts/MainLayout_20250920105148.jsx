import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return <>
  <Hea
  <main>
    <Outlet/>
  </main>
  <footer>Footer</footer>
  </>
}

export default MainLayout