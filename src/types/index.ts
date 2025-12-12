// src/types/index.ts

export interface Registration {
  id: string;
  teamName: string;
  captainName: string;
  phoneNumber: string;
  email: string;
  category:  'squad';
  selectedSlot: string;
  registrationDate: string;
  confirmed: boolean;
  paymentStatus: 'pending' | 'completed';
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  available: number;
  booked: number;
  maxCapacity: number;
  date: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'viewer';
}

export interface FormData {
  teamName: string;
  captainName: string;
  phoneNumber: string;
  email: string;
  category: string;
  selectedSlot: string;
}
