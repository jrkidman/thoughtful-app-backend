const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const PermissionService = require('./PermissionService');

const cleanUser = (userDocument) => {
    return {
        id: userDocument._id,
        firstName: userDocument.firstName,
        lastName: userDocument.lastName,
        email: userDocument.email,
        profilePicture: userDocument.profilePicture,
        isAdmin: userDocument.isAdmin,
    }
}

const getToken = (userId) => {
    return jwt.sign({ userId, iat: Date.now() }, process.env.AUTH_SECRET_KEY);
};


const signOut = async (req, res, next) => {
    res.clearCookie('session_token');
    res.send('Signed out successfully');
};

// Route to create user accounts
const registerUser = async (req, res, next) => {
    // save the user information in the database

    // get credentials and user info from the front end
    const { firstName, lastName, email, password, profilePicture, isAdmin } = req.body;

    // HASH (Bcrypt) the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // store a password hash, not the password
        const userDocument = new UserModel({
            firstName, lastName, email, password: hashedPassword, profilePicture
        });
        console.log("userDocument: ", userDocument);

        await userDocument.save();
        

        const token = getToken(userDocument._id);

        res.cookie('session_token', token, {
            httpOnly: true,
            // Should be true when using https a.k.a. in prod.
            secure: false
        })
        res.send({ user: cleanUser(userDocument) })
    } catch (error) {
        next(error);
    }

};



const signIn = async (req, res, next) => {
    // Get the credentials from request
    const { email, password } = req.body.credentials;
    // console.log("sign in request received");

    try {
        // Check if that particular user exist in the database
        const foundUser = await UserModel.findOne({ email: email })

        // if the user does exist in the db
        if (!foundUser) {
            // if password doesnt match tell the user credentials are not valid
            return res.status(401).send('User not found or incorrect credentials');
        }

        // verify the password matches.
        const passwordMatch = await bcrypt.compare(password, foundUser.password);

        if (!passwordMatch) {
            // if password doesnt match tell the user credentials are not valid
            return res.status(401).send('User not found or incorrect credentials 2');
        }

        // The user can be successfully authenticated
        // Send user data back to client
        const token = getToken(foundUser._id);

        res.cookie('session_token', token, {
            httpOnly: true,
            // Should be true when using https a.k.a. in prod.
            secure: false
        })

        res.send({ user: cleanUser(foundUser) })

    } catch (error) {
        next(error);
    }
    // Provide a way for the user to not have to enter their password again in future request
}





const UserService = {
    signIn,
    signOut,
    registerUser,
}

module.exports = UserService;

