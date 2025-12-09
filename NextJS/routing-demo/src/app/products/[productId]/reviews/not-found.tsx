"use client"
import { usePathname } from "next/navigation";

function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    
    return ( 
        <h1>Review {reviewId} Not found for product {productId}</h1>
     );
}

export default NotFound;