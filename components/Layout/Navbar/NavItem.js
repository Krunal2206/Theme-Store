import { Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ icon, children, href, ...rest }) => {

    const router = useRouter();

    // Determine if the current route matches the navigation item's URL
    const isActive = router.asPath === href || (router.asPath.startsWith('/categories') && href === '/categories');

    // Set the background color of the navigation item based on whether it is active or not
    const bg = isActive ? 'cyan.400' : undefined

    return (
        <Link href={href} passHref>
            <Flex
                align="center"
                fontSize="1.25rem"
                cursor="pointer"
                borderRadius="lg"
                py={4}
                my={2}
                bg={bg}
                role="button"
                _hover={{
                    bg: 'cyan.400',
                    transition: 'background-color 0.2s ease-in-out',
                }}
                {...rest}>
                {
                    icon && <Icon as={icon} mx="4" />
                }
                {children}
            </Flex>
        </Link>
    )
}

export default NavItem
