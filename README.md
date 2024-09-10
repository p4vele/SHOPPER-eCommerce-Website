

# SHOPPER E-Commerce Website

This is a full-stack e-commerce web application providing features such as product browsing, shopping cart management, and user authentication.

## Table of Contents
- [Technologies](#technologies)
- [Live Demo](#live-demo)
- [Setup](#setup)
- [Available Commands](#available-commands)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [License](#license)

## Technologies
   **MERN Stack** 
- **Frontend**: React.js (Hosted on [Render](https://render.com))
- **Backend**: Node.js, Express.js (Hosted on [Render](https://render.com))
- **Database**: MongoDB

## Live Demo
The application is live and can be accessed here:

- **Frontend**: [shopper-ecommerce-website-frontend.onrender.com](https://shopper-ecommerce-website-frontend.onrender.com/)
- **Admin Panel**: [shopper-ecommerce-website-admin.onrender.com](https://shopper-ecommerce-website-admin.onrender.com/)
- **Backend**: [shopper-ecommerce-website-backend.onrender.com](https://shopper-ecommerce-website-backend.onrender.com/)

## Setup

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm or yarn

### Install dependencies

For the backend:

- cd backend
- npm install
The frontend is already hosted, so you don't need to set it up locally unless you're developing it further. 
If you want to run the frontend locally:


- cd fronten
- npm install

### Environment Variables

Make sure to set the environment variables in a .env file for the backend. Here’s an example of what to include:

Backend .env file:

- PORT=5000
- MONGO_URI=<your-mongodb-uri>
- JWT_SECRET=<your-jwt-secret>
Running the Backend Locally
To run the backend server locally:

Now, you can access the backend at http://localhost:5000.

## Available Commands
### Backend
- Start the backend: npm start

- Run backend in dev mode: npm run dev

- Lint the backend: npm run lint

- Test the backend: npm test

#### Frontend
The frontend is deployed at shopper-ecommerce-website-frontend.onrender.com. If you'd like to run it locally:

- Start the frontend: npm start
- Build the frontend for production: npm run build
- Lint the frontend: npm run lint
- Test the frontend: npm test
## API Endpoints
 Authentication
- Login: POST /login
- Signup: POST /signup
Products
- Get all products: GET /allproducts
- Get product by ID: GET /products/:id
Cart
- Get cart items: POST /getcart
- Add to cart: POST /addtocart
- Remove from cart: POST /removefromcart
Orders
- Get user orders: GET /myorders
- Place a new order: POST /order
## Features
- User authentication (login/signup)
- Product browsing
- Add/remove items from cart
- Checkout and order management
## License
This project is licensed under the MIT License.
### Key Changes
- **Live Demo**: Added the live demo links to the frontend and backend.
- **Frontend Setup**: Mentioned that the frontend is already deployed and doesn't need to be run locally unless needed for development.
- **Backend Setup**: Retained instructions for running the backend locally.

This version highlights that the frontend is hosted and only provides instructions for running the backend locally. Let me know if you'd like any further changes!

## Contact Me  

 kormilchikpavel@gmail.com

