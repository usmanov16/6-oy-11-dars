import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return <div className='bg- shadow-lg py-6'>
    <div className='container'>
        <Link className='text-2xl font-bold text-primary' to={"/"}>MovieTV</Link>
    </div>
  </div>
}

export default Header