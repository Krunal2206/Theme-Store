import { Avatar, Box, Button, Flex, HStack, Heading, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiLogOut } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'

const Topbar = ({ onOpen }) => {

    // Fetch session data using the useSession hook provided by next-auth/react
    const { data: session } = useSession()

    const router = useRouter();

    // Define the `handleSignInClick` function that redirects the user to the sign-in page
    const handleSignInClick = () => {
        // Pass the current page's URL as a query parameter
        router.push({
            pathname: '/auth/signin',
            query: { prev: router.asPath } // Pass the current page's URL as the 'prev' query parameter
        });
    };

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
            {/* Header section with a hamburger menu icon and the logo */}
            <Flex align={'center'} justify={'space-between'}>
                <HStack spacing={{ base: '1', sm: '3' }} alignItems={'center'}>

                    {/* IconButton for the hamburger menu */}
                    <Box>
                        <IconButton
                            variant="outline"
                            onClick={onOpen}
                            aria-label="open menu"
                            icon={<FiMenu />}
                            alt="Menu"
                        />
                    </Box>

                    {/* Logo Link */}
                    <Link href='/' passHref>
                        <Image height={100} width={165} src='/logo.png' alt='Logo' priority loading="eager" />
                    </Link>
                </HStack>

                {/* Right section with user-related actions */}
                <Flex alignItems={'center'}>
                    {/* Display the Sign In button if the user is not authenticated */}
                    {!session ? (
                        <Button onClick={handleSignInClick} type="button" colorScheme={'teal'}>
                            Sign In
                        </Button>
                    ) : (
                        <Menu>
                            {/* MenuButton with Avatar as the right icon */}
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                                rightIcon={<Avatar size={'sm'} src={session?.user?.image} />}
                            />

                            <MenuList minW={'200px'} >
                                {/* User's avatar and name within the first MenuItem */}
                                <MenuItem>
                                    <HStack spacing={3} >
                                        <Avatar
                                            size={'sm'}
                                            src={session?.user?.image}
                                        />
                                        <Heading size={'sm'} >{session?.user?.name}</Heading>
                                    </HStack>
                                </MenuItem>

                                {/* MenuDivider between user info and Signout button */}
                                <MenuDivider my={1} />

                                {/* Signout button */}
                                <MenuItem onClick={() => signOut()} type="button">
                                    <BiLogOut size={20} />
                                    <Text ml={2}>Signout</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
}

export default Topbar
