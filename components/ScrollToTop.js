import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconButton } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

const ScrollToTop = () => {

    // useState hook to control the visibility of the scroll to top button
    const [isVisible, setIsVisible] = useState(false)
    // useRef hook to reference the scroll button element
    const scrollButton = useRef()
    // useAnimation hook to control the animation of the scroll button
    const controls = useAnimation()

    // First useEffect hook to add and remove scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Second useEffect hook to start the animation of the scroll button
    useEffect(() => {
        controls.start({ opacity: isVisible ? 1 : 0, zIndex: isVisible ? 100 : -1 })
    }, [isVisible, controls])

    // Function to handle click event and scroll to the top of the page
    const handleClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        scrollButton.current.blur()
    }

    return (
        <motion.div
            key="scroll-to-top-button"
            animate={controls}
            style={{ position: 'fixed', bottom: '4rem', right: '4rem' }}
        >
            <IconButton
                key="scroll-button"
                ref={scrollButton}
                aria-label='scroll to top'
                icon={<ArrowUpIcon />}
                size='lg'
                colorScheme='blackAlpha'
                variant='solid'
                border='2px solid'
                onClick={handleClick}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

export default ScrollToTop;