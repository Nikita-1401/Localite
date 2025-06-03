import express from 'express';
import uploadRouter from './routes/upload.js';
import dotenv from "dotenv";
import connectDB from './lib/db.js';
import mongoRouter from "./routes/mongo.js";
import cors from "cors";
import mongoose from "mongoose";
import userSchema from "./lib/Schema.js";

const app = express();
dotenv.config();

app.use(cors());

//connect to database
connectDB();

//middleware
app.use(express.json());

//server port
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

//routes
app.use("/api/mongo", mongoRouter);
app.use("/api/upload", uploadRouter);

app.get('/getUsers',(req, res) =>{
    userSchema.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


