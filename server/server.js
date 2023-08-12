const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./database/database');
const path = require('path');
const registerRoute = require('./routes/register'); // Import the registration route
const loginRoute = require('./routes/login'); // Import the login route

const app = express();
const PORT = process.env.PORT || 3100;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // Corrected body-parser setup
database(); // Connect to the Database

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Register and Login Routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);

// Route for serving the React app
app.get(/^\/(index\.html)?$|^\/static\/|^\/js\/|^\/css\/|^\/images\//, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', req.url));
});

// Start Server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
