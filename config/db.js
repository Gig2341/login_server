require('dotenv').config();
const mongoose = require("mongoose");

// using mongoose to connect to database
mongoose
    .connect(process.env.MONGODB_URI,{
        useNewUrlParser: true, useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected"); // prints when db is connected
    })
    .catch((err) => console.log(err)); // prints when not