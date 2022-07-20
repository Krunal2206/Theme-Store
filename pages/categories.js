import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Box, Text, Button, ButtonGroup, Image } from '@chakra-ui/react'
import ScrollToTop from '../components/ScrollToTop'

function Categories() {

    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');

    let isMounted = true;
    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${!query ? 'editorial' : query}&client_id=${process.env.NEXT_PUBLIC_CLIENTID}&per_page=30`)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setImages(data.results)
                }
            })
    }

    useEffect(() => {
        fetchImages();
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
            'url(https://images.unsplash.com/photo-1654933922741-1d0f3e758055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80) center/cover no-repeat',
    }

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <Box sx={basicBoxStyles} filter='auto' brightness='70%' marginTop={{ base: '80px', md: '0px' }}>
                Categories
                <Text color='white' fontSize={'lg'} marginBottom={'5'}>
                    Explore these popular photo categories on Theme Store.
                </Text>
            </Box>
            <div style={{ margin: '20px 10px', overflowX: 'scroll', scrollBehavior: 'smooth' }}>
                <ButtonGroup variant='outline' spacing='4'>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Editorial</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Wallpapers</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Cityscape</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>God</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Religion</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Flower</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Clouds</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Sports</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Food</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Animals</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Anime</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Travel</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Nature</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Business</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Architecture</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Spirituality</Button>
                    <Button _hover={{ bg: 'black', color: 'white' }} borderColor={'black'} onClick={(e) => { setQuery(e.target.innerText) }}>Fashion</Button>
                </ButtonGroup>
            </div>

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

            <ScrollToTop />
        </div>
    )
}

export default Categories