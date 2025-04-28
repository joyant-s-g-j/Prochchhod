import { Box } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" backgroundColor="blue.subtle">
      <Hero />     
    </Box>
  )
}

export default Home