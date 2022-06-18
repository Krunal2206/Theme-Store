import React from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import {
    FiHome,
    FiStar,
    FiUser,
    FiMenu,
} from 'react-icons/fi';
import { BiCategory } from "react-icons/bi";
import { useRouter } from 'next/router';
import Link from 'next/link';

const LinkItems = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'Categories', icon: BiCategory, href: '/categories' },
    { name: 'Popular', icon: FiStar, href: '/popular' },
    { name: 'About', icon: FiUser, href: '/about' },
];

export default function Navbar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ md: 'none', base: (!isOpen) ? 'flex' : 'none' }} onOpen={onOpen} position={'fixed'} w={'100%'} zIndex={'1'} />
            <Box ml={{ base: 0, md: 60 }}>
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            bg={useColorModeValue('black')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            paddingTop={'5'}
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="xx-large" fontFamily="monospace" fontWeight="bold" color="white">
                    Theme Store
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} color={'white'} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} href={link.href} onClick={onClose}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({ icon, children, href, ...rest }) => {
    const router = useRouter();
    return (
        <Link href={href} style={{ textDecoration: 'none', color: 'white' }} _focus={{ boxShadow: 'none' }} passHref>
            <Flex
                align="center"
                fontSize="lg"
                p="4"
                mx="4"
                my='2'
                borderRadius="lg"
                role="group"
                cursor="pointer"
                color={'white'}
                _hover={{
                    bg: 'cyan.400'
                }}
                bg={router.pathname == href ? 'cyan.400' : 'black'}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                Theme Store
            </Text>
        </Flex>
    );
};