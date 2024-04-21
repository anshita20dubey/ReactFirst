const mongoose = require('mongoose');

exports.mongoconnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOURL);
        console.log("Connection established....");
    } catch(error){
        console.log(error);
    }
};