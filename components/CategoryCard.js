import { fadeInUp } from '@/utils/animations';
import { Box, Flex, Image, chakra, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react'

const MotionFlex = motion(Flex);

const CategoryCard = ({ category }) => {
    return (
        <>
            <MotionFlex initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ duration: 1, delay: 0.75 }}>
                <Box
                    rounded="lg"
                    shadow="md"
                    mx={'auto'}
                    w={'350px'}
                >
                    <Image
                        roundedTop="lg"
                        w="full"
                        h={64}
                        fit="cover"
                        src={category.img}
                        alt={`Category: ${category.category}`}
                    />

                    <Box p={6}>
                        <Box>
                            <chakra.span
                                fontSize="sm"
                                textTransform="uppercase"
                            >
                                Category
                            </chakra.span>
                            <Heading fontSize={['xl', 'xl', '2xl']} mt={2} textTransform={'capitalize'}>{category.category}</Heading>
                        </Box>
                    </Box>
                </Box>
            </MotionFlex>
        </>
    )
}

export default CategoryCard
