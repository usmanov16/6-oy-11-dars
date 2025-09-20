import React from 'react'

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
    <ul>
        {navLinks.map((link) => {
            return 
        })}
    </ul>
  </nav>
}

export default Sitenav