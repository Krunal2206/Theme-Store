import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion';

// MotionBox component wraps Box component with motion animation
const MotionBox = motion(Box)

// MotionImage component wraps Image component with motion animation
const MotionImage = motion(Image)

const ImageCard = ({ item, onOpen, setSelected }) => {

    // handleClick function sets selected item and opens modal when ImageCard is clicked
    const handleClick = () => {
        setSelected(item)
        onOpen(true)
    }

    return (
        <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} key={item.id} mb={3} onClick={handleClick}>
            <MotionImage src={item.url} alt={item.desc} width='100%' borderRadius='10px' cursor={'pointer'} _hover={{ opacity: 0.7 }} layoutId={item.id} transition={{ duration: 0.75 }} />
        </MotionBox>
    )
}

export default ImageCard
