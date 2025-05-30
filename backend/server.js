import express from 'express';
import uploadRouter from './routes/upload.js';
import dotenv from "dotenv";
import connectDB from './lib/db.js';
import mongoRouter from "./routes/mongo.js";

const app = express();
dotenv.config();


//connect to database
connectDB();

//middleware
app.use(express.json());

//server port
const port = process.env.PORT || 5000;

//routes

app.use("/api/mongo", mongoRouter);
app.use("/api/upload", uploadRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


