// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-400/20 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-yellow-400 font-bold mb-4">🏆 FCZ Pongal Edition</h3>
            <p className="text-gray-400 text-sm">
              Experience the thrill of competitive esports during the festive Pongal season.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-yellow-400">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-yellow-400">About Tournament</a></li>
              <li><a href="/register" className="text-gray-400 hover:text-yellow-400">Register Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow-400 font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              Email: mgawm57@gmail.com<br />
              Phone: +91-9080977875
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; Nithi&SNG pvt.ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
