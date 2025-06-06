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
import Razorpay from "razorpay";
import crypto from 'crypto';

const app = express();
dotenv.config();

// Razorpay instance setup
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Middleware
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
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
        // Replace this with your actual Plan ID from Razorpay dashboard
        const planId = "plan_Lv6rHa6sZXXXXXXXXX";

        const subscription = await razorpay.subscriptions.create({
            plan_id: planId,
            customer_notify: 1,
            total_count: 12
        });

        res.json({ id: subscription.id });
    } catch (error) {
        console.error("Subscription creation failed:", error);
        res.status(500).json({ error: "Subscription failed", details: error.message });
    }
});

// Payment Verification Route
app.post("/api/payment/verify", async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } = req.body;

        const generated_signature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_payment_id}|${razorpay_subscription_id}`)
            .digest('hex');

        if (generated_signature === razorpay_signature) {
            // Update subscription in DB if needed
            res.json({ success: true, message: "Payment verified successfully" });
        } else {
            res.status(400).json({ success: false, message: "Payment verification failed" });
        }
    } catch (error) {
        console.error("Payment verification failed:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Default Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Get places
app.get('/getPlaces', (req, res) => {
    placeSchema.find()
        .then(places => res.json(places))
        .catch(err => {
            console.error('Error fetching places:', err);
            res.status(500).json({ error: 'Failed to fetch places' });
        });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
