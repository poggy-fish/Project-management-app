const mongoose = require('mongoose');

//Set up database connection
const connectDb = async () => {
    try {
        const dbUrl = 'mongodb+srv://johnsonabsolu:2154400191@cluster0.n0kv6sd.mongodb.net/';
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongodb connected');
    } catch (error) {
        console.error(`Failed to connect to Mongodb database: ${error}`);
        process.exit(1); // Exit the application if there's an error
    }
};

module.exports = connectDb;