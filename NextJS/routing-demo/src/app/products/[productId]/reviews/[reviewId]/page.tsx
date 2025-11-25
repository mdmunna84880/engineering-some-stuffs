async function ReviewDetails({params}:{params: Promise<{productId: string; reviewId: string}>}) {
    const {productId, reviewId} = await params;
    return ( 
        <h1>Review {reviewId} Details Page for Product {productId}</h1>
     );
}

export default ReviewDetails;