import { Box, Button, Icon } from '@chakra-ui/react'
import { Home, PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNavbar = () => {
  return (
    <Box display={{base: "none", lg: "flex"}} gap={3}>
        <Link to="/">
            <Button 
                style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }} 
                variant="ghost" 
                borderColor="blackAlpha.400"
                borderRadius="full"
                _hover={{backgroundColor: "#d0b79e"}}
            >
                <Icon as={Home} />
                Home
            </Button>
        </Link>
        <Link to="/formpage">
            <Button 
                style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }} 
                variant="ghost" 
                borderColor="blackAlpha.400"
                borderRadius="full"
                _hover={{backgroundColor: "#d0b79e"}}
            >
                <Icon as={PlusIcon} />
                Create Cover
            </Button>
        </Link>
    </Box>
  )
}

export default DesktopNavbar