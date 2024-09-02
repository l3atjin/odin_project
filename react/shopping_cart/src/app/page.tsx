import Image from "next/image";
import Link from "../../node_modules/next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/cart">Go to cart</Link>
    </>
  );
}
