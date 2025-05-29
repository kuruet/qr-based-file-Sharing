# 📦 QR Upload & Print System

A smart web-based system for students and printing shop owners to share and print documents **instantly using QR codes** — no more messy WhatsApp or email transfers.

## 🚀 Project Overview

This project solves a real-world problem faced by students and print vendors: the hassle of sharing files over WhatsApp or email when visiting a printing shop. With this system, users simply scan a shop's QR code, upload any document from their device, and the shop receives it instantly on their system for printing.

> 🔄 This README will be updated with each development phase.

---

## 👥 Users

- **Students / General Users**: Upload documents for printing from anywhere (gallery, WhatsApp, email, cloud).
- **Shop Owners / Vendors**: Receive and print files from a centralized, secure dashboard.

---

## 🧩 Core Features (Planned)

- [x] File Upload from Any Source (Gallery, WhatsApp, Email, etc.)
- [ ] QR Code Generation for Shops
- [ ] Vendor Dashboard to View & Print Files
- [ ] QR Scanner Integration
- [ ] Access Logs & Print History
- [ ] User Authentication (v2)
- [ ] Admin Panel (v2)

---

## 🏗️ Tech Stack

| Layer       | Technology                     |
|------------|----------------------------------|
| Frontend    | HTML, Tailwind CSS, JavaScript (React later) |
| Backend     | Node.js, Express.js             |
| Database    | MongoDB Atlas                   |
| QR Code     | `qrcode` npm library            |
| File Upload | `multer` (and later cloud storage) |
| Deployment  | GitHub (repo), Railway/Render (backend), Vercel (frontend) |

---

## ✅ Phase Progress

### ✅ Phase 1: Setup & MongoDB Integration

**Goals Achieved:**

- Initialized project with Node.js and Express.js
- Created `.gitignore` to protect sensitive files like `.env`
- Connected project to **MongoDB Atlas**
- Stored DB credentials safely using `.env` file
- Committed initial code to GitHub

**Learnings:**

- Use of `.env` for storing secrets
- Role of `.gitignore` for security
- Environment variable loading with `dotenv`
- Basic MongoDB integration with Mongoose

---

## 🛡️ Security Measures

- `.env` file is ignored using `.gitignore`
- Database credentials are never hardcoded
- Sensitive logic and environment settings stored securely

---

## 🧠 Learning Goals

This project is built for deep learning in:

- Full-stack development
- Secure file handling
- QR code logic
- Scalable backend architecture
- Real-world debugging and deployment

---

## 📌 Project Status

🟢 **Phase 1 Complete**

⏳ Next: **Phase 2 - Vendor QR Code System Setup**

---

## 👨‍💻 Author

**Pratik** – Computer Science student building real-world solutions to learn and grow
