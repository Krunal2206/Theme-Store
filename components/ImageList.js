import { Box, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import ImageCard from './ImageCard'
import { AnimatePresence } from 'framer-motion'
import ModelComponent from './ModelComponent'

const ImageList = ({ images }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selected, setSelected] = useState(null);

    const handleClose = () => {
        setSelected(null)
        onClose(true)
    }

    return (
        <Box sx={{ columnCount: [1, 2, 3, 4] }} mb={5}>

            {images && (
                <AnimatePresence>
                    {images.map((image) => (
                        <ImageCard key={image.id} item={image} onOpen={onOpen} setSelected={setSelected} />
                    ))}
                </AnimatePresence>
            )}

            <ModelComponent isOpen={isOpen} selected={selected} handleClose={handleClose} />
        </Box>
    )
}

export default ImageList
