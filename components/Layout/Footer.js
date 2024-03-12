import { SocialButtons } from '@/data'
import { Box, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

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

            <Text textAlign={'center'}>© {new Date().getFullYear()} Krunal Thakar. All rights reserved.</Text>

            <Stack direction="row" spacing={5} alignItems="center">
                {SocialButtons.map((sc, index) => (
                    <Link key={index} href={sc.url} isExternal>
                        <Box
                            as="button"
                            rounded="md"
                            padding={2}
                            border="1px solid"
                            borderColor="gray.500"
                            _hover={{
                                borderColor: 'gray.700',
                            }}
                            _focus={{
                                boxShadow: 'outline',
                            }}
                        >
                            {sc.icon}
                        </Box>
                    </Link>
                ))}
            </Stack>
        </Stack>
    )
}

export default Footer
