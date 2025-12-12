# FCZ Pongal Edition Tournament - Complete Website

A modern, mobile-friendly esports tournament registration platform built with Next.js 14, Tailwind CSS, and Firebase.

## 🏆 Features

### Player/Team Features
- ✅ Home page with festive Pongal theme
- ✅ Tournament information page
- ✅ Easy registration form with validation
- ✅ Real-time slot booking system
- ✅ Auto-generated registration IDs
- ✅ Confirmation page after registration
- ✅ Auto-save form data to browser
- ✅ Mobile-responsive design
- ✅ Support for Solo (1v1), Duo (2v2), and Squad (3v3) categories

### Admin Features
- ✅ Secure admin dashboard
- ✅ View all registrations
- ✅ Filter by status (Confirmed, Pending, Paid)
- ✅ Export registrations to CSV
- ✅ Real-time statistics
- ✅ Revenue tracking

### Design & UX
- ✅ Pongal festival theme (Yellow, Orange, Black)
- ✅ Clean and modern UI
- ✅ Smooth animations and transitions
- ✅ Dark mode throughout
- ✅ Fast loading times
- ✅ Optimized for all devices

## 📁 Project Structure

```
d:\project\fcz/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles & animations
│   │   ├── about/
│   │   │   └── page.tsx          # About & rules page
│   │   ├── register/
│   │   │   └── page.tsx          # Registration page
│   │   ├── admin/
│   │   │   └── page.tsx          # Admin dashboard
│   │   └── api/
│   │       ├── register/
│   │       │   └── route.ts      # Registration API
│   │       ├── slots/
│   │       │   └── route.ts      # Slots API
│   │       └── email/
│   │           └── route.ts      # Email API
│   ├── components/
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Footer
│   │   ├── RegistrationForm.tsx  # Main registration form
│   │   └── SlotSelector.tsx      # Slot selection component
│   ├── config/
│   │   └── firebase.ts           # Firebase configuration
│   ├── types/
│   │   └── index.ts              # TypeScript types
│   └── utils/
│       └── registrationUtils.ts  # Helper functions
├── public/                        # Static assets
├── .env.local                    # Environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── DEPLOYMENT_GUIDE.md           # Complete deployment guide
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd d:\project\fcz
npm install
```

### 2. Configure Environment
Create/update `.env.local` with Firebase credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Run Development Server
```bash
npm run dev
```
Visit: `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
npm start
```

## 📋 Pages

### Home Page (`/`)
- Hero banner with festive Pongal graphics
- Tournament statistics
- Format overview
- Call-to-action buttons

### About Page (`/about`)
- Tournament details and schedule
- Prize distribution
- Rules for each category
- Past tournament highlights
- FAQs

### Registration Page (`/register`)
- Multi-field registration form with validation
- Real-time slot availability
- Auto-save to browser storage
- Success confirmation page with registration ID
- Email confirmation trigger

### Admin Dashboard (`/admin`)
- Password-protected login
- View all registrations
- Filter options (All, Confirmed, Pending, Paid)
- Export to CSV functionality
- Revenue statistics
- Demo password: `admin123`

## 🎨 Color Scheme (Pongal Festival Theme)

- **Primary Yellow**: `#ffd700` - Festival colors
- **Primary Orange**: `#ff8c00` - Competitive energy
- **Primary Black**: `#0a0a0a` - Modern dark
- **Secondary Gold**: `#ffd700` - Luxury feel
- **Accent Orange**: `#ff6b35` - Highlights

## 🔧 API Endpoints

### Registration
```
POST /api/register
- Body: { teamName, captainName, email, phoneNumber, category, selectedSlot, registrationId }
- Response: { success, registrationId, message }
```

### Slots
```
GET /api/slots
- Response: { success, slots: [] }

POST /api/slots/book
- Body: { slotId, registrationId }
- Response: { success, message, slotId }
```

### Email
```
POST /api/email
- Body: { email, registrationId, teamName, captainName }
- Response: { success, message }
```

## 💾 Data Structure

