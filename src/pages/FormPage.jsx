import { Box } from '@chakra-ui/react'
import React from 'react'
import Form from '../components/Form'
import PDFView from '../components/PDFView'

const FormPage = () => {
  return (
    <Box display='flex' backgroundColor="#f4f1ee" justifyContent="space-around" >
        <Form />
        <PDFView />
    </Box>
  )
}

export default FormPage