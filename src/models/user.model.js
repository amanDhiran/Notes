const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
},{timestamps: true})

module.exports = mongoose.model("User", userSchema)

