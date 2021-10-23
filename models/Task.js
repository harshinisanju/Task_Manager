const mongoose=require('mongoose')

const TaskSchema= new mongoose.Schema({

    name:{
        required:true,
        trim:true,
        type:String,
        maxlength:[20,'name cannot be more than 20 chars']

    },
    completed:{
        type:Boolean,
        default:false
    }

})
module.exports= mongoose.model('Task', TaskSchema)