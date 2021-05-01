const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const user = require('./routes/users.js');

//creating express server
const app = express();
const port = process.env.PORT || 5000;

//middleware allows us to access json
app.use(cors());
app.use(express.json());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
})



app.use('/users', user);

app.get('/', (res) => {
    res.send('Server is working');
})

//server starting
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});