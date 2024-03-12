import { shuffle } from '@/utils/helpers';
import { Grid } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { squareData } from '@/data';
import { fadeInRight } from '@/utils/animations';

const MotionImageGrid = motion(Grid);

const ShuffleGrid = () => {

    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <MotionImageGrid templateColumns="repeat(4, 1fr)" templateRows="repeat(4, 1fr)" h="450px" gap={1} initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            transition={{ duration: 1, delay: 0.75 }}>
            {squares.map((sq) => sq)}
        </MotionImageGrid>
    )
}

export default ShuffleGrid

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};