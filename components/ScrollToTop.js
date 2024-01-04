import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconButton } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);
    const scrollButton = useRef();
    const controls = useAnimation();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        controls.start({ opacity: isVisible ? 1 : 0, zIndex: isVisible ? 100 : -1 });
    }, [isVisible, controls]);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 100);
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        scrollButton.current.blur();
    };

    return (
        <motion.div
            animate={controls}
            style={{ position: 'fixed', bottom: '4rem', right: '4rem' }}
        >
            <IconButton
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