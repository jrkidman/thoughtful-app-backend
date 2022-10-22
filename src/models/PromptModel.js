const mongoose = require('mongoose');


const PromptSchema = new mongoose.Schema({
        // prompt: { type: String, required: true, trim: true },
        // category: { type: String, required: true, trim: true },
        prompts: []
});


const PromptModel = mongoose.model('Prompt', PromptSchema);

module.exports = PromptModel;