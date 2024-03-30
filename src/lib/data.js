export async function fetchArticle() {
    const res = await fetch(`https://sharp-yalow.82-223-55-172.plesk.page/api/v1/article`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}