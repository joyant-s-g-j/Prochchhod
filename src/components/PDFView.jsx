import React from 'react'
import { Document, StyleSheet, PDFViewer, Page, Text, View, Image, Font } from '@react-pdf/renderer'
import adust from "../assets/adust.png"

Font.register({
  family: 'Times New Roman',
  src: '/times.ttf',
})

const styles = StyleSheet.create({
  page: {
    // padding: 20,
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


const PDFView = () => {
  return (
    <PDFViewer style={{width: '50%', height: '90vh', marginTop: 72, objectFit: "contain", borderRadius: '10px'}}>
      <Document>
          <Page size={'A4'} style={styles.page} >
            <View style={styles.body}>
              <Image style={styles.image} src={adust} />
              <Text style={styles.uniName}>Atish Dipankar University of Science and Technology</Text>

              <Text style={styles.sectionTitle}>Assignment</Text>
              <Text style={styles.sectionFontSize}>Title: Implementing Inheritance of OOP</Text>
              <Text style={styles.sectionFontSize}>Course Name: Object Oriented Programming</Text>
              <Text style={styles.sectionFontSize}>Course ID: CSE 212</Text>

              <Text style={styles.sectionTitle}>Submitted to</Text>
              <Text style={styles.sectionFontSize}>Mahmudur Rahman Roni</Text>
              <Text style={styles.sectionFontSize}>Assistant Professor</Text>
              <Text style={styles.sectionFontSize}>Department of Computer Science and Engineering</Text>

              <Text style={styles.sectionTitle}>Submitted By</Text>
              <Text style={styles.sectionFontSize}>Joyant Sheikhar Gupta Joy</Text>
              <Text style={styles.sectionFontSize}>Batch: 241 || Section: A</Text>
              <Text style={styles.sectionFontSize}>Session: Summer</Text>
              <Text style={styles.sectionFontSize}>Department of Computer Science and Engineering</Text>

              <Text style={styles.date}>Submission Date: 03/05/2025</Text>
            </View>
          </Page>
      </Document>
    </PDFViewer>
  )
}

export default PDFView