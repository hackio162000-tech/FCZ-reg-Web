// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black to-transparent">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            🏆 FCZ PONGAL
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-white hover:text-yellow-400 transition">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-400 transition">About</Link>
          <Link href="/register" className="text-white hover:text-yellow-400 transition">Register</Link>
          <Link href="/admin" className="text-white hover:text-yellow-400 transition">Admin</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-yellow-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black md:hidden flex flex-col gap-4 p-4">
            <Link href="/" className="text-white hover:text-yellow-400">Home</Link>
            <Link href="/about" className="text-white hover:text-yellow-400">About</Link>
            <Link href="/register" className="text-white hover:text-yellow-400">Register</Link>
            <Link href="/admin" className="text-white hover:text-yellow-400">Admin</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
