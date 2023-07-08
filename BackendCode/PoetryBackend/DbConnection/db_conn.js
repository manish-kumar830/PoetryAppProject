
const mongoose = require("mongoose");

const url = `mongodb://127.0.0.1:27017/shayaridb`;


mongoose.connect(url,{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
   console.log("Database Connected");
}).catch(()=>{
   console.log("Connection Failed");
});
