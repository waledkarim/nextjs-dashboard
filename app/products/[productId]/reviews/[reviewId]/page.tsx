
type PageParams = {
    params: Promise<{productId: string, reviewId: string}>;
}

export default async function ({ params }: PageParams){
    const { productId, reviewId } = await params;
    return(
        <>
            <h1>This is review number {reviewId} of product {productId}</h1>
        </>
    )
}