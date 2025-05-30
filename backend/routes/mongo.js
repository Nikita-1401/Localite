// routes/mongo.js
import express from "express";
import User from "../lib/Schema.js";

const router = express.Router();

// POST /api/mongo/add
router.post("/add", async (req, res) => {
  try {
    const { name, description, landmark, location, category, imageUrl } = req.body;

    if (!name || !description || !landmark || !location || !category || !imageUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPlace = new User({ name, description, landmark, location, category, imageUrl });
    await newPlace.save();

    res.status(201).json({ message: "Place saved to database", place: newPlace });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
