# Full Stack CRUD App with Sequelize and React

A simple full-stack CRUD application demonstrating product management with a Node.js backend using Sequelize ORM and MySQL, and a React frontend.

## Features

- Backend: Express.js with Sequelize ORM (MySQL dialect)
- Basic health check endpoint
- Product CRUD operations (Create, Read, Update, Delete)
- Frontend: React app with Vite for CRUD operations
- RESTful API design

## Project Structure

```
sequelize-crud/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── ProductController.js
│   ├── models/
│   │   └── Product.js
│   ├── repositories/
│   │   └── ProductRepository.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── services/
│   │   └── ProductService.js
│   ├── .env
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── assets/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MySQL server
- npm or yarn

## Setup

### Database Setup

1. Create a MySQL database named `crud_db`
2. Update the `.env` file in the backend directory with your MySQL credentials

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

## API Endpoints

- `GET /health` - Health check
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Usage

1. Ensure both backend and frontend servers are running
2. Open the frontend in your browser
3. Use the form to add new products
4. View, edit, or delete existing products

## Environment Variables

Create a `.env` file in the backend directory with:

```
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=crud_db
DB_PORT=3306
PORT=3000
```