import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return <>
  <header>Header</header>
  <main>
    <Outlet/>
  </main>
  </>
}

export default MainLayout