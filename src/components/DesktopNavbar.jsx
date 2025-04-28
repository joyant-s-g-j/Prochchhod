import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNavbar = () => {
  return (
    <Box display={{base: "none", lg: "flex"}}>
        <Link to="/formpage">
            <Button>
                Create Page
            </Button>
        </Link>
        
    </Box>
  )
}

export default DesktopNavbar