const mongoose = require("mongoose");
const User=require("./User.model");
const listSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const List = mongoose.model("List", listSchema);

module.exports = List;