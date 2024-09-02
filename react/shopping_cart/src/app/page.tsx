'use client'
import Products from "@/components/products";
import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .then(() => setLoading(false))
      
    }
    fetchProducts()

  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Welcome to Bat's Shop</h1>
      {isLoading ? "Loading ..." : <Products products={products}/>}
    </div>
  );
}
