import Topbar from './Topbar'
import { useDisclosure } from '@chakra-ui/react'
import DrawerComponent from './DrawerComponent';

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Topbar onOpen={onOpen} />
            <DrawerComponent isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Navbar
