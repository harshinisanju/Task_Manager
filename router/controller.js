const Task=require('../models/Task')

const getAlltask=async(req,res)=>
{
   const task= await Task.find({})
   return res.status(200).json({task})
    }
    

const createTask=async(req,res)=>{
  const task= await Task.create(req.body)
res.status(200).json({data:task})
}


const getSingleTask=async(req,res)=>{
    try{
    const {id}=req.params;
   const task= await Task.findOne({_id:id})
   if(!task)
   {return res.status(404).json({msg:`Id ${id}not found`})}
  
   return res.status(200).json({data:task})
}catch(error)
{
res.status(500).json({msg:error})
}
}
const editTask=async(req,res)=>{
    try{
        const {id}=req.params;
    const task=await Task.findOneAndUpdate({_id:id},req.body,{new:true,
    runValidators:true})
    if(!task)
  { return res.status(404).json({msg:`Id ${id}not found`})}
res.status(200).json({data:task})
    }catch(error)
    {
        res.status(500).json({msg:error})
    }
}

const deleteTask=async(req,res)=>{
   try{
    const{id}=req.params;
    const task= await Task.findOneAndDelete({_id:id})
    if(!task)
    { return res.status(404).json({msg:`Id ${id}not found`})}

return res.status(200).json({task})
   }catch(error)
   {
       res.status(500).json({msg:error})
   }
}

module.exports={getAlltask,createTask,getSingleTask,editTask,deleteTask}