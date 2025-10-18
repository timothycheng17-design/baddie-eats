import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // For now, just log the email (in production, you'd save to a database)
    console.log('New waitlist signup:', email);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    // In a real app, you would:
    // 1. Save to database (PostgreSQL, MongoDB, etc.)
    // 2. Send confirmation email
    // 3. Add to email marketing service (Mailchimp, ConvertKit, etc.)
    // 4. Track analytics

    return NextResponse.json(
      { 
        message: 'Successfully added to waitlist',
        email: email 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
