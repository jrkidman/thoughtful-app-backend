const express = require('express');
const PromptModel = require('../models/PromptModel');

const promptRouter = express.Router();

// route to create user account
promptRouter.post('/create-prompt', (req, res, next) => {
    // console.log('prompt route is working');
    console.log('req.body: ', req.body);

    const { prompt, category } = req.body;

    const promptDocument = new PromptModel({
        prompt, category
    });

    promptDocument.save();

    res.send('route hit successfully');

});

module.exports = promptRouter;
