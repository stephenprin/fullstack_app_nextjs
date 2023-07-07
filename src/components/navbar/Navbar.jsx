import React from 'react'
import links from "@/utils/data"
import Link from 'next/link'

const Navbar = () => {
  return (
      <div>
          <Link href="/dashboard">Insomia</Link>
          <div>
              {links.map((link) => (
                  <Link href={link.url} key={link.id}>
                      {link.title}
                  </Link>
              ))}
          </div>
          
    </div>
  )
}

export default Navbar