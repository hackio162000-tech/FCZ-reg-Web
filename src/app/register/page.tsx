// src/app/register/page.tsx
'use client';

import { useState, useEffect } from 'react';
import RegistrationForm from '@/components/RegistrationForm';
import { FormData } from '@/types';
import { generateRegistrationId } from '@/utils/registrationUtils';

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const slots = [
    { id: 'slot-1', label: '10:00 AM - 10:30 AM', available: true },
    { id: 'slot-2', label: '10:30 AM - 11:00 AM', available: true },
    { id: 'slot-3', label: '11:00 AM - 11:30 AM', available: false },
    { id: 'slot-4', label: '02:00 PM - 02:30 PM', available: true },
    { id: 'slot-5', label: '02:30 PM - 03:00 PM', available: false },
    { id: 'slot-6', label: '03:00 PM - 03:30 PM', available: true },
  ];

  const handleSubmit = async (data: FormData & { registrationId: string }) => {
    setLoading(true);
    try {
      // Simulate API call to save registration
      // In production, this would be an actual API call to Firebase
      console.log('Registration Data:', data);

      // Save to localStorage for demo purposes
      const registrations = JSON.parse(localStorage.getItem('fcz_registrations') || '[]');
      registrations.push({
        ...data,
        registrationDate: new Date().toISOString(),
        confirmed: true,
        paymentStatus: 'pending',
      });
      localStorage.setItem('fcz_registrations', JSON.stringify(registrations));

      // Simulate email sending
      console.log('Email sent to:', data.email);

      // Set success state
      setRegistrationId(data.registrationId);
      setUserEmail(data.email);
      setSubmitted(true);

      // Auto-scroll to success message
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-black text-white min-h-screen py-20">
        <div className="max-w-2xl mx-auto px-4">
          {/* Success Card */}
          <div className="bg-gradient-to-br from-green-900/40 to-gray-900 border-2 border-green-500 rounded-lg p-8 text-center mb-8 animate-fade-in-up">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold text-green-400 mb-4">Registration Successful!</h1>
            <p className="text-xl text-gray-300 mb-6">
              Your registration for FCZ Pongal Edition Tournament is confirmed.
            </p>

            {/* Registration Details */}
            <div className="bg-gray-800 rounded-lg p-6 my-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Registration ID</p>
                  <p className="text-yellow-400 font-bold text-lg">{registrationId}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">{userEmail}</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6 mb-6 text-left">
              <h3 className="text-lg font-bold text-blue-400 mb-3">📋 Next Steps</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li>1. Check your email for confirmation & tournament details</li>
                <li>2. Complete payment of ₹50 to secure your slot</li>
                <li>3. Receive final tournament schedule 24 hours before start</li>
                <li>4. Join the tournament on the scheduled date & time</li>
              </ol>
            </div>

            {/* Important Info */}
            <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-6 mb-6 text-left">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">⚠️ Important</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>✓ Save your Registration ID for reference</li>
                <li>✓ Payment deadline: 48 hours before tournament</li>
                <li>✓ You can reschedule your slot 24 hours before</li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/'}
                className="btn-festival"
              >
                Back to Home
              </button>
              <button
                onClick={() => window.location.href = '/about'}
                className="btn-festival-outline"
              >
                View Tournament Details
              </button>
            </div>

            {/* Download ID */}
            <p className="text-gray-400 text-sm mt-6">
              Check your email inbox (and spam folder) for detailed instructions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Tournament Registration
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Join the biggest Pongal esports celebration. Fill out the form below and secure your slot!
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-orange-900/30 border border-orange-500/50 rounded-lg p-4 mb-8 text-center">
          <p className="text-orange-300">
            🎊 <strong>Limited Slots Available</strong> - Register now before your preferred time slot fills up!
          </p>
        </div>

        {/* Registration Form */}
        <RegistrationForm
          onSubmit={handleSubmit}
          slots={slots}
          loading={loading}
        />

        {/* FAQ Section */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Registration FAQs</h2>
          <div className="space-y-4">
            {[
              { q: 'What happens after registration?', a: 'You will receive a confirmation email with your Registration ID and tournament details.' },
              { q: 'Can I change my slot after registration?', a: 'Yes, you can reschedule 24 hours before your slot with admin approval.' },
              { q: 'Is payment required immediately?', a: 'Payment is due within 48 hours of registration to confirm your slot.' },
              { q: 'What if I do not pay within deadline?', a: 'Your slot will be released and assigned to another participant.' },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-gray-700 pb-4 last:border-b-0">
                <h3 className="text-orange-400 font-bold mb-2">{item.q}</h3>
                <p className="text-gray-300 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
