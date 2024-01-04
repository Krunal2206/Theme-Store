import { Button, Center } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
        <Center h={'80vh'} flexDir="column">
            <Image src={'/404.jpg'} alt="404" height={500} width={500} />
            <Button
                as={Link}
                href={'/'}
                bg={'teal.500'}
                color={'white'}
                transition="all 0.3s"
                _hover={{ bg: 'teal.600', transform: "scale(1.05)" }}
                rounded="md"
                fontWeight="medium"
                px={8}
            >Go Back</Button>
        </Center>
    )
}