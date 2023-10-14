import Layout from "@/components/layout";

import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import axios from "axios";

export default function EditProductPage(){

    const router = useRouter();
    const productId = router.query.editProduct;

    const [productTitle, setProductTitle] = useState("");
    const [productDes, setProductDes] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const [newTitle, setNewTitle] = useState(productTitle);
    const [newDes, setNewDes] = useState(productDes);
    const [newPrice, setNewPrice] = useState(productPrice);

    useEffect(() => {

        if(!productId){
            return;
        }
        
        axios.get('/api/products?id=' + productId).then(response => {
            console.log(response.data);
            setProductTitle(response.data.title);
            setProductDes(response.data.description);
            setProductPrice(response.data.price);
        })
    })

    async function updateProduct(ev){
        ev.preventDefault();
        const data = {newTitle, newDes, newPrice};
        await axios.post('/api/products?id='+ productId, data);
        router.push('/products');
    }

    return(
        <Layout>
            <h1>Edit Product</h1>
            <form onSubmit={updateProduct}>
                <div className="flex flex-col">
                <label>Product Name</label>
                <input type="text" placeholder={productTitle} value={newTitle} onChange={ev => setNewTitle(ev.target.value)}></input>
                <label>Description</label>
                <textarea placeholder={productDes} value={newDes} onChange={ev => setNewDes(ev.target.value)}></textarea>
                <label>Price (in INR)</label>
                <input type="number" placeholder={productPrice} value={newPrice} onChange={ev => setNewPrice(ev.target.value)}></input>
                <button className="button-primary" type="submit">Save</button>
                </div>
            </form>
        </Layout>
    )
}