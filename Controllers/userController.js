const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');


// SIGNUP: Register a new user
exports.signUp = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Save the user
        await newUser.save();

        // Generate JWT token
        const payload = { id: newUser._id };
        const token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' });

        res.status(201).json({ token, user: { id: newUser._id, email: newUser.email, name: newUser.name } });
    } catch (error) {
        res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
};

// SIGNIN: Authenticate a user
exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        // Generate JWT token
        const payload = { id: user._id };
        const token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' });

        res.status(200).json({ token, user: { id: user._id, email: user.email, name: user.name } });
    } catch (error) {
        res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
};

// GET ALL USERS: Fetch all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude the password field
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
};

// GET ONE USER: Fetch a specific user by ID
exports.getOneUser = async (req, res) => {
    const { id } = req.params;
    
    try {
        const user = await User.findById(id).select('-password'); // Exclude the password field
        if (!user) {
            return res.status(404).json({ errors: [{ msg: 'User not found' }] });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
};
