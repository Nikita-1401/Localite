import express from 'express';
import uploadRouter from './routes/upload.js';
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
app.use("/api/upload", uploadRouter);
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


