const express = require('express');
const UserModel = require('../models/UserModel');

const userRouter = express.Router();

// route to create user account
userRouter.post('/register-user', (req, res, next) => {
    // console.log('our user route is working');
    console.log('req.body: ', req.body);

    const { firstName, lastName, email, phoneNumber, password, profilePicture, isAdmin, partnerName, anniversary, partnerBirthday } = req.body;

    const userDocument = new UserModel({
        firstName, lastName, email, phoneNumber, password, profilePicture, isAdmin, partnerName, anniversary, partnerBirthday
    });

    userDocument.save();

    res.send('route hit successfully');

});

module.exports = userRouter;




