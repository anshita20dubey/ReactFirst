require("dotenv").config({path: "./.env"});
const express = require('express');
const app = express();
const PORT = 8080;

// db connection
require('./models/connect').mongoconnection();

const indexRouter = require('./routes/indexRouter');

// setting logger
app.use(require("morgan")("tiny"));

// bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// router setup -> must be 2nd last in the file
app.use('/api/user',indexRouter);

app.all("*",(req,res,next)=>{
    res.status(404).json({message: "Page not found"});
})


// creating server must be at the last
app.listen(process.env.PORT,()=>{
    console.log(`Server running on the port ${process.env.PORT}`);
});