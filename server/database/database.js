const mongoose = require('mongoose');
const { users } = require('../data/index');
const { posts } = require('../data/index');
const User = require('../models/User');
const Post = require('../models/Post');

const password = encodeURIComponent("2154400191");

//Set up database connection
const connectDb = async () => {
    try {
        const dbUrl = `mongodb+srv://johnsonabsolu:${password}@cluster0.n0kv6sd.mongodb.net/`;
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
            /* ADD DATA ONE TIME */
        // User.insertMany(users);
        // Post.insertMany(posts);
        console.log('Mongodb connected');
    } catch (error) {
        console.error(`Failed to connect to Mongodb database: ${error}`);
        process.exit(1); // Exit the application if there's an error
    }
};

module.exports = connectDb;