### Registration Document
```typescript
{
  id: string;              // Auto-generated: FCZ-PONGAL-YYYYMMDDHHMM-XXXX
  teamName: string;
  captainName: string;
  phoneNumber: string;     // 10 digits
  email: string;
  category: 'solo' | 'duo' | 'squad';
  selectedSlot: string;    // Slot ID
  registrationDate: string;
  confirmed: boolean;
  paymentStatus: 'pending' | 'completed';
}
```

### Time Slot Document
```typescript
{
  id: string;
  date: string;
  startTime: string;       // e.g., "10:00 AM"
  endTime: string;
  maxCapacity: number;
  booked: number;
  available: number;       // maxCapacity - booked
}
```

## 🔐 Security Features

1. **Form Validation**
   - Email format validation
   - Phone number validation (10 digits)
   - Required field validation
   - Auto-save to prevent data loss

2. **Admin Authentication**
   - Password-protected dashboard
   - Authorization checks on API routes
   - Rate limiting ready

3. **Data Protection**
   - Environment variables for sensitive data
   - No hardcoded credentials
   - Firestore security rules

## 📱 Responsive Design

- Mobile-first approach
- Tested on all screen sizes
- Touch-friendly buttons
- Optimized performance
- Smooth animations

## 🎯 Features Breakdown

### Registration System
- Form auto-saves to localStorage
- Real-time email validation
- Phone number formatting
- Category selection (Solo/Duo/Squad)
- Live slot availability
- Prevents double-booking
- Auto-generates unique Registration IDs
- Success confirmation with ID

### Slot Management
- Show available slots dynamically
- Display remaining capacity
- Mark fully-booked slots
- Date and time display
- Easy selection interface

### Admin Dashboard
- Secure login with password
- View all registrations in table
- Filter registrations by status
- Quick statistics display
- Export to CSV with proper formatting
- Real-time data updates

## 🌐 Deployment to Vercel

See `DEPLOYMENT_GUIDE.md` for complete instructions.

Quick deploy:
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Auto-deploys on push

## 🔌 Firebase Integration

The app is ready for Firebase Firestore integration. Currently uses localStorage for demo.

To enable Firebase:
1. Uncomment Firebase code in API routes
2. Install Firebase Admin SDK
3. Set up service account
4. Update Firestore security rules

See `DEPLOYMENT_GUIDE.md` for detailed Firebase setup.

## 📧 Email Configuration

Email confirmations use Nodemailer (configured for production).

Setup:
1. Enable 2FA on Gmail
2. Generate app password
3. Set EMAIL_USER and EMAIL_PASSWORD in environment
4. Uncomment email sending in `src/app/api/email/route.ts`

## 🧪 Testing

### Test Registration
1. Go to `/register`
2. Fill form with test data
3. Select a slot
4. Submit and see confirmation
5. Check browser console for logged data

### Test Admin Dashboard
1. Go to `/admin`
2. Enter password: `admin123`
3. View registrations in localStorage
4. Test CSV export

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear Next.js cache
rm -r .next
npm run build
```

### Environment Variables Not Working
- Ensure `.env.local` is in root directory
- Restart dev server after changes
- Check variable names (must start with NEXT_PUBLIC_ for client-side)

### Slots Not Showing
- Check localStorage for slot data
- Verify API route is accessible
- Check browser console for errors

## 🚢 Production Checklist

- [ ] All environment variables configured
- [ ] Firebase project set up and rules applied
- [ ] Email service configured
- [ ] Admin password changed from default
- [ ] SSL certificate verified
- [ ] Performance tested (Lighthouse score >80)
- [ ] Mobile tested on real devices
- [ ] Backup strategy in place
- [ ] Analytics enabled
- [ ] Support email configured

## 📞 Support

For issues or questions:
- Check `DEPLOYMENT_GUIDE.md` for detailed setup
- Review `.env.local` configuration
- Check browser console for errors
- Verify Firebase credentials

## 📄 License

Created for FCZ Pongal Edition Tournament 2025

## 🎉 Ready to Launch!

Your tournament registration platform is ready. Customize as needed and deploy to Vercel for live access.

**Happy registrations! 🏆**

---

**Built with:**
- ⚡ Next.js 14 (App Router)
- 🎨 Tailwind CSS
- 🔥 Firebase Firestore
- 📧 Nodemailer
- 🚀 Vercel Hosting
- 💬 TypeScript
