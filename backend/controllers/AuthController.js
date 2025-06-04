import UserModel from '../lib/User.js';
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
try {
    const {name, email, password} = req.body;
    console.log("Request body:", req.body);
    
    if (!name || !email || !password) {
        console.error("Missing required fields");
        return res.status(400).json({
            message: "Missing required fields",
            success: false
        });
    }

    const user = await UserModel.findOne({email}).catch(err => {
        console.error("Error checking existing user:", err);
        throw err;
    });

    //check if user already exists
    if(user){
        return res.status(409)
        .json({message: "User already exists", success: false});
    }
    
    //hash password and create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
        name, 
        email, 
        password: hashedPassword
    });

    try {
        await newUser.save();
        console.log("User saved successfully:", newUser._id);
        res.status(201)
        .json({message: "Signup successful", success: true});
    } catch (saveError) {
        console.error("Error saving user:", saveError);
        throw saveError;
    }
} catch (error) {
    console.error("Signup error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name
    });
    res.status(500)
    .json({
        message: "Internal server error", 
        error: error.message,
        success: false
    });
}
}

export {signup};