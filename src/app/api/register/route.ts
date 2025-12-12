// src/app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/register
 * Handles tournament registration
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.teamName || !data.captainName || !data.email || !data.phoneNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, save to Firestore:
    // const docRef = await db.collection('registrations').add({
    //   ...data,
    //   createdAt: new Date(),
    //   confirmed: true
    // });

    // For demo, we're using localStorage in the client
    console.log('Registration received:', data);

    return NextResponse.json({
      success: true,
      registrationId: data.registrationId,
      message: 'Registration saved successfully'
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/register
 * Fetch all registrations (admin only)
 */
export async function GET(request: NextRequest) {
  try {
    // Check admin authorization
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== 'Bearer admin123') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // In production, fetch from Firestore:
    // const registrations = await db.collection('registrations').get();
    // const data = registrations.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({
      success: true,
      count: 0,
      registrations: []
    });
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch registrations' },
      { status: 500 }
    );
  }
}
