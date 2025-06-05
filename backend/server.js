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

const app = express();
dotenv.config();

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

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Get places route
app.get('/getPlaces',(req, res) =>{
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