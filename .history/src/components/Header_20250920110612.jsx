import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return <div className='bg-[#F2EAD3] shadow-lg py-6'>
    <div className='container'>
        <Link className='text-2xl font-bold text-[#006A67]' to={"/"}>MovieTV</Link>
    </div>
  </div>
}

export default Header