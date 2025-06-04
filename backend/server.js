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

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/mongo", mongoRouter);
app.use("/api/upload", uploadRouter);
app.use('/api/auth', AuthRouter);

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

// Server port
const port = process.env.PORT || 5000;

// Connect to database and start server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();