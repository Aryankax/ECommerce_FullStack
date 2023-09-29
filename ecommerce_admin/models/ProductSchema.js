const { Schema, model, models} = require("mongoose");

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true }
});

const Productss = models.Productss ||model('Productss', ProductSchema);

export default Productss;
