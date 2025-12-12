// src/app/admin/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Registration } from '@/types';
import { exportToCSV } from '@/utils/registrationUtils';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filter, setFilter] = useState<string>('all');

  // Simple admin login
  const ADMIN_PASSWORD = 'Nithi@2403'; // In production, use proper authentication

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      loadRegistrations();
    } else {
      alert('Invalid password');
    }
  };

  const loadRegistrations = () => {
    const saved = localStorage.getItem('fcz_registrations');
    if (saved) {
      setRegistrations(JSON.parse(saved));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadRegistrations();
    }
  }, [isAuthenticated]);

  const filteredRegistrations = registrations.filter((reg) => {
    if (filter === 'pending') return !reg.confirmed;
    if (filter === 'confirmed') return reg.confirmed;
    if (filter === 'paid') return reg.paymentStatus === 'completed';
    return true;
  });

  const handleExportCSV = () => {
    if (registrations.length === 0) {
      alert('No registrations to export');
      return;
    }
    exportToCSV(filteredRegistrations, `fcz_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  // --------------------------
  // NEW: Delete single registration
  // --------------------------
  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this registration? This action cannot be undone.')) return;

    const updated = registrations.filter((r) => r.id !== id);
    setRegistrations(updated);
    localStorage.setItem('fcz_registrations', JSON.stringify(updated));
  };
  // --------------------------

  if (!isAuthenticated) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center py-20">
        <div className="bg-gray-900 border border-yellow-400/20 rounded-lg p-8 max-w-md w-full mx-4">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Admin Dashboard</h1>
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-yellow-400 font-semibold mb-2">Admin Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full btn-festival"
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 text-xs text-center mt-4"></p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400">Admin Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="btn-festival-outline"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 border border-yellow-400/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Total Registrations</p>
            <p className="text-3xl font-bold text-yellow-400">{registrations.length}</p>
          </div>
          <div className="bg-gray-800 border border-green-500/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Confirmed</p>
            <p className="text-3xl font-bold text-green-400">{registrations.filter(r => r.confirmed).length}</p>
          </div>
          <div className="bg-gray-800 border border-orange-500/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Paid</p>
            <p className="text-3xl font-bold text-orange-400">{registrations.filter(r => r.paymentStatus === 'completed').length}</p>
          </div>
          <div className="bg-gray-800 border border-red-500/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Pending Payment</p>
            <p className="text-3xl font-bold text-red-400">{registrations.filter(r => r.paymentStatus === 'pending').length}</p>
          </div>
        </div>

        {/* Filters & Actions */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex gap-2 flex-wrap">
              {['all', 'confirmed', 'pending', 'paid'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded font-semibold transition-all ${
                    filter === f
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
            <div className="ml-auto flex gap-2">
              <button
                onClick={handleExportCSV}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold transition-all"
              >
                📥 Export to CSV
              </button>

              {/* Optional: quick delete all (kept separate from single delete) */}
              <button
                onClick={() => {
                  if (!confirm('Are you sure you want to delete ALL registrations?')) return;
                  localStorage.removeItem('fcz_registrations');
                  setRegistrations([]);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold transition-all"
              >
                🗑 Delete All
              </button>
            </div>
          </div>
        </div>

        {/* Registrations Table */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          {filteredRegistrations.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              No registrations found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-yellow-400 font-semibold">Reg ID</th>
                    <th className="px-6 py-3 text-left text-yellow-400 font-semibold">Team Name</th>
                    <th className="px-6 py-3 text-left text-yellow-400 font-semibold">Captain</th>
                    <th className="px-6 py-3 text-left text-yellow-400 font-semibold">Email</th>
                    <th className="px-6 py-3 text-left text-yellow-400 font-semibold">Category</th>
                    <th className="px-6 py-3 text-left text-yellow-400 font-semibold">Slot</th>
                    <th className="px-6 py-3 text-left text-yellow-400 font-semibold">Status</th>
                    <th className="px-6 py-3 text-left text-yellow-400 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-3 text-sm font-mono text-yellow-400">{reg.id}</td>
                      <td className="px-6 py-3 text-white font-semibold">{reg.teamName}</td>
                      <td className="px-6 py-3 text-gray-300">{reg.captainName}</td>
                      <td className="px-6 py-3 text-gray-300">{reg.email}</td>
                      <td className="px-6 py-3">
                        <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded text-sm capitalize">
                          {reg.category}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-300">{reg.selectedSlot}</td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
                          <span className={`px-3 py-1 rounded text-sm font-semibold ${
                            reg.confirmed
                              ? 'bg-green-900/30 text-green-300'
                              : 'bg-yellow-900/30 text-yellow-300'
                          }`}>
                            {reg.confirmed ? '✓ Confirmed' : 'Pending'}
                          </span>
                          <span className={`px-3 py-1 rounded text-sm font-semibold ${
                            reg.paymentStatus === 'completed'
                              ? 'bg-green-900/30 text-green-300'
                              : 'bg-red-900/30 text-red-300'
                          }`}>
                            {reg.paymentStatus === 'completed' ? '💳 Paid' : '⏳ Pending'}
                          </span>
                        </div>
                      </td>

                      {/* Actions column: Delete button (one-by-one) */}
                      <td className="px-6 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleDelete(reg.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                          >
                            Delete
                          </button>

                          {/* Optional: quick toggle confirmed (uncomment if desired)
                          <button
                            onClick={() => toggleConfirm(reg.id)}
                            className="bg-yellow-400 text-black px-3 py-1 rounded text-sm"
                          >
                            Toggle Confirm
                          </button>
                          */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Total Revenue (if all paid): <span className="text-yellow-400 font-bold">₹{filteredRegistrations.length * 500}</span></p>
            </div>
            <div>
              <p className="text-gray-400">Confirmed Revenue: <span className="text-green-400 font-bold">₹{filteredRegistrations.filter(r => r.paymentStatus === 'completed').length * 500}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
