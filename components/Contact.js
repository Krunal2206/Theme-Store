import { fadeInLeft, fadeInRight } from '@/utils/animations';
import { Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Stack, Textarea, VStack, useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import React from 'react'
import { useForm } from 'react-hook-form'

const MotionHeading = motion(Heading);
const MotionVStack = motion(VStack);

const Contact = () => {

    const { handleSubmit, register, reset, formState: { errors, isSubmitting }, } = useForm()
    const toast = useToast()

    const onSubmit = async (values) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_CONCERNURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const data = await res.json()

            if (data.ok) {
                toast({
                    title: 'Thanks for contacting us.',
                    description: "Yay! We've received your concern.",
                    position: 'top',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
                reset();
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <Container maxW="6xl" py={5} mb={10} px={{ base: 5, md: 8 }}>
            <Stack spacing={10}>
                <MotionHeading
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInRight}
                    transition={{ duration: 1, delay: 0.75 }}
                    fontSize="4xl"
                    textAlign={'center'}>
                    Contact Us
                </MotionHeading>
                <MotionVStack
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInLeft}
                    transition={{ duration: 1, delay: 0.75 }}
                    onSubmit={handleSubmit(onSubmit)}
                    as="form"
                    spacing={8}
                    w="100%"
                    bg={'white'}
                    rounded="lg"
                    boxShadow="lg"
                    p={5}
                >
                    <VStack spacing={4} w="100%">
                        <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>

                            <FormControl isInvalid={errors.name}>
                                <FormLabel htmlFor='name'>Name</FormLabel>
                                <Input id="name" type="text" placeholder="Name" rounded="md"
                                    {...register('name', {
                                        required: 'Please enter your name.',
                                        maxLength: { value: 20, message: "Name should not exceed the max length than 20." },
                                        minLength: { value: 3, message: "Name should contain atleast 3 characters." }
                                    })} />
                                <FormErrorMessage>
                                    {errors.name && errors.name.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.phone}>
                                <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                                <Input id="phone" type="number" placeholder="Enter your number" rounded="md"
                                    {...register('phone', {
                                        required: 'Please enter your phone number.',
                                        maxLength: { value: 10, message: "Phone number should not exceed the max length than 10." },
                                        minLength: { value: 10, message: "Phone number should contain atleast 10 digits." }
                                    })} />
                                <FormErrorMessage>
                                    {errors.phone && errors.phone.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Stack>

                        <FormControl isInvalid={errors.email}>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input id="email" type="email" placeholder="test@test.com" rounded="md"
                                {...register('email', {
                                    required: "Please enter your email.",
                                    pattern: { value: /^\S+@\S+$/i, message: "Please enter valid email address." }
                                })} />
                            <FormHelperText>We&apos;ll never share your email.</FormHelperText>
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.message}>
                            <FormLabel htmlFor='message'>Message</FormLabel>
                            <Textarea id="message" size="lg" placeholder="Enter your message" rounded="md"
                                {...register('message', {
                                    required: "Please enter your concern.",
                                    minLength: { value: 20, message: "Message should contain atleast 20 characters." }
                                })} />
                            <FormErrorMessage>
                                {errors.message && errors.message.message}
                            </FormErrorMessage>
                        </FormControl>
                    </VStack>

                    <VStack w="100%">
                        <Button
                            isLoading={isSubmitting}
                            type='submit'
                            bg="teal.300"
                            color="white"
                            _hover={{
                                bg: 'teal.500'
                            }}
                            rounded="md"
                            w={{ base: '100%', md: 'max-content' }}
                        >
                            Send Message
                        </Button>
                    </VStack>
                </MotionVStack>
            </Stack>
        </Container>
    )
}

export default Contact
