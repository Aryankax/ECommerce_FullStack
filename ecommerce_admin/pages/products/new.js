import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function New(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    async function createProduct(ev){
        ev.preventDefault();
        const data = {title, description, price}
        await axios.post('/api/products', data);
        router.push('/products');
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