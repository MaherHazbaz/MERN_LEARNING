const { default: mongoose } = require("mongoose");
const productSchema = new mongoose.Schema({
  product_name: { type: String, default: "" },
  product_description: { type: String, default: "" },
  product_price: { type: String, default: "" },
  product_category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
