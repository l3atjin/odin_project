import { Product } from '@/app/page'
import React from 'react'
import Image from "next/image"


export default function Products({ products }: { products: Product[] }) {
  return (
    <div className='flex gap-4'>
      {products.map(product => {
        return (
          <div key={product.id}>
            <Image src={product.image} width={200} height={200} alt={product.title} />
            <p>{product.title}</p>
          </div>
        )
      })}
    </div>
  )
}
