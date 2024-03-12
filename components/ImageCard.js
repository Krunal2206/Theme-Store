import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ImageCard = ({ item, onOpen, setSelected }) => {

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
