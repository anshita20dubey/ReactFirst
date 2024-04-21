const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: [true, "Name is required"],
        minLength: [6,"Name must be atleast 6 character"],
        trim: true,
    },
    username:{
        type: String,
        unique: true,
        required: [true, "UserName is required"],
        minLength: [6,"UserName must be atleast 6 character"],
        trim: true,
    },
    email:{
        type: String,
        lowercase: true,
        required: [true, "Name is required"],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender:{
        type: String,
        enum: ["male","female","others"],
        required: [true,"Gender is required"],
    },
    password:{
        type: String,
        select: false,
        required: [true, "Password is required"],
        minLength: [6,"Password must be atleast 6 character"],
        maxLength: [15,"Password    must be atmost 15 character"],
        trim: true,
    },

});

const user = mongoose.model('user',userModel);
module.exports = user;