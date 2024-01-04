import { Box, Center, Flex, Text, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import React from 'react'
import { ClockLoader } from 'react-spinners'

const textclip = keyframes`
  to {
		background-position: 200% center;
	}`

const Loader = () => {

    const prefersReducedMotion = usePrefersReducedMotion()

    const loadingTextStyles = {
        fontSize: "50px",
        textTransform: "uppercase",
        fontWeight: "700",
        fontFamily: "Josefin Sans, sans-serif",
        background: "linear-gradient(to right, #095fab 10%, #25abe8 50%, #57d75b 60%)",
        backgroundSize: "200% auto",
        color: "#fff",
        backgroundClip: "text",
        textAlign: "center",
        animation: prefersReducedMotion ? undefined : `${textclip} 1.5s linear infinite`,
    }

    return (
        <Center h={'100vh'} bgColor={'#232b3a'}>
            <Box color={'white'} textAlign="center">
                <Flex justifyContent={'center'} alignItems={'center'} mb={'5'}>
                    <ClockLoader loading={true} color={'white'} size={50} />
                    <Text color='white' fontSize={'2xl'} ml={'4'}>Loading . . .</Text>
                </Flex>
                <Box>
                    <Text sx={loadingTextStyles}>Theme Store</Text>
                </Box>
            </Box>
        </Center>
    )
}

export default Loader
