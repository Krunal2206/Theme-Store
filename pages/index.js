import Hero from "@/components/Hero";
import ImageList from "@/components/ImageList";
import LoadMoreButton from "@/components/LoadMoreButton";
import ScrollToTop from "@/components/ScrollToTop";
import { fetchImages } from "@/utils/helpers";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Home({ initialImages }) {

  const [search, setSearch] = useState('');
  const [images, setImages] = useState(initialImages);
  const [page, setPage] = useState(2);
  const maxPages = 5;
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setImages([])
    setPage(1);
    fetchHomeImages(1);
  }

  const fetchHomeImages = async (currentPage) => {
    setLoading(true);
    try {
      const newImages = await fetchImages(search || 'super', currentPage, maxPages);
      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage(currentPage + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Hero data={{ title: 'THEME STORE', subtitle: "The internet's source of freely-usable images.", image: './home.jpg' }} search={search} handleChange={handleChange} handleSubmit={handleSubmit} />

      <Box paddingY={5} paddingX={3}>
        <ImageList images={images} />
        <LoadMoreButton onClick={() => fetchHomeImages(page)} isMaxPages={page === maxPages} loading={loading} />
      </Box>

      <ScrollToTop />
    </>
  )
}

export async function getStaticProps() {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SOURCEURL}?query=super&client_id=${process.env.NEXT_PUBLIC_CLIENTID}&per_page=30&page=1`);
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
      props: { initialData: [] },
    };
  }
}

