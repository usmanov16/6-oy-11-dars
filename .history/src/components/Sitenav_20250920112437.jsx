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
    <ul className='flex items-center gap-5'>
        {navLinks.map((link) => {
            return (
                    <Link  className='text-[#003161]' to={link.href}>{link.title}</Link>
                <li key={link.id}>
                </li>
            )
        })}
    </ul>
  </nav>
}

export default Sitenav