import { Box, Button, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';
import heroimage from '../assets/heroImage.jpg'
import { Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';

const Hero = () => {
  return (
    <Box 
        display="flex" 
        minH="100vh" 
        alignItems="center"
        justifyContent="space-around"
        textAlign="center"
    >
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
        >
            <Text 
                fontSize="6xl" 
                textAlign="start" 
                color="blackAlpha.800"
                style={{fontFamily: "'Anton', sans-serif", fontWeight: "400"}}    
            >
                Create Your Perfect Cover <br /> with Just a Few Clicks
            </Text>
            <Text 
                fontSize="3xl" 
                textAlign="start" 
                color="gray.600" 
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: "500" }} 
            >
                Create, Download — Totally Free, Fast, and Easy!
            </Text>
            <Link to="/formpage">
                <Button 
                    variant="ghost" 
                    mt={3} 
                    display="flex" 
                    backgroundColor="#d2c7bc"
                    borderRadius="full"
                    color="blackAlpha.800"
                    _hover={{backgroundColor: "#d0b79e"}}
                    style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }}
                >
                    <Icon as={PlusIcon} />
                    Create Cover Page
                </Button>
            </Link>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
        >
            <Image mt={10} src={heroimage} alt='Hero Image' boxSize="600px" objectFit="contain" />      
        </motion.div>
    </Box>
    
  )
}

export default Hero