// src/components/SlotSelector.tsx
'use client';

import { TimeSlot } from '@/types';
import { calculateAvailableSlots } from '@/utils/registrationUtils';

interface SlotSelectorProps {
  slots: TimeSlot[];
  selectedSlot: string | null;
  onSelectSlot: (slotId: string) => void;
}

export default function SlotSelector({ slots, selectedSlot, onSelectSlot }: SlotSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-yellow-400">Available limited Slots</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slots.map((slot) => {
          const availableSlots = calculateAvailableSlots(slot.maxCapacity, slot.booked);
          const isBooked = availableSlots === 0;
          const isSelected = selectedSlot === slot.id;

          return (
            <button
              key={slot.id}
              onClick={() => !isBooked && onSelectSlot(slot.id)}
              disabled={isBooked}
              className={`p-4 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'slot-selected'
                  : isBooked
                  ? 'slot-booked'
                  : 'slot-available hover:scale-105'
              }`}
            >
              <div className="font-bold text-lg">{slot.startTime} - {slot.endTime}</div>
              <div className="text-sm mt-2">
                Available: <span className="font-bold">{availableSlots}/{slot.maxCapacity}</span>
              </div>
              <div className="text-xs mt-1 opacity-75">
                {new Date(slot.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
