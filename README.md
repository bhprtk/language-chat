# 🌍 Inter-Language Chat App

A real-time chat app where people speaking different languages can communicate in their **own language**, thanks to live translation. Built with **Socket.IO**, **Node.js**, and **Google Translate API**.

---

## 📦 Features

- 💬 Real-time multilingual chat
- 🔄 Automatic translation using Google Translate API
- 🌐 Chat in English 🇺🇸 or Spanish 🇲🇽🇪🇸
- 🔌 WebSocket communication with Socket.IO
- ⚡ Built with Node.js + Express backend
- 🎨 ReactJS frontend (Flux pattern)

---

## 📁 Project Structure

```
language-chat/
├── public/              # Static assets
├── js/                  # Frontend JavaScript (Flux + React)
├── server.js            # Express + Socket.IO + Translation
├── package.json
├── webpack.config.js
```

---

## 🛠 Installation

Clone the repo:

```bash
git clone https://github.com/bhprtk/language-chat
cd language-chat
npm install
```

---

## ▶️ Usage

Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`

---

## 🔧 Tech Stack

- **Frontend**: ReactJS + Flux
- **Backend**: Node.js + Express
- **WebSockets**: Socket.IO
- **Translation**: Google Translate API
- **Deployment**: Heroku

---

## ⚠️ Notes

- The current UI is functional but outdated.
- For modern use, consider rebuilding the UI with a fresh React setup.
- All translation logic is handled in `server.js`.

---

## ✨ Future Improvements

- Add more supported languages
- Better UI/UX
- Support for group chats
- User authentication

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

Built by [Pratik Bhandari](https://bhprtk.com)

---
