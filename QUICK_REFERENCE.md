# 🏆 FCZ Pongal Tournament - Quick Reference Card

## 🚀 Get Started in 30 Seconds

```bash
cd d:\project\fcz
npm install
npm run dev
```

**Open browser**: http://localhost:3000

---

## 📍 All URLs

| Page | URL | Purpose |
|------|-----|---------|
| Home | http://localhost:3000 | Tournament info & CTA |
| About | http://localhost:3000/about | Rules & details |
| Register | http://localhost:3000/register | Registration form |
| Admin | http://localhost:3000/admin | Dashboard (pwd: admin123) |

---

## 🎨 Key Colors

```
Yellow:   #ffd700  (Primary)
Orange:   #ff8c00  (Accent)
Black:    #0a0a0a  (Background)
```

---

## 📋 Admin Access

- **URL**: `/admin`
- **Password**: `admin123`
- **Action**: Change before production!

---

## 🔑 Important Files

| File | Purpose |
|------|---------|
| `.env.local` | Firebase & email config |
| `src/app/page.tsx` | Home page |
| `src/app/register/page.tsx` | Registration page |
| `src/app/admin/page.tsx` | Admin dashboard |
| `src/app/globals.css` | All styles |
| `src/utils/registrationUtils.ts` | Helper functions |

---

## ⚡ Commands

```bash
npm run dev      # Start development
npm run build    # Build production
npm start        # Start production
npm run lint     # Check code quality
```

---

## 🧪 Testing Checklist

- [ ] Home page loads
- [ ] All navigation works
- [ ] Registration form validates
- [ ] Admin dashboard shows registrations
- [ ] CSV export works
- [ ] Mobile view works
- [ ] No console errors

---

## 📧 Email Setup (Optional)

1. Set `EMAIL_USER` in `.env.local`
2. Set `EMAIL_PASSWORD` in `.env.local`
3. Uncomment email section in `src/app/api/email/route.ts`

---

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add `.env.local` variables
4. Deploy!

---

## 🎯 Customization Quick Edits

**Change Prize**: Edit `src/app/page.tsx` line ~60
**Change Dates**: Edit `src/app/page.tsx` line ~50
**Change Fee**: Edit `src/app/register/page.tsx` line ~80
**Change Admin Password**: Edit `src/app/admin/page.tsx` line ~10

---

## 🆘 Quick Troubleshoot

**Ports error?** → `npm run dev -- -p 3001`  
**Styles broken?** → `npm run build && npm start`  
**Env not working?** → Restart dev server  
**Form not saving?** → Check localStorage enabled  

---

## 📊 Registration ID Format

`FCZ-PONGAL-YYYYMMDDHHMM-XXXX`

Example: `FCZ-PONGAL-202501151430-A7K2`

---

## 💾 Data Storage

**Current**: Browser localStorage (demo)  
**Production**: Firebase Firestore  

---

## 📱 Responsive Breakpoints

- Mobile: 375px - 480px
- Tablet: 600px - 1024px
- Desktop: 1025px+

All pages tested and optimized!

---

## 🎊 Features Summary

✅ Registration form with validation  
✅ Real-time slot booking  
✅ Admin dashboard with filters  
✅ CSV export  
✅ Form auto-save  
✅ Mobile responsive  
✅ Pongal theme  
✅ Email ready  

---

## 📞 File Locations

```
Components:     src/components/
Pages:          src/app/
APIs:           src/app/api/
Styles:         src/app/globals.css
Utils:          src/utils/
Config:         src/config/
Types:          src/types/
```

---

## 🔐 Security Notes

- Change admin password before launch
- Never commit `.env.local` to GitHub
- Use Firebase security rules in production
- Validate all user inputs

---

## 📈 Launch Checklist

- [ ] Website tested locally
- [ ] Tournament details updated
- [ ] Admin password changed
- [ ] Firebase configured (optional)
- [ ] Email service ready (optional)
- [ ] Code pushed to GitHub
- [ ] Vercel connected
- [ ] Environment variables added
- [ ] Deployed to Vercel
- [ ] Custom domain configured (optional)
- [ ] Registration link shared

---

## 🌟 Performance Tips

- Uses Next.js 14 (fast SSR)
- Tailwind CSS (optimized)
- Firebase (scales automatically)
- Vercel CDN (global distribution)
- Image optimization built-in
- Code splitting automatic

---

## 📚 Documentation

1. **README.md** - Main guide
2. **DEPLOYMENT_GUIDE.md** - Deploy instructions
3. **PROJECT_SUMMARY.md** - Complete overview
4. **IMPLEMENTATION_CHECKLIST.md** - Feature checklist
5. **This file** - Quick reference

---

## 🎓 Key Technologies

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Firebase Firestore (optional)
- **Email**: Nodemailer (optional)
- **Hosting**: Vercel
- **Version Control**: Git/GitHub

---

## 🎯 Tournament Details

- **Event**: FCZ Pongal Edition
- **Dates**: January 15-20, 2025
- **Categories**: Solo (1v1), Duo (2v2), Squad (3v3)
- **Entry Fee**: ₹500
- **Prize Pool**: ₹50,000+
- **Theme**: Pongal Festival + Esports

---

## 🚀 Ready to Launch?

1. Run: `npm run dev`
2. Test at: `http://localhost:3000`
3. Deploy: Connect to Vercel
4. Share: Registration link with players
5. Monitor: Use admin dashboard

---

## 📞 Need Help?

Check these docs in order:
1. README.md
2. DEPLOYMENT_GUIDE.md
3. PROJECT_SUMMARY.md
4. Code comments

---

## ✨ Next Event Ideas

- Increase prize pool
- Add more time slots
- Support multiple games
- Live streaming integration
- Tournament bracket display
- Real-time leaderboard
- Spectator mode

---

**Happy Registrations! 🏆**

---

**Quick Start**: `npm run dev` then visit `http://localhost:3000`
