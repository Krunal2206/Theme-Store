import Hero from '@/components/Hero'
import ImageList from '@/components/ImageList'
import LoadMoreButton from '@/components/LoadMoreButton';
import ScrollToTop from '@/components/ScrollToTop';
import { fetchImages } from '@/utils/helpers';
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

function Popular({ initialImages }) {

    const [images, setImages] = useState(initialImages);
    const [page, setPage] = useState(2);
    const maxPages = 5;
    const [loading, setLoading] = useState(false);

    const fetchPopularImages = async () => {
        setLoading(true);
        try {
            const newImages = await fetchImages('popular', page, maxPages);
            setImages((prevImages) => [...prevImages, ...newImages]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Hero data={{ title: 'Grab The Popular Images', subtitle: 'Design Your Own Device', image: './popular.jpg' }} />

            <Box paddingY={5} paddingX={3}>
                <ImageList images={images} />
                <LoadMoreButton onClick={fetchPopularImages} isMaxPages={page === maxPages} loading={loading} />
            </Box>

            <ScrollToTop />
        </>
    )
}

export async function getStaticProps() {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SOURCEURL}?query=popular&client_id=${process.env.NEXT_PUBLIC_CLIENTID}&per_page=30&page=1`);
        const data = await res.json();

        const initialImages = data.results.map((item) => {
            return {
                id: item.id,
                url: item.urls.regular,
                tags: item.tags,
                desc: item.alt_description,
                likes: item.likes
            }
        })

        return {
            props: {
                initialImages
            }
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        return {
            props: { initialImages: [] },
        };
    }
}

export default Popular
