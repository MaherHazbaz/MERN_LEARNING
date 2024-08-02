const { default: mongoose } = require("mongoose");

const categorySchema= new mongoose.Schema({
    category_name:{type:String,default:""},
    category_image:{type:String,default:""}
})
const categoryModel = mongoose.model("category", categorySchema);
module.exports = categoryModel;