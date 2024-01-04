import { fadeInAnimation, fadeInChild } from '@/utils/animations';
import { Search2Icon } from '@chakra-ui/icons';
import { Center, Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

const Hero = ({ data, search, handleChange, handleSubmit }) => {
    const router = useRouter();

    const basicBoxStyles = {
        textShadow: '0 0 25px black',
        fontWeight: 'extrabold',
        height: '300px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${data.image})`,
        backgroundSize: 'cover',
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={fadeInAnimation}>
            <Center sx={basicBoxStyles}>
                <motion.div variants={fadeInChild}>
                    <Heading textAlign={'center'}>{data.title}</Heading>
                </motion.div>
                <motion.div variants={fadeInChild}>
                    <Text fontSize={'lg'} marginY={3} textAlign={'center'}>
                        {data.subtitle}
                    </Text>
                </motion.div>
                {router.pathname === '/' ? (
                    <motion.div variants={fadeInChild}>
                        <Center mt={3} as="form" onSubmit={handleSubmit}>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <Search2Icon color="white" />
                                </InputLeftElement>
                                <Input
                                    type="text"
                                    placeholder="Search Images"
                                    color="white"
                                    _placeholder={{ color: 'inherit' }}
                                    name="image"
                                    _focus={{ borderColor: 'white' }}
                                    value={search}
                                    onChange={handleChange}
                                    aria-label="Search Images"
                                />
                            </InputGroup>
                        </Center>
                    </motion.div>
                ) : null}
            </Center>
        </motion.div>
    );
};

export default Hero;
