// Import Express and cookie-parser libraries
const express = require('express');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/Error.js');
const cors = require("cors");
const path = require("path");

// Create a new Express app instance
const app = express();


//add cors
app.use(cors());

// Use middleware to parse JSON and URL-encoded request bodies, and cookies
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb', extended:true}));
app.use(cookieParser());

// Import the post and user routes
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

// Use the post and user routes
app.use("/api/v1", postRoutes);
app.use("/api/v1",userRoutes);

// Error handling middleware
app.use(errorMiddleware);

app.use(express.static(path.join(___dirname, "../../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontend/build/index.html"));
});

// Export the app for use in other parts of the application
module.exports = app;

