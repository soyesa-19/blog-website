const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps:true
})

const Blogs  = mongoose.model('Blog', blogSchema);

module.exports = Blogs