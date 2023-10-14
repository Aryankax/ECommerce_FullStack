import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('/api/products').then(mongoRes => {
            setProducts(mongoRes.data);
        });
    }, []);

    return (
        <>
           <Layout>
                <div className="mt-7 ml-2.5">
                <Link href={'/products/new'} className="bg-blue-900 text-white rounded-full p-3">
                    Add new product
                </Link>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price(in INR)</th>
                    </tr>
                    </thead>
                        <tbody>
                            {products.map(product => (
                                <tr>
                                <td>
                                    {product.title}
                                </td>
                                <td>
                                    {product.description}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>
                                    <Link href={'/products/edit/'+ product._id}>Edit</Link>
                                </td>
                                <td>
                                    <Link href={'/products/delete/'+ product._id}>Delete</Link>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                </table>
           </Layout>
        </>
    )
}