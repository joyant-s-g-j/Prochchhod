import { Box, Button, Field, Fieldset, For, Input, NativeSelect, Stack } from '@chakra-ui/react'
import React from 'react'

const ReusableFieldset = ({title, fields}) => {
    return (
        <Fieldset.Root size="lg" maxW="md" paddingX={1} mt={{base: "2", lg: "0"}}>
            <Stack borderBottom="2px gray solid">
                <Fieldset.Legend paddingBottom="1">{title}</Fieldset.Legend>
            </Stack>
            
            <Fieldset.Content>
              <For each={fields}>
                {(field, idx) => (
                    <Field.Root key={idx}>
                        <Field.Label>{field.label}</Field.Label>
                        <Field.HelperText>{field.helperText}</Field.HelperText>
                        {field.type === 'select' ? (
                            <NativeSelect.Root>
                            <NativeSelect.Field name={field.name} border="2px gray solid" placeholder={field.placeholder}>
                            <For each={field.options}>
                                {(option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                )}
                            </For>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                        ) : (
                            <Input
                                name={field.name}
                                type={field.inputType || 'text'}
                                border="2px gray solid"
                                placeholder={field.placeholder}
                            />
                        )}   
                    </Field.Root>
                )}             
                </For>
            </Fieldset.Content>
        </Fieldset.Root>
    )
}

const FormField = () => {
    const designations = [
        "Lecturer", "Senior Lecturer", "Assistant Professor", "Associate Professor",
        "Professor", "Adjunct Professor", "Distinguished Professor", "Visiting Professor",
        "Research Professor", "Emeritus Professor", "Instructor", "Teaching Assistant",
        "Postdoctoral Researcher", "Department Head", "Dean"
    ];
    const departments = [
        "Computer Science and Engineering", "Electrical and Electronic Engineering", "Mechanical Engineering",
        "Textile Engineering", "Civil Engineering", "Fashion Design and Technology",
        "Robotics and Automation Engineering", "Business Administration",
        "Agribusiness", "Pharmacy", "Public Health", "Journalism and Media Studies",
        "English", "Law", "Economic"
      ];
  return (
    <Box 
        display="flex" 
        style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }} 
        flexDirection={{base: "column", lg: "row"}} 
        alignItems={{md: "center", lg: "start"}} 
        justifyContent="space-between"
    >
        {/* Assignment Details */}
        <ReusableFieldset
            title="Assignment Details"
            fields={[
            { label: "Cover Page Type", helperText: "Enter your page type", type: "select", name: "coverType", options: ["Assignment", "Lab Report", "Project"], placeholder: "e.g. Assignment" },
            { label: "Cover Page Title", helperText: "Enter your page title", name: "coverTitle", placeholder: "e.g. Implementing Inheritance in OOP" },
            { label: "Course Title", helperText: "Enter your course title", name: "courseTitle", placeholder: "e.g. Object Oriented Programming" },
            { label: "Course Id", helperText: "Enter your course id", name: "courseId", placeholder: "e.g. CSE 212" },
            { label: "Submission Date", helperText: "Enter submission date", name: "submissionDate", inputType: "date", placeholder: "e.g. 24/05/2025" },
            ]}
        />

        {/* Teacher details */}
        <ReusableFieldset
            title="Teacher Details"
            fields={[
            { label: "Course Teacher's Name", helperText: "Enter your course teacher's name", name: "teacherName", placeholder: "e.g. Mahmudur Rahman Roni" },
            { label: "Course Teacher's Designation", helperText: "Select your course teacher's designation", type: "select", name: "teacherDesignation", options: designations, placeholder: "e.g. Lecturer" },
            { label: "Course Teacher's Department", helperText: "Enter your course teacher's department", type: "select", name: "teacherDepartment", options: departments, placeholder: "e.g. Computer Science and Engineering" },
            ]}
        />

        {/* Student Details */}
        <ReusableFieldset
            title="Student Details"
            fields={[
            { label: "Student Name", helperText: "Enter your name", name: "studentName", placeholder: "e.g. Joyant Sheikhar Gupta Joy" },
            { label: "Student Id", helperText: "Enter your student id", name: "studentId", placeholder: "e.g. 241-0200-203" },
            { label: "Batch No", helperText: "Enter your batch number", name: "batchNo", placeholder: "e.g. CSE 241" },
            { label: "Section", helperText: "Enter your section", name: "section", placeholder: "e.g. A" },
            { label: "Session", helperText: "Enter your session", type: "select", name: "session", options: ['Spring', 'Summer', 'Fall'], placeholder: "e.g. Summer" },
            { label: "Department", helperText: "Enter your department", type: "select", name: "department", options: departments, placeholder: "e.g. Computer Science and Engineering" },
            ]}
        />
    </Box>  
  )
}

export default FormField