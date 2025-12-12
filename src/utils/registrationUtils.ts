// src/utils/registrationUtils.ts

/**
 * Generate a unique registration ID
 * Format: FCZ-PONGAL-YYYYMMDDHHMM-XXXX (random 4 chars)
 */
export const generateRegistrationId = (): string => {
  const now = new Date();
  const timestamp = now.toISOString().slice(0, 16).replace(/[-:]/g, '');
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `FCZ-PONGAL-${timestamp}-${random}`;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (10 digits for Indian numbers)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.slice(0, 10);
};

/**
 * Export registrations to CSV
 */
export const exportToCSV = (registrations: any[], filename: string = 'registrations.csv') => {
  const headers = ['Registration ID', 'Team Name', 'Captain Name', 'Email', 'Phone', 'Category', 'Time Slot', 'Date', 'Status'];
  
  const rows = registrations.map(reg => [
    reg.id,
    reg.teamName,
    reg.captainName,
    reg.email,
    reg.phoneNumber,
    reg.category,
    reg.selectedSlot,
    reg.registrationDate,
    reg.confirmed ? 'Confirmed' : 'Pending'
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

/**
 * Calculate available slots
 */
export const calculateAvailableSlots = (maxCapacity: number, booked: number): number => {
  return Math.max(0, maxCapacity - booked);
};
