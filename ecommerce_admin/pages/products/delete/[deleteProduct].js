import Layout from "@/components/layout";

import { useRouter } from "next/router";

import axios from "axios";

export default function deleteProduct() {

    const router = useRouter();

    const productId = router.query.deleteProduct;

    console.log(productId);

    async function deleteProducts(ev){
        ev.preventDefault();
        await axios.delete('/api/products?deleteItemId='+ productId);
        router.push('/products');
    }

    async function returnToProductsPage(){
        router.push('/products');
    }

    return(
        <Layout>
            <h1>Do you really want to Delete this product?</h1>
            <button onClick={deleteProducts} className="bg-blue-900 text-white rounded-full m-2 h-10 px-5">Yes</button>
            <button onClick={returnToProductsPage} className="bg-blue-900 text-white rounded-full m-2 h-10 px-5">No</button>
        </Layout>
    )
}