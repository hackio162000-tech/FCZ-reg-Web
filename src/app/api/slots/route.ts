// src/app/api/slots/route.ts
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/slots
 * Fetch available time slots
 */
export async function GET(request: NextRequest) {
  try {
    // In production, fetch from Firestore
    const slots = [
      {
        id: 'slot-1',
        date: '2025-01-15',
        startTime: '10:00 AM',
        endTime: '10:30 AM',
        maxCapacity: 10,
        booked: 3,
      },
      {
        id: 'slot-2',
        date: '2025-01-15',
        startTime: '10:30 AM',
        endTime: '11:00 AM',
        maxCapacity: 10,
        booked: 7,
      },
      {
        id: 'slot-3',
        date: '2025-01-15',
        startTime: '11:00 AM',
        endTime: '11:30 AM',
        maxCapacity: 10,
        booked: 10,
      },
      {
        id: 'slot-4',
        date: '2025-01-15',
        startTime: '02:00 PM',
        endTime: '02:30 PM',
        maxCapacity: 10,
        booked: 2,
      },
      {
        id: 'slot-5',
        date: '2025-01-15',
        startTime: '02:30 PM',
        endTime: '03:00 PM',
        maxCapacity: 10,
        booked: 10,
      },
      {
        id: 'slot-6',
        date: '2025-01-15',
        startTime: '03:00 PM',
        endTime: '03:30 PM',
        maxCapacity: 10,
        booked: 5,
      },
    ];

    return NextResponse.json({
      success: true,
      slots: slots,
    });
  } catch (error) {
    console.error('Slots fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch slots' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/slots/book
 * Book a time slot
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { slotId, registrationId } = data;

    if (!slotId || !registrationId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, update Firestore slot availability
    // Check if slot is still available
    // Update slot booking count
    // Save registration with slot ID

    return NextResponse.json({
      success: true,
      message: 'Slot booked successfully',
      slotId: slotId,
    });
  } catch (error) {
    console.error('Slot booking error:', error);
    return NextResponse.json(
      { error: 'Failed to book slot' },
      { status: 500 }
    );
  }
}
