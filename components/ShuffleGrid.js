import { shuffle } from '@/utils/helpers';
import { Grid } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { squareData } from '@/data';
import { fadeInRight } from '@/utils/animations';

const MotionImageGrid = motion(Grid);

/**
 * A component that renders a grid of shuffling images using the Grid and motion components.
 * It shuffles the images every 3 seconds and handles the cleanup of timeouts when the component unmounts.
 * The Grid component is styled using Chakra UI and the images are shuffled using the shuffle function.
 */
const ShuffleGrid = () => {

    // Reference to hold the timeout reference
    const timeoutRef = useRef(null)

    // State to hold the squares to be rendered in the grid
    const [squares, setSquares] = useState(generateSquares())

    /**
   * Shuffles the squares when the component mounts and cleans up the timeout when the component unmounts
   */
    useEffect(() => {
        // Clear any existing timeout before setting a new one
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        shuffleSquares()

        // Clean up the timeout when the component unmounts
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    /**
   * Shuffles the squares in the grid
   */
    const shuffleSquares = () => {
        // Reset the state with new shuffled squares
        setSquares(generateSquares())

        // Set a new timeout to shuffle squares again after 3 seconds
        timeoutRef.current = setTimeout(shuffleSquares, 3000)
    }

    return (
        <MotionImageGrid
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(4, 1fr)"
            h="450px"
            gap={1}
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            transition={{ duration: 1, delay: 0.75 }}
        >
            {squares.map((sq) => sq)}
        </MotionImageGrid>
    )
}

export default ShuffleGrid

/**
 * Generates an array of motion.div components with the given square data
 * @returns {JSX.Element[]} - An array of motion.div components
 */
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