import { Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const NavItem = ({ icon, children, href, ...rest }) => {

    const router = useRouter();
    const isActive = router.asPath === href || (router.asPath.startsWith('/categories') && href === '/categories');

    return (
        <Link href={href} passHref>
            <Flex
                align="center"
                fontSize="20"
                cursor="pointer"
                borderRadius="lg"
                py={4}
                my={2}
                bg={isActive && 'cyan.400'}
                _hover={{
                    bg: 'cyan.400'
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
