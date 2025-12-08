import Link from "next/link";

const metadata = {
    title: "Product Details Page"
}
export { metadata };

function Products() {
    return ( 
        <>
        <h1>Products</h1>
        <p>List of Products will be displayed here.</p>
        <Link href="/products/1"><h2>Product 1</h2></Link>
        <Link href="/products/2"><h2>Product 2</h2></Link>
        <Link href="/products/3"><h2>Product 3</h2></Link>
        <Link href="/products/4"><h2>Product 4</h2></Link>
        <Link href="/products/5" replace><h2>Product 5</h2></Link>
        </>
     );
}

export default Products;