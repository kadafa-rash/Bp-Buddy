# 🩺 BP Buddy – A Blood Pressure Tracker

**BP Buddy** is a web application that allows users to track, visualize, and analyze their blood pressure readings over time. With a clean UI, cloud sync via Supabase, and health insights, it empowers users to take better control of their heart health.

---

## 🌟 Features

| Feature | Description |
|--------|-------------|
| ✅ Add Reading | Input date, systolic, diastolic, and pulse |
| ✅ Validate Reading | Get immediate classification: Low, Normal, Elevated, or High |
| 📊 Chart View | Visualize weekly/monthly trends with Chart.js or Recharts |
| 🔁 Reminder System | (Optional) Browser-based reminders to log your BP |
| 🧠 Health Tips | Static or API-fetched tips for better BP control |
| 🔐 Supabase Auth | Secure login and user-specific data storage |
| ☁️ Cloud Sync | Supabase as backend for realtime reading storage |
| 📝 Notes | Add daily notes alongside each BP entry |
| 📅 Calendar View | (Optional) See readings in a calendar format |
| 📱 Responsive Design | Optimized for mobile and desktop use |

---

## 🧰 Tech Stack

### Frontend:
- [React.js](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/) *(optional, or use CSS/SCSS)*
- [Chart.js](https://www.chartjs.org/) or [Recharts](https://recharts.org/)

### Backend:
- [Supabase](https://supabase.io/) – Authentication & Postgres Database

---

## 🖼️ Pages Overview

| Page | Description |
|------|-------------|
| **Home** | Summary of today’s reading + quick tips |
| **Add Reading** | Form to input blood pressure and pulse |
| **History** | List view of all past entries |
| **Graph** | Weekly/monthly chart of readings |
| **Tips** | Health tips fetched from API or static list |
| **Settings** | Toggle reminders, dark mode, etc. |

---

## 🧠 Blood Pressure Classification

```js
function classifyBP(systolic, diastolic) {
  if (systolic < 90 || diastolic < 60) return "Low";
  if (systolic <= 120 && diastolic <= 80) return "Normal";
  if (systolic <= 140 || diastolic <= 90) return "Elevated";
  return "High";
}
