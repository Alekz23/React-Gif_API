

export const GetGifs = async (category) => {
    const url =
`http://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=u4B9VSduRU3c3UwUFbHJV0yUouiHa5mM`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
   
     return gifs;
};
