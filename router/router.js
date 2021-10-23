const express=require('express');
const router=express.Router();
const {getAlltask,createTask,getSingleTask,editTask,deleteTask}=require("./controller")

router.route('/').get(getAlltask).post(createTask)
    
    router.route('/:id').patch(editTask).delete(deleteTask).get(getSingleTask)


    module.exports={router}