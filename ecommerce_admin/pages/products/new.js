import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function New(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function createProduct(){
        // ev.preventDefault();
        const data = {title, description, price}
        await axios.post('/api/products', data);
    }

    return (
        <>
            <Layout>
            <form onSubmit={createProduct}>
                <div className="flex flex-col">
                <h1>New Product</h1>
                <label>Product Name</label>
                <input type="text" placeholder="Product name" value={title} onChange={ev=> setTitle(ev.target.value)}></input>
                <label>Description</label>
                <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>
                <label>Price (in INR)</label>
                <input type="number" placeholder="price" value={price} onChange={ev=>setPrice(ev.target.value)}></input>
                <button className="button-primary" type="submit">Save</button>
                </div>
            </form>
            </Layout>
        </>
    )
}