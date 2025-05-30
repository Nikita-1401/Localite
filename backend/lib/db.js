//lib/db.js

import mongoose from 'mongoose';

const mongo_url = process.env.MONGO_CONN;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Localite',{
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log('MongoDB Connection Error: ', err);
    }
}

export default connectDB;