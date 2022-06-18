import { Button, Input, Textarea, Container, Box, Heading, Text, Flex, Center, Image, Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'
import Footer from '../components/Footer'

function About() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {

        if ((name == '' || email == '' || phone == '' || message == '')) {
            alert('Please Enter a Valid Details!')
        } else {
            const data = { name, email, phone, message };

            fetch('http://localhost:3000/api/contactData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert("Thanks for contacting us");
                    setName('')
                    setEmail('')
                    setPhone('')
                    setMessage('')
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'message') {
            setMessage(e.target.value)
        }
    }

    const basicBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '300px',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'extrabold',
        fontSize: '50px',
        px: 4,
        background:
            'url(https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80) center/cover no-repeat',
    }

    return (
        <div style={{ width: '100%' }}>
            <Box sx={basicBoxStyles} filter='auto' brightness='70%' marginTop={{ base: '80px', md: '0px' }}>
                About Us
            </Box>

            <Flex gap={10} m={'40px 30px'} alignItems={'center'}>
                <Box width={'100%'}>
                    <Heading as='h3' size='lg' mb={4}>
                        Photos for everyone
                    </Heading>
                    <Text mb={3} fontSize={'large'}>Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.</Text>
                    <Text mb={3} fontSize={'large'}>Beautiful, free images gifted by the world’s most generous community of photographers. Better than any royalty free or stock photos.</Text>
                    <Text fontSize={'large'}>Grab the Images from Theme Store & Design your own devices.</Text>
                </Box>
                <Box display={{ base: 'none', sm: 'block' }}>
                    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                        <Image src='https://images.unsplash.com/photo-1612725558359-fb598a53b380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' h={'170px'} w={'210px'} borderRadius={'10px'} />
                        <Image src='https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' h={'170px'} w={'210px'} borderRadius={'10px'} />
                        <Image src='https://images.unsplash.com/photo-1615402637736-cd5a123ce973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' h={'170px'} w={'210px'} borderRadius={'10px'} />
                        <Image src='https://images.unsplash.com/photo-1654707264308-286492443b37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' h={'170px'} w={'210px'} borderRadius={'10px'} />
                    </Grid>
                </Box>
            </Flex>

            <Container padding="10px" margin={'12px auto'} maxWidth='80%'>
                <Center mb={'10'}>
                    <Heading as='h1' size={'2xl'}>Contact Us</Heading>
                </Center>
                <FormControl marginBottom={'5'} isRequired>
                    <FormLabel htmlFor='name' fontSize={'large'}>Name</FormLabel>
                    <Input id='name' type='text' name='name' placeholder='Name' value={name} onChange={handleChange} />
                </FormControl>

                <FormControl marginBottom={'5'} isRequired>
                    <FormLabel htmlFor='email' fontSize={'large'}>Email address</FormLabel>
                    <Input id='email' type='email' name='email' placeholder='Email' value={email} onChange={handleChange} />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl marginBottom={'5'} isRequired>
                    <FormLabel htmlFor='phone' fontSize={'large'}>Phone Number</FormLabel>
                    <Input id='number' type='number' name='phone' placeholder='Phone Number' value={phone} onChange={handleChange} />
                </FormControl>

                <FormControl marginBottom={'5'} isRequired>
                    <FormLabel htmlFor='message' fontSize={'large'}>Elaborate your concern</FormLabel>
                    <Textarea id='message' placeholder='Write your concern here' value={message} name='message' onChange={handleChange} isRequired />
                </FormControl>

                <Button colorScheme='teal' onClick={handleSubmit}>Submit</Button>
            </Container>

            <Footer />
        </div>
    )
}

export default About
