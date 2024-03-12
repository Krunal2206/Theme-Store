import { Badge, Box, Button, Flex, Icon, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Progress, Stack, Text, useToast } from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const MotionImage = motion(Image);

const ModelComponent = ({ isOpen, selected, handleClose }) => {

    const { data: session } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const toast = useToast();

    const handleDownload = async () => {
        setLoading(true);

        try {

            if (!session) {
                return router.push({
                    pathname: '/auth/signin',
                    query: { prev: router.asPath } // Pass the current page's URL as the 'prev' query parameter
                });
            }

            // Simulating an asynchronous download
            const url = selected.url;
            const response = await fetch(url);

            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`Download failed with status: ${response.status}`);
            }

            const blob = await response.blob();
            saveAs(blob, 'download');
        } catch (error) {
            console.error('Download error:', error);
            toast({
                title: 'Download Failed',
                description: 'There was an issue with the download. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} isCentered motionPreset='slideInBottom' scrollBehavior={'inside'} size={'lg'}>
            <ModalOverlay />
            <ModalContent mx={2}>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />

                <ModalBody pb={6} mt={4}>
                    <Box mb={5}>
                        <MotionImage src={selected && selected.url} alt='' layoutId={selected && selected.id} transition={{ duration: 0.75 }} />
                    </Box>

                    <Flex align={'center'} justifyContent={'space-between'} mb={3}>
                        <Stack direction='row' flexWrap={'wrap'}>
                            {selected &&
                                selected.tags.map((tag, index) => (
                                    <Badge key={index} variant='solid' fontSize={'xs'}>
                                        {tag.title}
                                    </Badge>
                                ))}
                        </Stack>

                        <Flex align={'center'}>
                            <Icon as={FaHeart} color={'red'} mr={2} />
                            <Text>{selected && selected.likes}</Text>
                        </Flex>
                    </Flex>

                    <Text textTransform={'capitalize'}>{selected && selected.desc}</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='teal' w={'full'} onClick={handleDownload} isLoading={loading} loadingText='Downloading'>
                        Download
                    </Button>

                    {loading && (
                        <Box mt={3}>
                            <Progress value={progress} size='sm' />
                        </Box>
                    )}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModelComponent;
