import ImageList from "@/components/ImageList";
import LoadMoreButton from "@/components/LoadMoreButton";
import { CategoryItems } from "@/data";
import { fetchImages } from "@/utils/helpers";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import ScrollToTop from "@/components/ScrollToTop";

export default function Category({ initialImages, category }) {

    const [images, setImages] = useState(initialImages);
    const [page, setPage] = useState(2);
    const maxPages = 5;
    const [loading, setLoading] = useState(false);

    const fetchCategoryImages = async () => {
        setLoading(true);
        try {
            const newImages = await fetchImages(category, page, maxPages);
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
            <BreadcrumbComponent />

            <Box paddingY={5} paddingX={3}>
                <ImageList images={images} />
                <LoadMoreButton onClick={fetchCategoryImages} isMaxPages={page === maxPages} loading={loading} />
            </Box>

            <ScrollToTop />
        </>
    )
}

export async function getStaticPaths() {

    const paths = CategoryItems.map((item) => ({
        params: { category: item.category },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { category } = params;

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SOURCEURL}?query=${category}&client_id=${process.env.NEXT_PUBLIC_CLIENTID}&per_page=30&page=1`
        );
        const data = await response.json();

        const initialImages = data.results.map((item) => ({
            id: item.id,
            url: item.urls.regular,
            tags: item.tags,
            desc: item.alt_description,
            likes: item.likes
        }));

        return {
            props: {
                initialImages,
                category,
            },
        };
    } catch (error) {
        console.error("Error fetching images:", error);

        return {
            props: {
                initialImages: [],
                category,
            },
        };
    }
}