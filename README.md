# 📖 ReadAlong for Rural Kids – AI-powered Reading Assistant

A simple web app that helps rural kids improve reading and pronunciation skills using AI.

## 🌟 Features
- 🗣️ **Text-to-Speech (TTS)** to read storybooks aloud
- 🎤 **Speech-to-Text (STT)** to check if the child repeats the sentence correctly
- ⭐ **Star-based rewards** for correct reading
- 🌐 **Supports Multiple Languages** – English, Hindi, Kannada
- 📊 **Backend** powered by PHP + MySQL for storing and fetching stories

## 🔧 Tech Stack
- Frontend: HTML, Tailwind CSS, JavaScript
- Backend: PHP (XAMPP)
- AI: HuggingFace Transformers (TTS & STT)
- Database: MySQL

## 📦 Folder Structure
readalong/ ├── index.html ├── main.js ├── speak.php ├── get_story.php ├── db_config.php └── assets/

## 🚀 How to Run (Locally with XAMPP)
1. Place the folder inside `htdocs/` (XAMPP directory)
2. Start Apache & MySQL from XAMPP
3. Import the SQL file to create the `readalong` DB
4. Open browser: `http://localhost/readalong/index.html`

## 📌 Notes
- Ensure Edge/Chrome supports the chosen TTS languages.
- Hindi and Kannada work best with STT, but TTS support may vary.

## 🛠️ Future Improvements
- Mobile-friendly UI
- Add user login for tracking progress
- Gamified levels and stories

---

## 🤝 Made with ❤️ by K3

