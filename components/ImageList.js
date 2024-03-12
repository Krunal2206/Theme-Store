import { Box, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import ImageCard from './ImageCard'
import { AnimatePresence } from 'framer-motion'
import ModelComponent from './ModelComponent'

const ImageList = ({ images = [] }) => {

    // State to manage the model component visibility
    const { isOpen, onOpen, onClose } = useDisclosure()
    // State to manage the selected image
    const [selected, setSelected] = useState(null)

    /**
     * Function to handle the close event of the model component
     */
    const handleClose = () => {
        setSelected(null)
        onClose(true)
    }

    return (
        <Box sx={{ columnCount: [1, 2, 3, 4] }} mb={5}>
            {/* Conditional rendering of the images */}
            {images.length > 0 && (
                <AnimatePresence>
                    {images.map((image) => (
                        <ImageCard key={image.id} item={image} onOpen={onOpen} setSelected={setSelected} />
                    ))}
                </AnimatePresence>
            )}

            {/* Conditional rendering of the model component */}
            {selected && (
                <ModelComponent isOpen={isOpen} selected={selected} handleClose={handleClose} />
            )}
        </Box>
    )
}

export default ImageList
