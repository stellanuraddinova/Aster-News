export const serviceFetchNews = async () => {
    const api = await fetch('https://all-api.bitcode.az/api/news');
    return await api.json();
}

export const serviceFetchNewsView = async (slug) => {
    const api = await fetch('https://all-api.bitcode.az/api/news/slug/' + slug);
    return await api.json();
}