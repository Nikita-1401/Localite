import express from 'express';
import { LoginValidation, SignUPValidation } from '../middlewares/AuthValidation.js';
import { signup, login } from '../controllers/AuthController.js'; // Corrected capitalization

const Router = express.Router();

//login route
Router.post('/login', LoginValidation, login);

//signup route
Router.post('/signup', SignUPValidation, signup);

export default Router;