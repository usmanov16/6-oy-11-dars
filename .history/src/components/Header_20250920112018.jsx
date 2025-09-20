import React from 'react'
import { Link } from 'react-router-dom'
import Sitenav from './Sitenav'

function Header() {
  return <div className='bg-[#F2EAD3] shadow-lg py-6'>
    <div className='container flex '>
        <Link className='text-2xl font-bold text-[#003161]' to={"/"}>MovieTV</Link>
        <Sitenav/>
    </div>
  </div>
}

export default Header