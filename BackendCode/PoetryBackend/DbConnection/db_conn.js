
const mongoose = require("mongoose");

const url = `mongodb://127.0.0.1:27017/shayaridb`;

// const url = `mongodb+srv://Manish:Manish123@shayaridb.2ismgj2.mongodb.net/shayaridb?retryWrites=true&w=majority`;

mongoose.connect(url,{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
   console.log("Database Connected");
}).catch(()=>{
   console.log("Connection Failed");
});
