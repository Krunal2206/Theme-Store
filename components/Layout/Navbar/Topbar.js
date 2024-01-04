import { Box, Flex, IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiMenu } from 'react-icons/fi'

const Topbar = ({ onOpen }) => {
    return (
        <Box as="nav"
            position="sticky"
            top={0}
            zIndex={10}
            borderBottomWidth="1px"
            borderBottomColor='green.200'
            boxShadow='md'
            padding={'1rem'}
            bg={'white'}
        >
            <Flex align={'center'} justify={'space-between'}>

                <Link href='/' passHref>
                    <Image height={100} width={200} src='/logo.png' alt='Logo' priority loading="eager" />
                </Link>

                <Box>
                    <IconButton
                        variant="outline"
                        onClick={onOpen}
                        aria-label="open menu"
                        icon={<FiMenu />}
                        alt="Menu"
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default Topbar
