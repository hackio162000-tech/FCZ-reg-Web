// src/app/about/page.tsx
export default function About() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-yellow-400">About The Tournament</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            FCZ Pongal Edition brings together the excitement of competitive gaming with the festive spirit of Pongal celebration.
          </p>
        </div>
      </section>

      {/* Tournament Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Tournament Details</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-orange-400 font-bold mb-2">📅 Schedule</h3>
                  <p>January 03-01, 2026</p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold mb-2">📍 Venue</h3>
                  <p>Online (Global Access)</p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold mb-2">💰 Entry Fee</h3>
                  <p>₹50 per /team</p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold mb-2">🏆 Prize Pool</h3>
                  <p>₹2,000 across all categories</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Prize Distribution</h2>
              <div className="space-y-3">
                {[
                  { place: '🥇 1st Place', prize: '₹1,000' },
                  { place: '🥈 2nd Place', prize: '₹600' },
                  { place: '🥉 3rd Place', prize: '₹400' },
                  {/*{ place: '⭐ Top 5 Finalist', prize: 'Gift Vouchers' },*/}
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-800 p-4 rounded border border-yellow-400/20">
                    <span className="text-gray-300">{item.place}</span>
                    <span className="text-yellow-400 font-bold">{item.prize}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Format */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12">Rules & Format</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Solo Rules *//*
            <div className="bg-gray-800 border border-yellow-400/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Solo (1v1) Format</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Single player competition</li>
                <li>✓ Best of 3 matches format</li>
                <li>✓ Knockout rounds</li>
                <li>✓ Semi-finals & Finals</li>
                <li>✓ Each match: 15 minutes</li>
              </ul>
            </div>}

            {/* Duo Rules *{/*}
            <div className="bg-gray-800 border border-yellow-400/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Duo (2v2) Format</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 2 players per team</li>
                <li>✓ Team coordination required</li>
                <li>✓ Best of 3 matches</li>
                <li>✓ Round-robin group stage</li>
                <li>✓ Each match: 20 minutes</li>
              </ul>
            </div>
          

            {/* Squad Rules */
            }
            <div className="bg-gray-800 border border-yellow-400/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Squad (4v4) Format</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 3 players per squad</li>
                <li>✓ Advanced team strategies</li>
                <li>✓ Best of 5 matches</li>
                <li>✓ Group stage + Playoffs</li>
                <li>✓ Each match: 25 minutes</li>
              </ul>
            </div>

            {/* General Rules */}
            <div className="bg-gray-800 border border-yellow-400/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">General Rules</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Fair play only (no cheating)</li>
                <li>✓ Valid ID required</li>
                <li>✓ Age 18+ to participate</li>
                <li>✓ Stable internet connection</li>
                <li>✓ Admin decision is final</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12">Past FCZ Tournament Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Record Participants', stat: '50+', desc: 'Players from across India' },
              { title: 'Matches Played', stat: '60+', desc: 'Competitive matches' },
              { title: 'Community Engagement', stat: '3K+', desc: 'Live viewers & supporters' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-orange-500/30"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              { q: 'Can I register for multiple categories?', a: 'Yes! You can register as solo, duo, or squad. Each registration requires a separate entry fee.' },
              { q: 'What if I miss my scheduled slot?', a: 'Please notify us 24 hours before. Rescheduling is possible based on availability.' },
              { q: 'Is there an age limit?', a: 'Yes, participants must be 18+ years old. Valid ID required at registration.' },
              { q: 'How do I get my prize money?', a: 'Winners will be contacted within 3 days with bank transfer details.' },
              { q: 'Can I get a refund?', a: 'No Refunds available if you want refund want to provide the valid resons.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 border border-yellow-400/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
