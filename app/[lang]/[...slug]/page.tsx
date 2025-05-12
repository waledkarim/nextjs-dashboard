import { Metadata } from "next";

type PageParams = {
    params: Promise<{lang: string, slug: string[]}>
}

export const generateMetadata = async ({ params }: PageParams): Promise<Metadata> => {
    const { lang } = await params;
    return {
        title: `Language is ${lang}`
    }
}


export default async function({ params }: PageParams){
    const{ lang, slug } = await params;
    return(
        <>
            <h1>Language: {lang}, Slug: {slug}</h1>
        </>
    )
}