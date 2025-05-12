
export default async function ({ params }: {params: Promise<{productId: string, reviewId: string}>}){
    const { productId, reviewId } = await params;
    return(
        <>
            <h1>This is review number {reviewId} of product {productId}</h1>
        </>
    )
}