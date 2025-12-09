import {notFound} from "next/navigation";

function getRandomInt(number:number){
    return Math.floor(Math.random()*number);
}

async function ReviewDetails({params}:{params: Promise<{productId: string; reviewId: string}>}) {
    const {productId, reviewId} = await params;
    if(getRandomInt(10) < 2)
        throw new Error("Simulated error in review details page");

    if(Number(reviewId) > 1000){
        return <h1>Product {productId} review {reviewId}</h1>
    }else{
        return notFound();
    }
}

export default ReviewDetails;