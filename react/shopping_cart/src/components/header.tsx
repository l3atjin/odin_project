import React from 'react'
import Link from '../../node_modules/next/link'


export default function Header() {
  return (
    <div>
      <div className='flex gap-4 p-4 justify-end'>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </div>
      
    </div>
  )
}
