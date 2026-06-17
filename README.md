# 🍴 Recipe App

A Full Stack Recipe Management Application built using React.js, Node.js, Express.js, and MongoDB Atlas.

This application allows users to register, log in securely using JWT authentication, and manage recipes through a modern and responsive interface.

---

# 🌐 Live Demo

### Frontend (Vercel)

https://recipe-app-frontend-mu-murex.vercel.app/

### Backend API (Render)

https://recipe-app-backend-s8nx.onrender.com/

---

# 📂 GitHub Repositories

### Frontend Repository

https://github.com/saicharan123164/recipe-app-frontend

### Backend Repository

https://github.com/saicharan123164/recipe-app-backend

---

# 🚀 Features

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality

---

## 🍽 Recipe Management

* Add New Recipes
* Edit Existing Recipes
* Delete Recipes
* View All Recipes
* Search Recipes
* Category-wise Filtering

---

## ❤️ User Experience Features

* Dark Mode / Light Mode
* Favorite Recipes
* Responsive UI Design
* Loading Indicators
* Toast Notifications
* Hover Effects and Modern UI Cards

---

## 📂 Recipe Categories

Recipes are organized into:

* Veg Recipes
* Non Veg Recipes
* Fast Food Recipes

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Axios
* React Router DOM
* React Toastify

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* BcryptJS

## Deployment

* Vercel (Frontend Hosting)
* Render (Backend Hosting)
* MongoDB Atlas (Cloud Database)

---

# 📁 Project Structure

```txt
Frontend
src/
 ┣ pages/
 ┣ App.jsx
 ┣ main.jsx
 ┗ Home.jsx

Backend
src/
 ┣ controllers/
 ┣ middleware/
 ┣ models/
 ┣ routes/
 ┣ dbconnection.js
 ┗ index.js
```

---

# ⚙️ Installation & Setup

## Clone Frontend Repository

```bash
git clone https://github.com/saicharan123164/recipe-app-frontend.git
```

```bash
cd recipe-app-frontend
npm install
npm run dev
```

Runs on:

```txt
http://localhost:5173
```

---

## Clone Backend Repository

```bash
git clone https://github.com/saicharan123164/recipe-app-backend.git
```

```bash
cd recipe-app-backend
npm install
npm start
```

Runs on:

```txt
http://localhost:3007
```

---

# 🔗 API Endpoints

## User APIs

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| POST   | /users/register | Register User |
| POST   | /users/login    | Login User    |
| GET    | /users          | Get All Users |
| DELETE | /users/:id      | Delete User   |

---

## Recipe APIs

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /receipes     | Get All Recipes  |
| GET    | /receipes/:id | Get Recipe By ID |
| POST   | /receipes     | Add Recipe       |
| PUT    | /receipes/:id | Update Recipe    |
| DELETE | /receipes/:id | Delete Recipe    |

---

# 🔒 Authentication Flow

1. User registers an account
2. User logs in
3. Backend generates JWT Token
4. Token is stored in Local Storage
5. Protected API requests include:

```txt
Authorization: Bearer <token>
```

---

# 🧪 Tested Functionalities

✅ User Registration

✅ User Login

✅ JWT Authentication

✅ Protected Routes

✅ Add Recipe

✅ Edit Recipe

✅ Delete Recipe

✅ Search Recipes

✅ Category Filtering

✅ Logout

✅ Error Handling

---

# 🌟 Future Enhancements

* Recipe Image Upload
* User Profiles
* Recipe Ratings & Reviews
* Comments Section
* AI Recipe Suggestions
* Pagination
* Admin Dashboard
* Advanced Search Filters

---

# 📌 Best Practices Followed

* REST API Architecture
* JWT Authentication
* MVC Pattern
* React Hooks
* Component Reusability
* Responsive Design
* Error Handling
* Secure Password Hashing
* Environment Variables
* Cloud Deployment

---

# 👨‍💻 Author

**Sai Charan**

### Connect with Me

GitHub:
https://github.com/saicharan123164

---

# 📜 License

This project is developed for educational, learning, and portfolio purposes.
