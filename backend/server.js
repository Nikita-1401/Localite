import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Razorpay from "razorpay";
import crypto from "crypto";
import bodyParser from "body-parser";

import connectDB from "./lib/db.js";
import placeSchema from "./lib/Schema.js";
import uploadRouter from "./routes/upload.js";
import mongoRouter from "./routes/mongo.js";
import AuthRouter from "./routes/AuthRouter.js";

dotenv.config();
const app = express();
connectDB();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Middleware
app.use(cors({ 
  origin: process.env.ALLOWED_ORIGINS,
  credentials: true 
}));
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", AuthRouter);
app.use("/api/mongo", mongoRouter);
app.use("/api/upload", uploadRouter);

// Razorpay Order Creation  
app.post("/api/subscribe", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const order = await razorpay.orders.create({
      amount, // in paise
      currency,
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Order creation failed:", error);
    res.status(500).json({ error: "Order failed", details: error.message });
  }
});

// Razorpay Payment Verification
app.post("/api/payment/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Payment verification failed:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Dummy routes
app.get("/", (req, res) => res.send("Hello Nikita"));

app.get("/getPlaces", (req, res) => {
  placeSchema
    .find()
    .then((places) => res.json(places))
    .catch((err) => {
      console.error("Error fetching places:", err);
      res.status(500).json({ error: "Failed to fetch places" });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
