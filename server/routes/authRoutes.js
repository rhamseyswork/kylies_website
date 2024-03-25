const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path as necessary
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const jwt = require('jsonwebtoken');
require('dotenv').config();





// A simple GET route for /api/user
router.get('/', async (req, res) => {
    res.status(200).json({ message: "You've reached /api/user" });
});

// Example of using the middleware in a protected route
router.get('/protected', authenticateToken, (req, res) => {
    // This route is now protected, and `req.user` will have the payload from the verified JWT
    res.json({ message: "Access to protected data" });
});


// Signup route
router.post('/signup', async (req, res) => {
    console.log(req); // Check the incoming request data

    try {
        const { username, password, firstName, lastName, email, phoneNumber, streetAddress, streetAddress2, city, state, zip } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance with all fields
        const user = new User({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            email,
            phoneNumber,
            streetAddress,
            streetAddress2,
            city,
            state,
            zip,
            // Include any other fields as per your schema
        });

        // Save the new user to the database
        const newUser = await user.save();

        // Respond with a success message and the created user object
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    // Find the user by username
    const user = await User.findOne({ username: req.body.username });
    if (user) {
        // Compare submitted password with the hashed password in the database
        const isValid = await bcrypt.compare(req.body.password, user.password);
        if (isValid) {
            // Passwords match! Create a token (optional)
            const token = jwt.sign(
                { userId: user._id, username: user.username },
                process.env.JWT_SECRET, // Make sure to set this environment variable
                { expiresIn: '24h' }
            );
            res.json({ message: "Login successful", token: token });
        } else {
            // Passwords do not match
            res.status(401).json({ message: "Authentication failed" });
        }
    } else {
        // User not found
        res.status(404).json({ message: "User not found" });
    }
});

router.get('/role', authenticateToken, async (req, res) => {
    try {
        // Extract username from the authenticated request
        const username = req.user.username;

        // Fetch user from the database based on username
        const user = await User.findOne({ username });

        if (user) {
            // Return the user's role
            res.status(200).json({ role: user.userRole });
        } else {
            // User not found
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;
