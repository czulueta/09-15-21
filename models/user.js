const mongoose = require("mongoose")
const Schema = mongoose.Schema

const  userSchema = new Scheam({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("User", userSchema)