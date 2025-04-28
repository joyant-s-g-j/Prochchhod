import { Box } from '@chakra-ui/react';
import React from 'react'
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Box display="flex" backgroundColor="#f4f1ee" flexDirection="column">
      <Hero />     
    </Box>
  )
}

export default Home