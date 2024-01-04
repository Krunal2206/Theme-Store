import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import NavItem from './NavItem'
import { LinkItems } from '@/data'

const DrawerComponent = ({ isOpen, onClose }) => {
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
                {isOpen && <DrawerCloseButton />}
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

            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent
