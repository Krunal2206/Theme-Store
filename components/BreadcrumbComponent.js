import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BreadcrumbComponent = () => {

    const router = useRouter()

    return (
        <Box p={'1rem'} bg={'gray.200'} position={'sticky'} w={'100%'} zIndex={1} top={'75px'}>
            <Breadcrumb spacing='5px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <Link href='/'>Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link href='/categories'>Categories</Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#' textTransform={'capitalize'}>{router.query.category}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}

export default BreadcrumbComponent
