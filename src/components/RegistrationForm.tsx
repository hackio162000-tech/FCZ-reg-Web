// src/components/RegistrationForm.tsx
'use client';

import { useState, useEffect } from 'react';
import { FormData } from '@/types';
import { isValidEmail, isValidPhone, formatPhoneNumber, generateRegistrationId } from '@/utils/registrationUtils';

interface RegistrationFormProps {
  onSubmit: (data: FormData & { registrationId: string }) => Promise<void>;
  slots: { id: string; label: string; available: boolean }[];
  loading?: boolean;
}

export default function RegistrationForm({ onSubmit, slots, loading = false }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    captainName: '',
    phoneNumber: '',
    email: '',
    category: 'solo',
    selectedSlot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [registrationId, setRegistrationId] = useState('');

  useEffect(() => {
    // Load saved form data from localStorage
    const saved = localStorage.getItem('registrationForm');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
    if (!formData.captainName.trim()) newErrors.captainName = 'Captain name is required';
    if (!isValidPhone(formData.phoneNumber)) newErrors.phoneNumber = 'Valid 10-digit phone number required';
    if (!isValidEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.selectedSlot) newErrors.selectedSlot = 'Please select a time slot';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: name === 'phoneNumber' ? formatPhoneNumber(value) : value,
    };
    setFormData(updatedData);
    // Auto-save to localStorage
    localStorage.setItem('registrationForm', JSON.stringify(updatedData));
    // Clear error for this field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const id = generateRegistrationId();
      setRegistrationId(id);
      await onSubmit({ ...formData, registrationId: id });
      // Clear localStorage after successful submission
      localStorage.removeItem('registrationForm');
      setFormData({
        teamName: '',
        captainName: '',
        phoneNumber: '',
        email: '',
        category: 'solo',
        selectedSlot: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 border border-yellow-400/20 rounded-lg p-6 max-w-2xl mx-auto space-y-6">
      {/* Team Name */}
      <div>
        <label className="block text-yellow-400 font-semibold mb-2">Team / Player Name *</label>
        <input
          type="text"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          placeholder="Enter your team or player name"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
        />
        {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
      </div>

      {/* Captain Name */}
      <div>
        <label className="block text-yellow-400 font-semibold mb-2">Captain Name *</label>
        <input
          type="text"
          name="captainName"
          value={formData.captainName}
          onChange={handleChange}
          placeholder="Enter captain name"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
        />
        {errors.captainName && <p className="text-red-500 text-sm mt-1">{errors.captainName}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-yellow-400 font-semibold mb-2">Phone Number *</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          maxLength={10}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-yellow-400 font-semibold mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Category */}
      <div>
        <label className="block text-yellow-400 font-semibold mb-2">Category *</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-yellow-400 focus:outline-none"
        >
          {/*<option value="solo">Solo (1v1)</option>
          <option value="duo">Duo (2v2)</option>*/}
          <option value="squad">Squad (4v4)</option>
        </select>
      </div>

      {/* Time Slot Selection */}
      <div>
        <label className="block text-yellow-400 font-semibold mb-3">Select Time Slot *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {slots.map((slot) => (
            <button
              key={slot.id}
              type="button"
              onClick={() => slot.available && handleChange({ target: { name: 'selectedSlot', value: slot.id } } as any)}
              disabled={!slot.available}
              className={`p-3 rounded border-2 font-semibold transition-all ${
                formData.selectedSlot === slot.id
                  ? 'slot-selected'
                  : slot.available
                  ? 'slot-available hover:border-green-300'
                  : 'slot-booked'
              }`}
            >
              {slot.label}
            </button>
          ))}
        </div>
        {errors.selectedSlot && <p className="text-red-500 text-sm mt-1">{errors.selectedSlot}</p>}
      </div>

      {/* Tournament Details */}
      <div className="bg-gray-800 border border-yellow-400/20 rounded p-4">
        <p className="text-sm text-gray-300">
          <strong className="text-yellow-400">Entry Fee:</strong> ₹50 per player/team<br />
          <strong className="text-yellow-400">Prize Pool:</strong> ₹2000+<br />
          <strong className="text-yellow-400">Date:</strong> January 03-01, 2026
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting || loading}
        className="w-full btn-festival disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Registering...' : 'Complete Registration'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        ✓ Form data is auto-saved to your browser
      </p>
    </form>
  );
}
