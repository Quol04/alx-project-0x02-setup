import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <Link href="/">Logo</Link>
        <nav className="space-x-4 cursor-pointer">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
    </header>
  )
}

export default Header