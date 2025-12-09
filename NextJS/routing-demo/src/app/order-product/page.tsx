"use client";
import { useRouter } from "next/navigation";

function OrderProduct() {
    const router = useRouter();
    function handleOrder(){
        console.log(router);
        router.push("/products");
    }
    return ( 
        <div>
            <h1>Order Product Page</h1>
            <button onClick={handleOrder}>Place Order</button>
        </div>
     );
}

export default OrderProduct;