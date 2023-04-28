const mongoose = require("mongoose");

const bullSchema = mongoose.Schema({
  Bull_Breed:  {type:String , required: true, minLength:[1,'itemname']},
  Bull_Size: { type:String , required: true, maxLength:[8] },
  Bull_Value: {type: Number, required: true,min: 0, max: 600}, 
});
module.exports = mongoose.model("bull", bullSchema);