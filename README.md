# StayVista 🌴

![Project Badge](https://img.shields.io/badge/Project-Room%20Rental-blue)
![Tech Stack](https://img.shields.io/badge/Tech-MERN-orange)
![License](https://img.shields.io/badge/License-MIT-green)

StayVista is a modern **Room Rental / Hotel Booking Platform** inspired by Airbnb. Guests can book rooms, hosts can list properties, and admins can manage the platform — all in a responsive web application.

This project was built as part of a Junior MERN Stack Developer challenge to create a professional, user-friendly web app.

---

## 🚀 Key Features

### Authentication & Profiles
- User registration with email, password, name & photo upload  
- Login with credentials or Google popup  
- JWT-based secure authentication stored in browser cookies

### Guest Role
- Browse and book available rooms  
- Secure booking system (instant booking or host approval)  
- Calendar integration for reservations  
- Request host role

### Host Role
- Request and get approval for host role  
- List and manage properties (photos, descriptions, pricing, amenities, availability)  
- Dashboard with statistics & booking management  
- My Listings page for property management

### Admin Role
- Dashboard for overall statistics  
- Manage users and roles  
- Detailed profile pages for users  
- Approve/reject host requests

### Notifications & Payments
- Automatic email notifications for booking and user actions  
- Secure Stripe payment integration

---

## 🎨 Design Principles
- Easy on the eyes with soft color combinations  
- Clean, organized, and balanced layout  
- Fully responsive across mobile, tablet, and desktop  
- Custom components using Tailwind CSS & DaisyUI

---

## 🏗 Frontend Project Structure

```
client/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/           # Images, icons, placeholders
│  ├─ components/       # Reusable UI components
│  │  ├─ Navbar/
│  │  ├─ Footer/
│  │  └─ Modal/
│  ├─ hooks/            # Custom React hooks (useAuth, useAxiosSecure)
│  ├─ pages/            # Page components (Home, Dashboard, Login, Signup)
│  ├─ services/         # API calls & utilities
│  ├─ context/          # React context for auth & global state
│  ├─ App.jsx
│  └─ main.jsx
├─ .env                 # Environment variables for Firebase & MongoDB
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

---

## 💻 Tech Stack

- **Frontend:** React.js, Tailwind CSS, DaisyUI  
- **State Management:** React Context + React Query  
- **Routing:** React Router DOM  
- **Forms & Validation:** React Hook Form  
- **Authentication:** Firebase Auth (Google popup, Email/Password)  
- **HTTP Requests:** Axios  
- **Payments:** Stripe API  
- **Notifications:** react-hot-toast  
- **Date Handling:** date-fns, react-date-range

---

## 🌐 Live Demo

[StayVista Live](https://stayvista-live-2025-ce330.web.app/)

---

## 📌 Notes
- Private routes remain accessible after page reload  
- Environment variables hide Firebase & MongoDB credentials  
- No Lorem Ipsum text used; all messages are custom  
- Fully responsive and mobile-friendly

---

## 📝 License

MIT License

---

## 📦 Packages and API Docs Used

- [Stripe Website](https://stripe.com/)  
- [Stripejs Github](https://github.com/stripe/react-stripe-js)  
- [Stripejs Documentation](https://docs.stripe.com/payments/quickstart)  
- [@stripe/react-stripe-js](https://www.npmjs.com/package/@stripe/react-stripe-js)  
- [Resend Email](https://resend.com/home)  
- [@headlessui/react](https://www.npmjs.com/package/@headlessui/react)  
- [IMGBB API](https://api.imgbb.com/)  
- [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)  
- [axios](https://www.npmjs.com/package/axios)  
- [date-fns](https://www.npmjs.com/package/date-fns)  
- [query-string](https://www.npmjs.com/package/query-string)  
- [react-date-range](https://www.npmjs.com/package/react-date-range)  
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)  
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)  
- [react-icons](https://www.npmjs.com/package/react-icons)  
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)  
- [react-spinners](https://www.npmjs.com/package/react-spinners)  
- [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)  
- [firebase](https://www.npmjs.com/package/firebase)  
- [react-google-charts](https://www.react-google-charts.com/examples/line-chart)