const express = require('express');
const PromptModel = require('../models/PromptModel');

const promptRouter = express.Router();

// route to add a prompt
promptRouter.post('/create-prompt', (req, res, next) => {
    // below is for adding single prompt via postman, etc
    console.log('req.body: ', req.body);
    const { prompt, category } = req.body;
    const promptDocument = new PromptModel({
        prompt, category
    });
    promptDocument.save();
    res.send('route hit successfully');

});

module.exports = promptRouter;
