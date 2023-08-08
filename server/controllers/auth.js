const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register the user
const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            userName,
            email,
            password,
            picturePath,
            gender,
            age
        } = req.body;
        
        const salt = await bcrypt.genSalt(); //creating a salt (random string) to encrypt the password
        const hashedPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new User({
            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword,
            picturePath,
            gender,
            age,
            assignedTask,
            title: 'Individual Contributor',
        })

        //Save the user
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//Logging in
const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        //find user if exist
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: 'User is not found'});
        //check if the password match
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Password does not match'});

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login };