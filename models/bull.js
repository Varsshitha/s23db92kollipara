const mongoose = require("mongoose")
const bullSchema = mongoose.Schema({
Bull_Breed: String,
Bull_Size: String,
Bull_Value: Number
})
module.exports = mongoose.model("bull",bullSchema)