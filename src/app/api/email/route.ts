// src/app/api/email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * POST /api/email
 * Send confirmation email
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { email, registrationId, teamName, captainName } = data;

    if (!email || !registrationId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer (for production)
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASSWORD,
    //   }
    // });

    // Email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #0a0a0a; color: #e5e5e5; }
            .container { max-width: 600px; margin: 0 auto; background-color: #1a1a1a; padding: 20px; border-radius: 8px; border: 2px solid #ffd700; }
            .header { text-align: center; color: #ffd700; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
            .content { line-height: 1.6; }
            .reg-id { background-color: #2a2a2a; padding: 15px; border-radius: 5px; border-left: 4px solid #ffd700; margin: 20px 0; }
            .footer { text-align: center; color: #888; font-size: 12px; margin-top: 30px; border-top: 1px solid #333; padding-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">🏆 FCZ Pongal Edition Tournament</div>
            
            <div class="content">
              <p>Dear ${teamName},</p>
              
              <p>Thank you for registering for the <strong>FCZ Pongal Edition Tournament</strong>!</p>
              
              <p>Your registration has been successfully confirmed. Here are your details:</p>
              
              <div class="reg-id">
                <strong>Registration ID:</strong> ${registrationId}<br>
                <strong>Team/Player Name:</strong> ${teamName}<br>
                <strong>Captain:</strong> ${captainName}<br>
                <strong>Email:</strong> ${email}
              </div>
              
              <h3>Next Steps:</h3>
              <ol>
                <li>Complete payment of ₹500 to secure your slot</li>
                <li>Payment must be completed within 48 hours</li>
                <li>You'll receive tournament schedule 24 hours before start</li>
                <li>Join the tournament on your scheduled slot</li>
              </ol>
              
              <h3>Tournament Details:</h3>
              <ul>
                <li>📅 Dates: January 03-01, 2026</li>
                <li>🏆 Prize Pool: ₹2,000+</li>
                <li>💰 Entry Fee: ₹50</li>
              </ul>
              
              <p><strong>Important:</strong> Save your Registration ID for future reference.</p>
            </div>
            
            <div class="footer">
              <p>&copy; 2025 FCZ Pongal Edition. All rights reserved.</p>
              <p>For support, contact: info@fcz-tournament.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email (demo - logs instead of sending)
    console.log('Email would be sent to:', email);
    console.log('Registration ID:', registrationId);

    // In production:
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject: `FCZ Pongal Edition - Registration Confirmed (ID: ${registrationId})`,
    //   html: htmlContent
    // });

    return NextResponse.json({
      success: true,
      message: 'Confirmation email sent',
    });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
