import express from 'express';
import uploadRouter from './routes/upload.js';
import dotenv from "dotenv";
import mongoRouter from "./routes/mongo.js";
import cors from "cors";
import mongoose from "mongoose";
import placeSchema from "./lib/Schema.js";
import bodyParser from "body-parser";
import AuthRouter from "./routes/AuthRouter.js";
import connectDB from "./lib/db.js";
import Razorpay from "razorpay"; // Added for Razorpay

const app = express();
dotenv.config();

// Razorpay instance setup
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', AuthRouter);
app.use('/api/mongo', mongoRouter);
app.use('/api/upload', uploadRouter);

// Razorpay Subscription Route
app.post("/api/subscribe", async (req, res) => {
    try {
        const subscription = await razorpay.subscriptions.create({
            plan_id: "plan_XXXXXXXXXXXXXX", // 🔁 Replace with your actual Plan ID
            customer_notify: 1,
            total_count: 12,
        });
        res.json({ id: subscription.id });
    } catch (error) {
        console.error("Subscription creation failed:", error);
        res.status(500).json({ error: "Subscription failed" });
    }
});

// Default route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Get places route
app.get('/getPlaces', (req, res) => {
    placeSchema.find()
        .then(places => res.json(places))
        .catch(err => {
            console.error('Error fetching places:', err);
            res.status(500).json({ error: 'Failed to fetch places' });
        });
});

// Update CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'], // Vite dev and preview ports
  credentials: true
}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
