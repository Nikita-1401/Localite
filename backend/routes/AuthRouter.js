import express from 'express';
import { LoginValidation, SignUPValidation } from '../middlewares/AuthValidation.js';
import { signup } from '../controllers/Authcontroller.js';

const Router = express.Router();

// Router.post('/login', LoginValidation, login);

//signup route
Router.post('/signup', SignUPValidation, signup);

export default Router;