export const fetchImages = async (query, page, maxPages) => {
    try {
        if (page > maxPages) {
            return [];
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_SOURCEURL}?query=${query}&client_id=${process.env.NEXT_PUBLIC_CLIENTID}&per_page=30&page=${page}`);
        const data = await response.json();

        return data.results.map((item) => ({
            id: item.id,
            url: item.urls.regular,
            tags: item.tags,
            desc: item.alt_description,
            likes: item.likes
        }));
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
};

export const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};