import React from 'react'
import { Document, Page, Text } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer';

const PDFView = () => {
  return (
    <PDFViewer style={{width: '50%', height: '90vh'}}>
      <Document>
          <Page size={'A4'}>
              <Text>Hello World</Text>
          </Page>
      </Document>
    </PDFViewer>
  )
}

export default PDFView