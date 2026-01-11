# MERN AI Image Generator - Debug & Setup Guide

## ✅ Issues Fixed

1. **API Route Mismatch** - Changed frontend from `/api/vi/dalle` to `/api/v1/dalle`
2. **CORS Configuration** - Added proper CORS headers for localhost:5173 and localhost:3000
3. **OpenAI API** - Updated to v4+ syntax (images.generate)
4. **Error Handling** - Added proper error checking and logging
5. **Utils Bug** - Fixed variable name typo in `getRandomPromts()`
6. **Post Routes** - Added GET and POST endpoints for saving posts

---

## 🚀 How to Start the Project

### 1. Backend Setup

```bash
cd backEnd
npm install  # If dependencies not installed
```

**Make sure you have `.env` file with:**

```
OPENAI_API_KEY=your_key_here
MONGODB_URL=your_mongodb_url_here
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

**Start Backend:**

```bash
npm install -g nodemon  # Install nodemon globally (if not installed)
nodemon index.js
```

Expected output:

```
MongoDB connected
Server started on port 8080
```

---

### 2. Frontend Setup

```bash
cd frontEnd
npm install  # If dependencies not installed
npm run dev
```

Expected output:

```
  VITE v7.0.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

---

## 🔍 Testing the Fetch Request

### 1. Open Browser DevTools (F12)

### 2. Go to Network Tab

### 3. Click "Generate" button

### 4. Look for request to `http://localhost:8080/api/v1/dalle`

**Expected Response:**

```json
{
  "photo": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
}
```

---

## ⚠️ Common Issues & Solutions

### Issue: "Provisional headers not shown"

**Solution:** Restart backend server, ensure CORS is enabled

### Issue: "Cannot POST /api/v1/dalle"

**Solution:**

- Check backend is running on port 8080
- Check frontend is calling correct URL
- Check CORS configuration

### Issue: "OPENAI_API_KEY not found"

**Solution:**

- Create `.env` file in backEnd folder
- Add valid OpenAI API key
- Restart backend

### Issue: "MongoDB connection failed"

**Solution:**

- Check MONGODB_URL in `.env`
- Verify MongoDB is running/accessible
- Check network access rules in MongoDB Atlas

### Issue: "Module not found" errors

**Solution:**

```bash
# Backend
cd backEnd
npm install

# Frontend
cd frontEnd
npm install
```

---

## 📝 API Endpoints

### Backend Routes

**DALL-E Image Generation:**

- `POST http://localhost:8080/api/v1/dalle`
- Body: `{ "prompt": "your prompt here" }`
- Response: `{ "photo": "base64_encoded_image" }`

**Posts Management:**

- `GET http://localhost:8080/api/v1/post` - Get all posts
- `POST http://localhost:8080/api/v1/post` - Create new post
- Body: `{ "name": "name", "prompt": "prompt", "photo": "base64_photo" }`

---

## 🐛 Debug Checklist

- [ ] Backend running on port 8080
- [ ] Frontend running on port 5173
- [ ] `.env` file exists in backEnd folder
- [ ] OPENAI_API_KEY is valid
- [ ] MONGODB_URL is valid
- [ ] CORS enabled for localhost:5173
- [ ] Network tab shows 200 status code for /api/v1/dalle
- [ ] Console has no errors

---

## 📱 Frontend Files Structure

```
frontEnd/
├── src/
│   ├── pages/
│   │   ├── CreatePost.jsx (Image generation UI)
│   │   └── Home.jsx (Posts gallery)
│   ├── components/
│   │   ├── FormField.jsx
│   │   ├── Loader.jsx
│   │   └── Card.jsx
│   ├── utils/
│   │   └── index.js (getRandomPrompts)
│   ├── App.jsx (Router setup)
│   └── main.jsx (Entry point)
```

---

## 🔗 Key Dependencies

**Backend:**

- express (v5.2.1)
- mongoose (v9.1.2)
- openai (v6.15.0)
- cors (v2.8.5)

**Frontend:**

- react (v19.1.0)
- react-router-dom (v7.12.0)
- tailwindcss (v4.1.11)
- vite (v7.0.0)

---

Good luck! 🚀
