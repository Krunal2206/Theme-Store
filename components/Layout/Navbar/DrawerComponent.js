import { Avatar, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import NavItem from './NavItem'
import { LinkItems } from '@/data'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const DrawerComponent = ({ isOpen, onClose }) => {

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
        onClose();
    };

    return (
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            autoFocus={false}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
        >
            <DrawerOverlay />
            <DrawerContent bg="black" color={'white'} pt={5}>
                <DrawerCloseButton />

                <DrawerHeader mx={2} fontSize="xx-large" fontFamily="monospace">
                    <Image height={100} width={200} src='/logo.png' alt='Logo' priority loading="eager" />
                </DrawerHeader>

                <DrawerBody>
                    {LinkItems.map((link, index) => (
                        <NavItem key={index} icon={link.icon} href={link.href} onClick={onClose}>
                            {link.name}
                        </NavItem>
                    ))}
                </DrawerBody>

                <DrawerFooter mb={3}>
                    {/* Check if the user is signed in */}
                    {!session ? (
                        // If the user is not signed in, show the sign-in button
                        <Button w={'100%'} colorScheme={'teal'} onClick={handleSignInClick}>Log in to your account</Button>) : (
                        // If the user is signed in, Show the user's avatar
                        <HStack spacing={3} w={'100%'}>
                            <Avatar
                                size={'md'}
                                src={session?.user?.image}
                                border={'2px'}
                            />
                            <Heading size={'md'}>{session?.user?.name}</Heading>
                        </HStack>)
                    }
                </DrawerFooter>

            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent
