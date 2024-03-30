import {fetchArticle} from "@/lib/data";

export default async function Home() {
    const data = await fetchArticle()
    return (
        <div>
            <h1 className={`text-xl`}>hello world: </h1>
            <p>{data.message}</p>
        </div>
    );
}
