 
 
 
 const express = require('express');
 const config = require('./config.json');
 const mongoose = require('mongoose');
 const cors = require('cors');


 const app = express();


 const Blog = require('./models/blog.Model');
 const Project = require('./models/project.model');
 


mongoose.connect(config.connectionString);  

app.use(cors({origin: '*'}));



// get latest project 

app.get('/get-latest-project', async (req, res) => {

   try{
        const latestproject = await Project.findOne({},{},{sort: { _id : -1 }});

        if(!latestproject){
           return res.status(404).send('No project found')
         }
    
         res.status(200).json({latestproject:latestproject})
        
}catch(err){
    res.status(500).json({
        error:true,
        message:err.message
})
}


})



// get all projects 

app.get('/get-all-projects',async(req,res)=>{

 try{
   const projects = await Project.find();
   if(!projects){
        return res.status(404).send('No project found')
   }     

   res.status(200).json({projects:projects})

}catch(err){
    res.status(500).json({
        error:true,
        message:err.message})
  }

})


// get latest blog

app.get('/get-latest-blog', async (req, res) => {

    try{
         const latestblog = await Blog.findOne({},{},{sort: { _id : -1 }});
 
         if(!latestblog){
            return res.status(404).send('No blog found')
          }
     
          res.status(200).json({latestblog:latestblog})
         
 }catch(err){
     res.status(500).json({
         error:true,
         message:err.message
 })
 }
 
 
 })
 
 
 
 // get all blogs
 
 app.get('/get-all-blogs',async(req,res)=>{
 
  try{
    const blogs = await Blog.find();
    if(!blogs){
         return res.status(404).send('No blog found')
    }     
 
    res.status(200).json({blogs:blogs})
 
 }catch(err){
     res.status(500).json({
         error:true,
         message:err.message})
   }
})              



                      




app.listen(3000,()=>{
        console.log('Server is running on port 3000')
    
})