import { useState, useEffect } from 'react'
import { Image, InputGroup, InputLeftElement, Input, Box, Text, Spinner } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { Search2Icon } from '@chakra-ui/icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?query=${!query ? 'super' : query}&client_id=QqHDWLqMPbUQMFYXaMOjLF9iT81ceZzfXkMkiJF1hTQ&per_page=30&page=${page}`)
      .then(res => res.json())
      .then(data => setImages([...images, ...data.results]))
    setPage(page + 1);
  }

  useEffect(() => {
    fetchImages();
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setImages([]);
  }

  const basicBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '300px',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'extrabold',
    fontSize: '50px',
    px: 4,
    background:
      'url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) center/cover no-repeat',
  }

  return (
    <div>
      <Box sx={basicBoxStyles} filter='auto' brightness='70%' marginTop={{ base: '80px', md: '0px' }}>
        THEME STORE
        <Text color='white' fontSize={'lg'} marginBottom={'5'}>
          The internet&apos;s source of freely-usable images.
        </Text>
        <InputGroup maxWidth={'80%'} color='white'>
          <InputLeftElement
            pointerEvents='none'
          >
            <Search2Icon color='white'></Search2Icon>
          </InputLeftElement>
          <Input color={'white'} type='text' placeholder='Search Image' name='image' value={query} onChange={handleChange} />
        </InputGroup>
      </Box>

      <div style={{ marginTop: '20px' }}>
        <InfiniteScroll dataLength={images.length} next={fetchImages} hasMore={hasMore} loader={<><Spinner color='blue.500' speed='0.65s' thickness='4px' /><b> Loading...</b></>} endMessage={<p><b>Yay! You have seen it all</b></p>}>
          <div className={styles.images}>
            {
              images && images.map((image) => {
                return (
                  <div key={image.id} className={styles.img}>
                    <Image src={image.urls.regular} alt="" width='100%' borderRadius={'10px'} />
                  </div>
                )
              })
            }
          </div>
        </InfiniteScroll>
      </div>
      <ScrollToTop />
    </div>
  )
}