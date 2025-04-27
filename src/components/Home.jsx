import { Box } from '@chakra-ui/react';
import { Document, Page, Text } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer';
import React from 'react'
import Form from './Form';

const Home = () => {
  return (
    <Box display='flex'>
        <PDFViewer style={{width: '50%', height: '90vh'}}>
            <Document>
                <Page size={'A4'}>
                    <Text>Hello World</Text>
                </Page>
            </Document>
        </PDFViewer>
        <Form />
    </Box>
    
  )
}

export default Home