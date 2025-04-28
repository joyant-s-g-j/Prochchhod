import { Box } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Box display="flex"
        minH="100vh"
        alignItems="center"
        justifyContent="center" 
        flexDirection="column"
        textAlign="center"
        px={4}
    >
        Hero Section
    </Box>
  )
}

export default Hero