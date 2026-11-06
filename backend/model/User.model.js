const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type :String,
        unique:true,
        required:true,
        index:true
    }
,
email:{
    type:String,
    required:true,
    
},
password:{
    type:String,
    unqiue:true,
    required:true
}
});

const User = mongoose.model("User",UserSchema);
module.exports=User;