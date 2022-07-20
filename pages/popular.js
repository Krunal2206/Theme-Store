import React, { useEffect, useState } from 'react'
import { Box, Image, Spinner, Text } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from '../components/ScrollToTop'

function Popular() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('popular');
  const [hasMore, setHasMore] = useState(true);

  let isMounted = true;
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.NEXT_PUBLIC_CLIENTID}&per_page=30&page=${page}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setImages([...images, ...data.results])
        }
      })
    setPage(page + 1);
  }

  useEffect(() => {
    fetchImages()
    return () => {
      isMounted = false;
    };
  }, [query]);

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
      'url(https://images.unsplash.com/photo-1653894604359-22dbdb074d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80) center/cover no-repeat',
  }

  return (
    <div>
      <Box sx={basicBoxStyles} filter='auto' brightness='70%' marginTop={{ base: '80px', md: '0px' }}>Grab The Popular Images
        <Text color='white' fontSize={'lg'} marginBottom={'5'}>
          Design Your Own Device
        </Text>
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

export default Popular