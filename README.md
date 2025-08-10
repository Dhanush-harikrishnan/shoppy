# 🛍️ Shoppy

[![GitHub license](https://img.shields.io/github/license/Dhanush-harikrishnan/shoppy?style=flat-square)](https://github.com/Dhanush-harikrishnan/shoppy/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Dhanush-harikrishnan/shoppy?style=flat-square)](https://github.com/Dhanush-harikrishnan/shoppy/issues)
[![GitHub stars](https://img.shields.io/github/stars/Dhanush-harikrishnan/shoppy?style=flat-square)](https://github.com/Dhanush-harikrishnan/shoppy/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Dhanush-harikrishnan/shoppy?style=flat-square)](https://github.com/Dhanush-harikrishnan/shoppy/network)
[![Node.js Version](https://img.shields.io/badge/Node.js-16%2B-green?style=flat-square)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A modern, full-stack e-commerce platform built with cutting-edge web technologies. Experience seamless online shopping with a beautiful, responsive interface and powerful backend.

🔗 **[Live Demo](https://shoppy-demo.vercel.app)** | 📖 **[Documentation](https://github.com/Dhanush-harikrishnan/shoppy/wiki)** | 🐛 **[Report Bug](https://github.com/Dhanush-harikrishnan/shoppy/issues)**

## ✨ Features

### 🛒 Core Shopping Features
- **Product Catalog** - Browse through categorized products with advanced filtering
- **Shopping Cart** - Add, remove, and modify items with real-time updates
- **Secure Checkout** - Multiple payment options with secure processing
- **User Authentication** - JWT-based login/registration system
- **Order Management** - Track orders and view purchase history
- **Product Search** - Advanced search with autocomplete suggestions

### 👤 User Experience
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between themes for comfortable browsing
- **Wishlist** - Save favorite products for later purchase
- **Product Reviews** - Rate and review products
- **Real-time Notifications** - Get updates on order status and promotions

### 🔧 Admin Features
- **Product Management** - Add, edit, and delete products
- **Order Processing** - Manage customer orders and shipping
- **Analytics Dashboard** - View sales statistics and user metrics
- **Inventory Management** - Track stock levels and low inventory alerts

## 🏗️ Tech Stack

### Frontend
- **React.js** - Modern UI library with hooks
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Material-UI / Styled Components** - UI components and styling
- **Framer Motion** - Smooth animations and transitions

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling

### Development & Deployment
- **Webpack** - Module bundling
- **Babel** - JavaScript transpilation
- **ESLint & Prettier** - Code linting and formatting
- **Jest** - Testing framework
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhanush-harikrishnan/shoppy.git
   cd shoppy
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```
   
   **Backend Environment Variables (.env)**
   ```bash
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/shoppy
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   STRIPE_SECRET_KEY=your_stripe_secret
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_EMAIL=your_email@gmail.com
   SMTP_PASSWORD=your_app_password
   ```

4. **Database Setup**
   ```bash
   # Make sure MongoDB is running
   # For local MongoDB:
   mongod
   
   # For MongoDB Atlas, update MONGODB_URI in .env
   ```

### Running the Application

#### Development Mode
```bash
# Option 1: Run both frontend and backend simultaneously
npm run dev

# Option 2: Run separately
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

#### Production Mode
```bash
# Build frontend
cd frontend
npm run build

# Start backend
cd ../backend
npm start
```

### Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs

## 📸 Screenshots

### Homepage
![Homepage Screenshot](./docs/screenshots/homepage.png)
*Modern, responsive homepage with featured products*

### Product Catalog
![Product Catalog](./docs/screenshots/products.png)
*Advanced filtering and search functionality*

### Shopping Cart
![Shopping Cart](./docs/screenshots/cart.png)
*Intuitive cart management with real-time updates*

### Admin Dashboard
![Admin Dashboard](./docs/screenshots/admin.png)
*Comprehensive admin panel for store management*

## 🎬 Demo

![Shoppy Demo](./docs/demo/shoppy-demo.gif)
*Complete shopping experience walkthrough*

## 🧪 Testing

```bash
# Run all tests
npm test

# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test

# Run tests with coverage
npm run test:coverage
```

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop services
docker-compose down
```

## 📚 API Documentation

The API documentation is available at `/api-docs` when running the backend server. Key endpoints include:

- **Authentication**: `/api/auth/*`
- **Products**: `/api/products/*`
- **Orders**: `/api/orders/*`
- **Users**: `/api/users/*`
- **Admin**: `/api/admin/*`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Multi-vendor marketplace support
- [ ] Advanced analytics and reporting
- [ ] Mobile app (React Native)
- [ ] AI-powered product recommendations
- [ ] Social login integration
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dhanush Harikrishnan**
- GitHub: [@Dhanush-harikrishnan](https://github.com/Dhanush-harikrishnan)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- Icons provided by [Heroicons](https://heroicons.com/)
- UI inspiration from modern e-commerce platforms
- Community feedback and feature suggestions

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Dhanush-harikrishnan/shoppy&type=Date)](https://star-history.com/#Dhanush-harikrishnan/shoppy&Date)

---

<div align="center">
  <h3>🌟 If you found this project helpful, please consider giving it a star! 🌟</h3>
  <p>Made with ❤️ by <a href="https://github.com/Dhanush-harikrishnan">Dhanush Harikrishnan</a></p>
</div>
