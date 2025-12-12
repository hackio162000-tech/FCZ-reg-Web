# FCZ Pongal Edition Tournament - Deployment Guide

## Overview
Complete deployment guide for FCZ Pongal Edition Tournament website on Vercel with Firebase backend.

---

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Firebase account (firebaseapp.com)
- Vercel account (vercel.com)
- GitHub account for version control

---

## Part 1: Firebase Setup

### 1.1 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create Project"
3. Name: "f "
4. Select your region (India recommended)
5. Enable Google Analytics (optional)

### 1.2 Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create Database"
3. Select "Start in Production Mode"
4. Choose your location (Asia Southeast preferred for India)
5. Click "Create"

### 1.3 Create Collections
```
Create the following Firestore collections:

1. registrations
   - Fields: id, teamName, captainName, email, phoneNumber, category, 
             selectedSlot, registrationDate, confirmed, paymentStatus

2. slots
   - Fields: id, date, startTime, endTime, maxCapacity, booked, available

3. admins (optional)
   - Fields: email, role, createdAt
```

### 1.4 Get Firebase Configuration
1. In Firebase Console, go to Project Settings (gear icon)
2. Copy your Web API credentials
3. Paste into `.env.local` file

### 1.5 Set Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Registrations - readable by all, writable by authenticated users
    match /registrations/{document=**} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.uid;
    }
    
    // Slots - readable by all, writable by admins only
    match /slots/{document=**} {
      allow read: if true;
      allow write: if request.auth.token.admin == true;
    }
    
    // Admins - readable/writable by admins only
    match /admins/{document=**} {
      allow read, write: if request.auth.token.admin == true;
    }
  }
}
```

---

## Part 2: Local Development

### 2.1 Install Dependencies
```bash
cd d:\project\fcz
npm install
```

### 2.2 Configure Environment Variables
Update `.env.local` with your Firebase credentials:
```
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx
```

### 2.3 Run Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

### 2.4 Test Admin Dashboard
- Go to http://localhost:3000/admin
- Enter password: `admin123`
- View registrations and export to CSV

---

## Part 3: GitHub Setup

### 3.1 Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: FCZ Pongal Tournament website"
```

### 3.2 Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create new repository: `fcz-pongal-tournament`
3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/fcz-pongal-tournament.git
git branch -M main
git push -u origin main
```

---

## Part 4: Vercel Deployment

### 4.1 Connect Vercel to GitHub
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import from GitHub
4. Select `fcz-pongal-tournament` repository
5. Click "Import"

### 4.2 Configure Environment Variables in Vercel
1. In Project Settings → Environment Variables
2. Add all variables from `.env.local`:
   - NEXT_PUBLIC_FIREBASE_API_KEY
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID
   - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   - NEXT_PUBLIC_FIREBASE_APP_ID
   - EMAIL_USER
   - EMAIL_PASSWORD
   - ADMIN_PASSWORD

### 4.3 Deploy
1. Click "Deploy"
2. Wait for build to complete (~3-5 minutes)
3. Your site is live! 🎉

### 4.4 Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS settings at your domain provider

---

## Part 5: Email Configuration (Optional)

### Using Gmail SMTP
1. Enable 2FA on your Gmail account
2. Generate App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Set in environment variables:
   - EMAIL_USER: your_email@gmail.com
   - EMAIL_PASSWORD: your_app_password

### Update email route
Uncomment the Nodemailer section in `src/app/api/email/route.ts`

---

## Part 6: Database Integration

### Option A: Using Firebase Admin SDK (Recommended)

#### Install Firebase Admin
```bash
npm install firebase-admin
```

#### Create `src/lib/firebaseAdmin.ts`:
```typescript
import * as admin from 'firebase-admin';

const serviceAccount = require('../../firebase-service-account.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const db = admin.firestore();
```

#### Update API Routes
```typescript
// In src/app/api/register/route.ts
import { db } from '@/lib/firebaseAdmin';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  const docRef = await db.collection('registrations').add({
    ...data,
    createdAt: new Date(),
    confirmed: true,
    paymentStatus: 'pending'
  });
  
  return NextResponse.json({
    success: true,
    registrationId: data.registrationId
  });
}
```

---

## Part 7: Testing Checklist

- [ ] Homepage loads with hero banner
- [ ] Navigation works on all pages
- [ ] Registration form validates inputs
- [ ] Form auto-saves to localStorage
- [ ] Registration ID is generated
- [ ] Success page displays after submission
- [ ] Admin dashboard accessible with password
- [ ] CSV export works
- [ ] Mobile responsiveness tested
- [ ] Yellow/Orange/Black theme applied throughout

---

## Part 8: Monitoring & Maintenance

### Enable Analytics
1. In Firebase Console, enable Google Analytics
2. Monitor user registrations in real-time

### Backup Data
```bash
# Export Firestore data regularly
firebase firestore:export /backups
```

### Monitor Vercel Deployment
- Check build logs: Vercel Dashboard → Project → Deployments
- Monitor performance: Vercel Analytics
- Setup alerts for errors

---

## Part 9: Production Checklist

Before launching to users:

- [ ] All environment variables configured
- [ ] Firebase rules tested and secured
- [ ] Email notifications working
- [ ] Payment integration added (if using)
- [ ] SSL certificate verified (Vercel auto-handles)
- [ ] Performance tested (>80 Lighthouse score)
- [ ] Mobile tested on various devices
- [ ] Admin password changed from default
- [ ] Backup strategy in place
- [ ] Support email configured

---

## Troubleshooting

### Issue: Build fails on Vercel
**Solution:**
- Check Node.js version (18+ required)
- Verify environment variables are set
- Check build logs for errors

### Issue: Firebase connection error
**Solution:**
- Verify Firebase config in `.env.local`
- Check Firestore security rules
- Ensure Firebase project is active

### Issue: Email not sending
**Solution:**
- Check Gmail app password is correct
- Verify 2FA is enabled
- Check EMAIL_USER and EMAIL_PASSWORD variables

### Issue: Styling not applied
**Solution:**
- Run `npm run build` locally
- Clear Vercel cache: Project Settings → Git → Redeploy
- Check Tailwind config is correct

---

## Support & Resources

- **Firebase Docs**: https://firebase.google.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Email Support**: Update `src/components/Footer.tsx` with your email

---

## Performance Optimization

1. **Image Optimization**: Use Next.js Image component
2. **Lazy Loading**: Implement React.lazy for routes
3. **Caching**: Use Vercel's edge caching
4. **Database Indexing**: Create Firestore indexes for queries
5. **CDN**: Vercel automatically uses global CDN

---

## Next Steps After Launch

1. Announce on social media
2. Share registration link with gaming communities
3. Monitor admin dashboard for registrations
4. Send confirmation emails
5. Process payments
6. Send tournament schedule 24 hours before
7. Conduct the tournament
8. Announce winners and process payments
9. Collect feedback for next edition

---

**Happy Hosting! 🚀**
