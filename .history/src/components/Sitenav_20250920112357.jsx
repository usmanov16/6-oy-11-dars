import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
    {
        id:1,
        href: "/",
        title: "Home"
    },
    {
        id: 2,
        href: "/about",
        title: "About"
    }
]

function Sitenav() {
  return <nav>
    <ul className='flex items-center '>
        {navLinks.map((link) => {
            return (
                <li key={link.id}>
                    <Link  className='text-[#003161]' to={link.href}>{link.title}</Link>
                </li>
            )
        })}
    </ul>
  </nav>
}

export default Sitenav