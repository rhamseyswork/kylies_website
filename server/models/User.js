const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userRole: { type: String, default: "PFO", required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    streetAddress: { type: String, required: true },
    streetAddress2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    password: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);