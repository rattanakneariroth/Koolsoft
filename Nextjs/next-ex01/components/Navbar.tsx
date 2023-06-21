import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
        <div className=" flex items-center justify-between font-bold">
            <h1>ROTH</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Roth Listing</Link>

    </nav>
        
  )
}
