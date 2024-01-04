import React, { useState } from 'react';
import { Box, Button, Center, Heading, Progress } from '@chakra-ui/react';

const LoadMoreButton = ({ onClick, isMaxPages, loading }) => {

    const [progress, setProgress] = useState(0);

    return (
        <Center>
            {isMaxPages ? (
                <Heading fontSize={'xl'}>No More Content</Heading>
            ) : (
                <>
                    <Button
                        onClick={onClick}
                        isLoading={loading}
                        bg="teal.300"
                        color="white"
                        _hover={{
                            bg: 'teal.500',
                        }}
                        rounded="md"
                        w={{ base: '100%', md: '25%' }}
                        aria-label='Load More'
                    >
                        Load More
                    </Button>
                    {loading && (
                        <Box mt={3}>
                            <Progress value={progress} size='sm' />
                        </Box>
                    )}
                </>
            )}
        </Center>
    );
};

export default LoadMoreButton;
