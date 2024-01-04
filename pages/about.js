import Contact from '@/components/Contact';
import Hero from '@/components/Hero'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop';
import ShuffleGrid from '@/components/ShuffleGrid';
import { fadeInLeft } from '@/utils/animations';
import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionTextBox = motion(Box);

function About() {
    return (
        <>
            <Hero data={{ title: 'About Us', image: './about.jpg' }} />

            <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={8}
                maxW="6xl"
                mx="auto"
                px={8}
                py={12}
                alignItems="center"
            >
                <MotionTextBox
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInLeft}
                    transition={{ duration: 1, delay: 0.75 }}>
                    <Heading as={'h4'} mb={4}>Photos for everyone</Heading>

                    <Text my={{ base: 4, md: 6 }} fontSize={{ base: "base", md: "lg" }}>Over 3 million free high-resolution images brought to you by the world&apos;s most generous community of photographers.</Text>

                    <Text my={{ base: 4, md: 6 }} fontSize={{ base: "base", md: "lg" }}>Beautiful, free images gifted by the world&apos;s most generous community of photographers. Better than any royalty free or stock photos.</Text>

                    <Text my={{ base: 4, md: 6 }} fontSize={{ base: "base", md: "lg" }}>Grab the Images from Theme Store & Design your own devices.</Text>

                    <Button as={Link} href={'/'}
                        bg={'teal.500'}
                        color="white"
                        py={2}
                        px={4}
                        rounded="md"
                        fontWeight="medium"
                        transition="all 0.3s"
                        _hover={{ bg: "teal.700", transform: "scale(1.05)" }}
                    >
                        Get Images
                    </Button>
                </MotionTextBox>

                <ShuffleGrid />
            </Grid>

            <Contact />

            <Footer />

            <ScrollToTop />
        </>
    )
}

export default About
