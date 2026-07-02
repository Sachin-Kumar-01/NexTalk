# 💬 ChitChat - Real-Time Chat Application

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Full%20Stack-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Socket.IO-Real--Time-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" />
</p>

<p align="center">
A modern, full-stack real-time chat application built with the <b>MERN Stack</b> and <b>Socket.IO</b>. ChitChat enables users to communicate instantly with a beautiful, responsive interface and secure authentication.
</p>

---

## 📖 Overview

**ChitChat** is a real-time messaging platform that provides fast and secure communication between users. It uses **Socket.IO** for instant message delivery, **JWT Authentication** for secure login, and **MongoDB** for storing user and chat data.

The application follows modern development practices with a clean architecture, responsive UI, and scalable backend.

---

# ✨ Features

- 🔐 Secure User Authentication (JWT + HTTP-Only Cookies)
- 💬 Real-Time One-to-One Messaging
- 🟢 Live Online/Offline User Status
- ⚡ Instant Message Updates using Socket.IO
- 🎨 Beautiful & Responsive UI with Tailwind CSS + DaisyUI
- 📱 Mobile-Friendly Design
- 🔄 Persistent Login Sessions
- 📂 MongoDB Database Integration
- 🌐 RESTful APIs using Express.js
- 🧠 Global State Management with Zustand
- 🚀 Ready for Deployment (Frontend & Backend)

---

# 🛠️ Tech Stack

## Frontend

- React (Vite)
- Tailwind CSS
- DaisyUI
- React Router DOM
- Axios
- Zustand
- Socket.IO Client

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- bcryptjs
- Cookie Parser
- CORS
- dotenv

---

# 📂 Project Structure

```

ChitChat/
│
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── jwt/
│   ├── index.js
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── Home/
│   │   ├── context/
│   │   ├── statemanage/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
└── README.md

````

---

# 🚀 Getting Started

## Prerequisites

Before running the project, make sure you have:

- Node.js (v18 or above)
- npm
- MongoDB Atlas account (or Local MongoDB)

---

## Clone the Repository

```bash
git clone https://github.com/yourusername/chitchat.git

cd chitchat
````

---

## Install Dependencies

### Backend

```bash
cd Backend

npm install
```

### Frontend

```bash
cd client

npm install
```

Or install everything from the root directory:

```bash
npm run install-all
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
PORT=7777

MONGODB_URI=your_mongodb_connection_string

JWT_TOKEN=your_secret_key

FRONTEND_URL=http://localhost:5173
```

---

# ▶️ Run the Application

## Start Backend

```bash
cd Backend

npm run dev
```

## Start Frontend

```bash
cd client

npm run dev
```

---

# 🌍 Application URLs

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:7777
```

---

# 🔄 Application Flow

```
User Login / Signup
        │
        ▼
JWT Authentication
        │
        ▼
Connect to Socket.IO
        │
        ▼
Fetch Users
        │
        ▼
Start Real-Time Chat
        │
        ▼
Messages Stored in MongoDB
```

---

# 🔐 Authentication

* JWT-based authentication
* Passwords encrypted using bcryptjs
* HTTP-only cookies
* Protected API routes
* Secure user sessions

---

# 📌 Future Improvements

* ✅ Group Chats
* ✅ Typing Indicator
* ✅ Read Receipts
* ✅ Image & File Sharing
* ✅ Voice Messages
* ✅ Video Calling
* ✅ Emoji Support
* ✅ Dark/Light Theme Toggle
* ✅ Push Notifications

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Utkarsh Baghel**

* GitHub: https://github.com/Utkarshb77
* LinkedIn: https://www.linkedin.com/in/utkarsh-baghel-456375290/

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It really helps and motivates me to build more awesome projects!

---

# 📄 License

This project is licensed under the **ISC License**.

```
```
