import Link from "next/link";

type ProductPageParams = {
    params: Promise<{productId: string}>
};

export const generateMetadata = async ({params}: ProductPageParams) => {
    const {productId} = await params;
    return {
        title: `Product ${productId} Details Page`
    }
}

async function ProductDetails({params}: ProductPageParams) {
const {productId} = await params;
    return ( 
        <>
        <h1>Details about {productId}</h1>
        <h2>go to home <Link href="/">Click here</Link></h2>
        </>
     );
}

export default ProductDetails;