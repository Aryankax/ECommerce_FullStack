const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ProductsDB");
        console.log("Connection is successful");
    } catch (error) {
        console.error("Connection error:", error);
    }
}

const { Schema, model, models} = require("mongoose");

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true }
});

const Productss = models.Productss ||model('Productss', ProductSchema);

main().catch(err => console.log(err));

export default async function handle (req,res){

   const {method} = req;

   if(method === 'GET'){

    if(req.query?.id){
        res.json(await Productss.findOne({_id:req.query.id}));
    } else {
        res.json(await Productss.find());
    }
   }

//    await mongooseConnect();
    if(method === 'POST'){

        if(req.query?.id){
            const {newTitle, newDes, newPrice} = req.body;
            const newProductData = await Productss.updateOne({_id: req.query.id}, {
                $set: {
                    title: newTitle,
                    description: newDes,
                    price: newPrice
                }
            })

            const newDataSent = await res.json(newProductData);
        } else {

        const {title,description,price} = req.body;
        const ProductDoc = await Productss.create({
            title,
            description,
            price,
          });

        const dataSent = await res.json(ProductDoc);

    }
    }

    if(method=== 'DELETE') {
            const deleteItem = await Productss.deleteOne({_id: req.query.deleteItemId});
            res.json(true);
        
      }
   }

