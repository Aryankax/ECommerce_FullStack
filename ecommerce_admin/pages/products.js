import Layout from "@/components/layout";
import Link from "next/link";

export default function Products(){
    return (
        <>
           <Layout>
                <div className="mt-7 ml-2.5">
                <Link href={'/products/new'} className="bg-blue-900 text-white rounded-full p-3">
                    Add new product
                </Link>
                </div>
           </Layout>
        </>
    )
}