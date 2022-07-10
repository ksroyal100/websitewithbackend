const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    Phone_no : {
        type:Number,
        required:true,
        unique:true
    },
})

const Register = new mongoose.model("Register", usersSchema);
module.exports = Register;
