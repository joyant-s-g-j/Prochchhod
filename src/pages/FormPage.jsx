import { Box } from '@chakra-ui/react'
import React from 'react'
import Form from '../components/Form'
import PDFView from '../components/PDFView'

const FormPage = () => {
  return (
    <Box display='flex' justifyContent="space-between">
        {/* <Form /> */}
        <PDFView />
    </Box>
  )
}

export default FormPage