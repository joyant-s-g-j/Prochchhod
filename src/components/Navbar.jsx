import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <Box 
        as="nav"
        position="fixed"
        top="0"
        margin="10px"
        width="calc(100% - 20px)"   
        zIndex="50"
        border="2px solid"
        borderColor="gray.400"
        bg="blue.muted"
        borderRadius="4xl"
        backdropFilter="blur(70px)"
    >
        <Box maxW="7xl" mx="auto" px={4}>
            <Flex align="center" gap={5} h="16" justify="space-between">
                <Flex align="center">
                    <Link to="/">
                        <Flex direction="row">
                            <Icon as={FileText} boxSize={{base: "9", lg: "12"}} />
                            <Text fontSize={{base: "2xl", lg: "3xl"}} textTransform="uppercase" fontWeight="bold">প্রচ্ছদ</Text>
                        </Flex>
                    </Link>
                </Flex>
                <DesktopNavbar />
                <MobileNavbar />
            </Flex>
        </Box>
    </Box>
  )
}

export default Navbar
