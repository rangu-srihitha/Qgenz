const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Allowed frontend origins
const allowedOrigins = ['http://localhost:5173', 'http://yourdomain.com'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Parse incoming JSON
app.use(express.json());

// Enable sessions (required for Passport)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport
require('./passportConfig'); // this must configure passport strategies
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Import routes
const { router: authRouter, authMiddleware } = require('./routes/auth');
          // must export a router
const protectedRoutes = require('./routes/protected'); // must export a router
const googleAuthRoutes = require('./routes/googleAuth'); // must export a router

// ✅ Use routes
app.use('/api/auth', authRouter);
app.use('/api/auth', protectedRoutes);
app.use('/api/auth', googleAuthRoutes);

// Start server
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
