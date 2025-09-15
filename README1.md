# Student Feedback System

This project lets students give feedback about their courses.  
It has two parts:
- Frontend (student website)
- Backend (server + database)

---

## How to Run

### Backend
1. Open the student-feedback-backend folder.  
2. Run:npm install
       node server.js
3. Backend runs at: http://localhost:5000

---

### Frontend
1. Open the course-feedback-frontend folder.  
2. Run:npm install
       npm start
3. Frontend runs at: http://localhost:3000

---

## MongoDB Setup
1. Create an account at [MongoDB Atlas](https://www.mongodb.com/atlas).  
2. Copy your connection string.  
3. Put it inside a .env file in backend like this:
   PORT = 5000
   MONGO_URI = your_connection_string_here
   JWT_SECRET=anythingsecret
---

## Test Login
You can create your own account by signing up on the website.  
Or use this sample: Email:test@example.com
                    Password: Test@123
---

## Deployment Links
- Frontend: (https://student-feedback-system.netilfy.app)
- Backend: (https://student-feedback-backend.ondrender.com)
   
