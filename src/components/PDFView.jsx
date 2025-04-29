import React from 'react'
import { Document, StyleSheet, PDFViewer, Page, Text, View, Image, Font } from '@react-pdf/renderer'
import adust from "../assets/adust.png"
import { useMediaQuery } from '@chakra-ui/react'

Font.register({
  family: 'Times New Roman',
  src: '/times.ttf',
})

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Times New Roman',
  },
  body: {
    flex: 1, 
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    height: 200,
    width: 150
  },
  uniName: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 42,
    marginBottom: 5,
  },
  sectionFontSize: {
    fontSize: 14
  },
  date: {
    fontSize: 14,
    marginVertical: 30
  }
})


const PDFDocument = ({ formData }) =>  ( 
      <Document>
          <Page size={'A4'} style={styles.page} >
            <View style={styles.body}>
              <Image style={styles.image} src={adust} />
              <Text style={styles.uniName}>Atish Dipankar University of Science and Technology</Text>

              <Text style={styles.sectionTitle}>{formData?.pageType || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>Title: {formData?.pageTitle || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>Course Name: {formData?.courseTitle || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>Course ID: {formData?.courseId || 'N/A'}</Text>

              <Text style={styles.sectionTitle}>Submitted to</Text>
              <Text style={styles.sectionFontSize}>{formData?.teacherName || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>{formData?.teacherDesignation || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>Department of {formData?.teacherDepartment || 'N/A'}</Text>

              <Text style={styles.sectionTitle}>Submitted By</Text>
              <Text style={styles.sectionFontSize}>{formData?.studentName || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>{formData?.studentId || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>Batch: {formData?.batchNo || 'N/A'} || Section: {formData?.section || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>Session: {formData?.session || 'N/A'}</Text>
              <Text style={styles.sectionFontSize}>Department of {formData?.studentDepartment || 'N/A'}</Text>

              <Text style={styles.date}>Submission Date: {formData?.submissionDate || 'N/A'}</Text>
            </View>
          </Page>
      </Document>
  )

const PDFView = ({formData}) => {
  const [isTabletOrMobile] = useMediaQuery('(max-width: 1024px)');
  return (
    <PDFViewer
      key={isTabletOrMobile ? 'mobile' : 'desktop'}
      style={{
        width: isTabletOrMobile ? '100%' :'50%', 
        height: '90vh', 
        marginTop: 72, 
        objectFit: "contain", 
        borderRadius: '20px',
        padding: 10
      }}
    >
      <PDFDocument formData={formData} />
    </PDFViewer>
  )
}

export default PDFView;
export { PDFDocument };