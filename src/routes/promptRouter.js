const express = require('express');
const { mongoose } = require('mongoose');
const PromptSchema = require('../models/PromptModel');
const PromptModel = require('../models/PromptModel');

const promptRouter = express.Router();

// route to add a prompt, need to work on this and create the page on the frontend

promptRouter.post('/add-prompt', (req, res, next) => {
    // below is for adding a prompt via postman, etc
    console.log('req.body: ', req.body);
    const { prompt, category } = req.body;
    const promptDocument = new PromptModel({
        prompt, category
    });
    promptDocument.save();
    res.send('route hit successfully');
});





const getPrompt = async (req, res, next) => {
    try {
        //get random entry
        let random = Math.floor(Math.random() * 177)
        //fetch a prompt
        const randomPrompt = await PromptModel.findOne().skip(random)

        //return it to the frontend
        res.send(randomPrompt.prompt);
    }
    catch (error) {
        next(error);
    }
};

promptRouter.get('/prompt', getPrompt);

// simple findOne to test route
// const getPrompt = async (req, res, next) => {
//     try {
//         const randomPrompt = await PromptModel.findOne()
//         res.send(randomPrompt.prompt);
//     }
//     catch (error) {
//         next(error);
//     }
// };









module.exports = promptRouter;
