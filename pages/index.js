import Hero from "@/components/Hero";
import ImageList from "@/components/ImageList";
import LoadMoreButton from "@/components/LoadMoreButton";
import ScrollToTop from "@/components/ScrollToTop";
import { fetchImages } from "@/utils/helpers";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home({ initialImages }) {

  // State to store the search query
  const [search, setSearch] = useState('')
  // State to store the images fetched from the API*
  const [images, setImages] = useState(initialImages);
  // State to store the current page number*
  const [page, setPage] = useState(2);
  // Maximum number of pages to fetch*
  const maxPages = 5;
  // State to store whether the app is currently loading images*
  const [loading, setLoading] = useState(false);
  // State to store the no results message*
  const [noResultsMessage, setNoResultsMessage] = useState("")

  // Handler for the search input change*
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  // Handler for the search form submission*
  const handleSubmit = async (e) => {
    e.preventDefault()
    setImages([])
    setPage(1)
    await fetchHomeImages(1)
  }

  // Function to fetch images from the API*
  const fetchHomeImages = async (currentPage) => {
    setLoading(true);
    try {
      const newImages = await fetchImages(search || 'super', currentPage, maxPages);
      if (newImages.length === 0 && currentPage === 1) {
        setNoResultsMessage("No results found for the initial search query.");
      } else {
        setImages((prevImages) => [...prevImages, ...newImages]);
        setPage(currentPage + 1);
        setNoResultsMessage("");
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Hero data={{ title: 'THEME STORE', subtitle: "The internet's source of freely-usable images.", image: '/home.jpg' }} search={search} handleChange={handleChange} handleSubmit={handleSubmit} />

      <Box paddingY={5} paddingX={3}>
        {noResultsMessage && <Text>{noResultsMessage}</Text>}
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
      props: { initialImages: [] },
    };
  }
}

