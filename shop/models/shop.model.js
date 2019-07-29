const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ShopSchema = new Schema({
    shop_name: {type: String, required: true, max: 100},
    shop_desc: {type: String, required: true},
    shop_addr: {type: String, required: true},
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

// Export the model
module.exports = mongoose.model('Shop', ShopSchema);