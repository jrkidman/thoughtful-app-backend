const express = require('express');
// const UserModel = require('../models/UserModel');
const UserService = require('../services/UserService');


const userRouter = express.Router();

// route to create user account
userRouter.post('/api/register-user', UserService.registerUser);
userRouter.put('/api/edit-profile', UserService.registerUser);

//this block works on postman to register a user with the saved postman route
// userRouter.post('/register-user', (req, res, next) => {
//     console.log('req.body: ', req.body);
//     //route to test on postman
//     const { firstName, lastName, email, phoneNumber, password, profilePicture, isAdmin } = req.body;
//     const userDocument = new UserModel({
//         firstName, lastName, email, phoneNumber, password, profilePicture, isAdmin
//     });
//     userDocument.save();
//     res.send('route hit successfully');

// });

// routes to sign in and out
userRouter.post('/api/login', UserService.signIn);

userRouter.get('/api/sign-out', UserService.signOut)



module.exports = userRouter;




