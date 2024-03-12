import { Badge, Box, Button, Flex, Icon, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Progress, Stack, Text, useToast } from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const MotionImage = motion(Image);

const ModelComponent = ({ isOpen, selected, handleClose }) => {

    // Get the session data and router object from the hooks
    const { data: session } = useSession()
    const router = useRouter()
    // Initialize loading and progress states for the download functionality
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    // Initialize the toast object for displaying notifications
    const toast = useToast()

    // Handle the download functionality when the download button is clicked
    const handleDownload = async () => {
        setLoading(true);

        try {
            // If the user is not logged in, redirect them to the sign-in page
            if (!session) {
                handleClose() // Close the modal before redirecting
                return router.push({
                    pathname: '/auth/signin',
                    query: { prev: router.asPath } // Pass the current page's URL as the 'prev' query parameter
                });
            }

            // Validate the 'selected.url' before fetching
            if (!selected.url) {
                throw new Error("Invalid 'selected.url' value.")
            }

            // Simulating an asynchronous download
            const response = await fetch(selected.url);

            // Check if the request was successful
            if (response.ok) {
                const blob = await response.blob();
                saveAs(blob, 'download');
            } else {
                throw new Error(`Download failed with status: ${response.status}`);
            }
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
                <ModalHeader />
                <ModalCloseButton />

                <ModalBody pb={6} mt={4}>
                    <Box mb={5}>
                        <MotionImage src={selected && selected.url} alt='' layoutId={selected && selected.id} transition={{ duration: 0.75 }} />
                    </Box>

                    <Flex align={'center'} justifyContent={'space-between'} mb={3}>
                        <Stack direction='row' flexWrap={'wrap'}>
                            {selected &&
                                selected.tags.map((tag, index) => (
                                    <Badge key={`tag-${index}`} variant='solid' fontSize={'xs'}>
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
