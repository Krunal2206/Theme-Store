import Head from 'next/head';
import { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar';
import { Flex } from '@chakra-ui/react';
import Loader from './Loader';

const Layout = ({ children }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 5000));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Theme Store</title>
                <meta name="description" content="Provide beautiful wallpapers" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons8-xlarge-icons-color-32.png" />
            </Head>
            <Flex direction={'column'}>
                {loading ? <Loader /> : (
                    <>
                        <Navbar />
                        {children}
                    </>
                )}
            </Flex>
        </>
    )
}

export default Layout
