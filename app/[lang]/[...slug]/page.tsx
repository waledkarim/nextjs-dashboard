

export default async function({ params }: { params: Promise<{lang: string, slug: string[]}> }){
    const{ lang, slug } = await params;
    return(
        <>
            <h1>Language: {lang}, Slug: {slug}</h1>
        </>
    )
}