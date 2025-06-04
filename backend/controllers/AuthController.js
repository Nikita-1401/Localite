import UserModel from '../lib/User.js';
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
try {
    const {name, email, password} = req.body;

    const user = await UserModel.findOne({email});

    //check if user already exists
    if(user){
        return res.status(409)
        .json({message: "User already exists", success: false});
    }
    //create new user
    const userModel = new UserModel({name, email, password});
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201)
    .json({message: "Signup successful", success: true})
} catch (error) {
    res.status(500)
    .json({message: "Internal server error", success: false})
}
}

export {signup};