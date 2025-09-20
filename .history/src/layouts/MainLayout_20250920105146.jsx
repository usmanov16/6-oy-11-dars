import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return <>
  <
  <main>
    <Outlet/>
  </main>
  <footer>Footer</footer>
  </>
}

export default MainLayout