import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Add a subscription field to your User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscription'
    },
    isSubscribed: {
        type: Boolean,
        default: false
    }
});

// Fix: Check if already compiled
const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;