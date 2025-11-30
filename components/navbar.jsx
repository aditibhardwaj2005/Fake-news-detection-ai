'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TruthVerify
        </Link>

        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className={`${isActive('/') ? 'text-blue-600 font-semibold' : 'text-foreground hover:text-blue-600'} transition`}
          >
            Home
          </Link>
          <Link
            href="/detect"
            className={`${isActive('/detect') ? 'text-blue-600 font-semibold' : 'text-foreground hover:text-blue-600'} transition`}
          >
            Detect
          </Link>
          <Link
            href="/about"
            className={`${isActive('/about') ? 'text-blue-600 font-semibold' : 'text-foreground hover:text-blue-600'} transition`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-foreground hover:text-blue-600'} transition`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
