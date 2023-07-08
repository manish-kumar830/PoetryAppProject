const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
   {
      shayari:String,
      category:String
   }
);

module.exports = mongoose.model("Shayari", UserSchema);