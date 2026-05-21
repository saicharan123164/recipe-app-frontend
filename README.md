# 🍴 Recipe App Frontend

A modern and responsive Recipe Management Application frontend built using React.js.  
This application allows users to explore, search, add, edit, and manage recipes with authentication and protected operations integrated with a Node.js + Express backend API.

---

# 🚀 Features

## 🔐 Authentication
- User Registration
- User Login
- JWT Token Based Authentication
- Protected Recipe Operations
- Logout Functionality

---

## 🍽 Recipe Management
- Add New Recipes
- Edit Existing Recipes
- Delete Recipes
- View All Recipes
- Search Recipes
- Category-wise Recipe Display

---

## ❤️ User Experience Features
- Dark Mode / Light Mode
- Favorite Recipes
- Responsive UI Design
- Loading Indicators
- Toast Notifications
- Hover Effects and Modern UI Cards

---

## 📂 Recipe Categories
Recipes are organized separately into:
- Veg Recipes
- Non-Veg Recipes
- Fast Food Recipes

---

# 🛠️ Tech Stack

## Frontend Technologies
- React.js
- Axios
- React Hooks
- React Toastify
- CSS Inline Styling

---

# 📁 Project Structure

```txt
src/
 ┣ components/
 ┣ pages/
 ┣ App.jsx
 ┣ main.jsx
 ┗ Home.jsx
```

---

# ⚙️ Installation and Setup

## 1️⃣ Clone Repository

```bash
git clone <your-frontend-repo-url>
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd recipe-app-frontend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

Application runs on:

```txt
http://localhost:5173
```

---

# 🔗 Backend Connection

This frontend communicates with the backend API running on:

```txt
http://localhost:3007
```

Make sure backend server is running before starting frontend.

---

# 📡 API Integration

The frontend integrates with backend endpoints for:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /users/register | Register User |
| POST | /users/login | Login User |
| GET | /receipes | Get All Recipes |
| POST | /receipes | Add Recipe |
| PUT | /receipes/:id | Update Recipe |
| DELETE | /receipes/:id | Delete Recipe |

---

# 🔒 Authentication Flow

1. User logs in
2. Backend generates JWT token
3. Token is stored in localStorage
4. Protected requests include Authorization header

Example:

```txt
Authorization: Bearer <token>
```

---

# 🎨 UI Features

- Modern Responsive Design
- Dynamic Recipe Cards
- Smooth Hover Effects
- Search Filtering
- Dark Mode Toggle
- Toast Notifications

---

# 🧪 Testing Features

The following functionalities were tested:

✅ User Login  
✅ User Registration  
✅ JWT Authentication  
✅ Add Recipe  
✅ Update Recipe  
✅ Delete Recipe  
✅ Search Recipes  
✅ Logout  
✅ Protected Routes  
✅ Error Handling  

---

# 🌟 Future Improvements

- Recipe Image Upload
- User Profile Page
- Comments and Ratings
- AI Recipe Suggestions
- Pagination
- Admin Dashboard
- Cloud Deployment

---

# 📌 Best Practices Followed

- Component Reusability
- State Management using React Hooks
- API Separation using Axios
- Protected API Requests
- Responsive Layout Design
- Clean Folder Structure
- Proper Error Handling
- JWT Based Authorization

---

# 👨‍💻 Author

Sai Charan

---

# 📜 License

This project is developed for educational and portfolio purposes.