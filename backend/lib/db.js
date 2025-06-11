<<<<<<< HEAD
//lib/db.js

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Localite');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log('MongoDB Connection Error: ', err);
    }
}

export default connectDB;
=======
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("✖️ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
>>>>>>> df40efa904236ea4ee6d41cc144800c2595d2801
