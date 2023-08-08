const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./database/database');
const path = require('path');
// const { fileURLToPath } = require("url");
// const authRouter = require('./routers/auth');
// const tasksRoutes = require('./routers/tasks');
// const usersRoutes = require('./routers/users');
// const { register } = require('./controllers/auth');
// const { login } = require('./controllers/auth');
// const { createPost } = require('./controllers/posts')
// const verifyToken = require('./middleware/auth');
// const User = require('./models/User');
// const Task = require('./models/Task');
// const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3100;

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false })); //Built in middlewares to handle urlencoder data
database(); //connect to the Database

// app.use("/assets", express.static(path.join(__dirname, 'public/assets')));
app.use(express.static(path.join(__dirname, '../client/build')));

/* ROUTES */
// app.use("/auth", authRouter);
// app.use("/users", usersRoutes);
// app.use("/posts", postRoutes);

//GET ALL ROUTES FOR REACT APP
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

//Start Server
app.listen(PORT, () => console.log(`Server is runninng on port: ${PORT}`));