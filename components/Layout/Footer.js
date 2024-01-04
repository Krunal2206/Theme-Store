import { SocialButtons } from '@/data'
import { IconButton, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <Stack
            width={'100%'}
            marginInline="auto"
            p={7}
            spacing={{ base: 8, md: 0 }}
            justifyContent="space-between"
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
            bg='black'
            color='white'
        >
            <Link href="/" passHref>
                <Image height={100} width={200} src='/logo.png' alt='Logo' priority loading="eager" />
            </Link>

            <Text>© {new Date().getFullYear()} Krunal Thakar. All rights reserved.</Text>

            <Stack direction="row" spacing={5} alignItems="center">
                {SocialButtons.map((sc, index) => (
                    <IconButton
                        key={index}
                        as={Link}
                        href={sc.url}
                        aria-label={sc.label}
                        colorScheme={sc.type}
                        icon={sc.icon}
                        rounded="md"
                    />
                ))}
            </Stack>
        </Stack>
    )
}

export default Footer
