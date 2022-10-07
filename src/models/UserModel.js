const mongoose = require('mongoose');

// const loveLanguageOptions = [
//     wordsOfAffirmation,
//     physicalTouch,
//     giftGiving,
//     qualityTime,
//     actsOfService
// ];

// const frequencyOptions = [
//     daily,
//     tuesdayFriday,
//     mondayWednesdayFriday,
//     weekly
// ];


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true, trim: true },
    profilePicture: { type: String, required: true, trim: true },
    isAdmin: { type: Boolean, required: true, default: false },
    partnerName: { type: String, required: false, trim: true },
    anniversary: { type: Date, required: false },
    partnerBirthday: { type: Date, required: false },
    // preferredLoveLanguages: { type: Array, required: true, default: loveLanguageOptions },
    // preferredFrequency: {type: String, required: true, default: frequencyOptions[0] }

})

// const user = {
    // name: string,
    // email: string,
    // phoneNumber: string,
    // zipcode: string,
    // gender: string,
    // orientation: string,
    // dateOfBirth: date,
    // anniversary: date,
    // importantDates: [
    //     { 
    //         event: string, 
    //         date: date, 
    //     }],
    // partnerName: string,
    // partnerBirthday: date,
    // partnerPhoneNumber: string,
    // preferredLoveLanguages: [
    //     wordsOfAffirmation, 
    //     physicalTouch, 
    //     giftGiving, 
    //     qualityTime, 
    //     actsOfService],
//     frequencyOfReminders: [
//         twiceADay,
//         onceADay,
//         weekdays,
//         fourXWeek,
//         threeXWeek,
//         twoXWeek,
//         oneceXWeek,
//         WeekendsOnly],
// }







const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;