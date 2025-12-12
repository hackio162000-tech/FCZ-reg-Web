// src/app/page.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-black via-blue-900/20 to-orange-900/20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className={`relative h-full flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Pongal Festival Badge */}
          <div className="mb-6 animate-fade-in-up">
            <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-full text-sm font-semibold">
              🎉 Pongal Festival Edition 2026
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300">
              FCZ PONGAL EDITION
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Experience the thrill of competitive esports during the festive Pongal season
          </p>

          {/* Tournament Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 w-full max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">₹2K+</div>
              <p className="text-gray-400 text-sm">Prize Pool</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">Jan 03-01-2026</div>
              <p className="text-gray-400 text-sm">Tournament Dates</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">1 Categories</div>
              <p className="text-gray-400 text-sm">{/*Solo/Duo/*/}Squad</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/register"
            className="btn-festival animate-fade-in-up transform hover:shadow-2xl"
            style={{ animationDelay: '0.8s' }}
          >
            Register Now & Secure Your Slot
          </Link>

          {/* Additional Info */}
          <div className="mt-12 text-gray-400 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="mb-2">✓ Online Registration | ✓ Instant Confirmation | ✓ Live Slot Booking</p>
            <p className="text-sm">Entry Fee: ₹50 per player/team</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Tournament Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Festive Theme', desc: 'Celebrate Pongal with competitive gaming' },
              { title: 'Instant Slots', desc: 'Real-time slot availability & booking' },
              { title: 'Easy Registration', desc: 'Simple form with auto-ID generation' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/10"
              >
                <div className="text-3xl mb-4">
                  {idx === 0 ? '🎊' : idx === 1 ? '⚡' : '✅'}
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Tournament Format</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              
              { title: 'Squad (4v4)', players: '4 Players', format: 'Full Squad' },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all"
              >
                <div className="text-4xl mb-3">
                  {idx === 0 ? '👤' : idx === 1 ? '👥' : '👨‍👩‍👧‍👦'}
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{cat.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{cat.players}</p>
                <p className="text-orange-400 text-sm">{cat.format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-black to-orange-900/20 border-y border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Ready to Compete?</h2>
          <p className="text-xl text-gray-300 mb-8">Join hundreds of gamers in the biggest Pongal esports celebration!</p>
          <Link href="/register" className="btn-festival text-lg">
            Start Your Registration
          </Link>
        </div>
      </section>
    </div>
  );
}
