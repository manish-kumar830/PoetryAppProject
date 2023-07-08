
const express = require("express");
require("./DbConnection/db_conn.js")
const UserModel = require("./Model/model.js");
const app = express();

app.use(express.json());

// Read Api
app.get("/shayari",async (req,resp)=>{
   let data = await UserModel.find({});
   const jsonContent = JSON.stringify(data);
   resp.send(jsonContent);
});

// Read Api For Android
app.get("/shayari/android",async (req,resp)=>{
   let data = await UserModel.find({});
   resp.status(200).json(data);
});

// Read Api For Android
app.get("/shayari/category/:category",async (req,resp)=>{
   const { category } = req.params;
   let data = await UserModel.find({category:category});
   resp.status(200).json(data);
});

// Read One Api
app.get("/shayari/:id",async (req,resp)=>{
   const { id } = req.params;
   let data = await UserModel.findById(id);
   resp.send(data);
});







// Insert Api
app.post("/add",async (req,resp)=>{
   let user = new UserModel(req.body);
   
   let result = await user.save();
   resp.send(result);
})

// Delete Api
app.delete("/delete/:id",async (req,resp)=>{
   const { id } = req.params;
   let data = await UserModel.deleteOne({_id:id});
   if(data.acknowledged){
      resp.send({text:"Data Deleted"});
   } else {
      console.log({text:"Deletion Failed"});
   }
});

// Update Api
app.put("/update/:id",async (req,resp)=>{
   const { id } = req.params;

   let data = await UserModel.updateOne(
      {_id:id},{
         $set:{shayari:req.body.shayari,category:req.body.category}
      }
   );


   if(data.acknowledged){
      resp.send({text:"Data Updated"});
   } else {
      resp.send({text:"Updation Failed"});
   }
});



app.listen(5000);