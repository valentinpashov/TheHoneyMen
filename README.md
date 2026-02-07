# 🐝 TheHoneyMen
**TheHoneyMen** is a modern Full Stack web application designed for managing honey products. The project connects a robust Java Spring Boot backend with a dynamic React frontend.

## ✨ Key Features

* **Shopping Cart:** Fully functional cart with add/remove capabilities and local storage persistence.
* **Checkout Process:** Custom multi-step checkout form with validation.
* **Automated Orders:** Integrated **EmailJS** to send orders directly to the owner's email without requiring server-side payment processing.
* **Responsive Design:** optimized for mobile and desktop devices.
* **Security:** Environment variables protection for API keys.

## 🚀 Tech Stack

### **Backend (Server)**
* **Java**
* **Spring Boot 3**
* **PostgreSQL** 
* **Hibernate** 
* **Maven** 

### **Frontend (Client)**
* **React.js**
* **CSS3** 
* **Fetch API**
* **EmailJS** 

## 📂 Project Structure

```text
TheHoneyMen/
├── backend/            
│   ├── src/main/java/com/example/backend/
│   │   ├── controllers/    
│   │   ├── models/         
│   │   ├── repositories/   
│   │   └── DataInitializer.java 
│   └── src/main/resources/application.properties
│
├── frontend/            
│   ├── public/images/  
│   ├── src/
│   │   ├── components/ 
│   │   ├── App.js      
│   │   └── App.css     
│   ├── .env            
│   └── package.json
└── README.md    
```

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### 1. Database Setup
* Create a new PostgreSQL database:
```
CREATE DATABASE honeymen_db;
```

### 2. Run the Backend (Java)
* Open the backend folder in IntelliJ IDEA.
* Let Maven download the dependencies.
* Run the BackendApplication.java file.
* The server will start at: http://localhost:8080

### 3. Setup Frontend Environment Variables
⚠️ This project uses EmailJS. You must create a .env file in the frontend root directory to make the checkout work.

 *  Create a file named .env inside frontend/ and add your keys:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Run the Frontend (React)
* Open a terminal and navigate to the frontend folder:
```
cd frontend
```
* Install dependencies:
```
npm install
```
* Start the React server:
```
npm start
```
* The app will open at: http://localhost:3000
