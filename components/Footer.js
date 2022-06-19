import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('white', 'white')}
            color={useColorModeValue('blue.600', 'blue.600')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('grey', 'grey'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallWithSocial() {
    return (
        <Box
            bg={useColorModeValue('black', 'black')}
            color={useColorModeValue('white', 'white')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text fontSize={'2xl'}>Theme Store</Text>
                <Text>© 2022 Krunal Thakar. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Github'} href={'https://github.com/Krunal2206/'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/krunal2206/'}>
                        <FaLinkedin />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}