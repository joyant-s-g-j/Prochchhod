import { Box, Button, Field, Fieldset, For, Input, NativeSelect, Stack } from '@chakra-ui/react'
import React from 'react'

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
        <Fieldset.Root size="lg" maxW="md" paddingX={1}>
            <Stack borderBottom="2px gray solid">
                <Fieldset.Legend paddingBottom="1">Assignment Details</Fieldset.Legend>
            </Stack>
            
            <Fieldset.Content>
                <Field.Root>
                <Field.Label>Cover Page Type</Field.Label>
                    <Field.HelperText>Enter your page type</Field.HelperText>
                    <NativeSelect.Root>
                        <NativeSelect.Field name="name" border="2px gray solid" placeholder='e.g. Assignment'>
                        <For each={["Assignment", "Lab Report", "Project"]}>
                            {(item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                            )}
                        </For>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>

                <Field.Root>
                    <Field.Label>Cover Page Title</Field.Label>
                    <Field.HelperText>Enter your page title</Field.HelperText>
                    <Input name="name" border="2px gray solid" placeholder='e.g. Implementing Inheritance in OOP' />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Course Title</Field.Label>
                    <Field.HelperText>Enter your course title</Field.HelperText>
                    <Input name="name" border="2px gray solid" placeholder='e.g. Object Oriented Programming' />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Course Id</Field.Label>
                    <Field.HelperText>Enter your course id</Field.HelperText>
                    <Input name="name" border="2px gray solid" placeholder='e.g. CSE 212' />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Submission Date</Field.Label>
                    <Field.HelperText>Enter submission date</Field.HelperText>
                    <Input name="date" type='date' border="2px gray solid" placeholder='e.g. 24/05/2025' />
                </Field.Root>

            </Fieldset.Content>
        </Fieldset.Root>

        {/* Teacher details */}
        <Fieldset.Root mt={{base: "2", lg: "0"}} size="lg" maxW="md" paddingX={1}>
            <Stack borderBottom="2px gray solid">
                <Fieldset.Legend paddingBottom="1">Teacher Details</Fieldset.Legend>
            </Stack>
            <Fieldset.Content>
                <Field.Root>
                    <Field.Label>Course Teacher's Name</Field.Label>
                    <Field.HelperText>Enter your course teacher's name</Field.HelperText>
                    <Input name="name" border="2px gray solid" placeholder='e.g. Mahmudur Rahman Roni' />           
                </Field.Root>

                <Field.Root>
                    <Field.Label>Course Teacher's Designation</Field.Label>
                    <Field.HelperText>Select your course teacher's designation</Field.HelperText>
                    <NativeSelect.Root>
                        <NativeSelect.Field name="name" border="2px gray solid" placeholder="e.g. Lecturer">
                        <For each={designations}>
                            {(item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                            )}
                        </For>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>

                <Field.Root>
                    <Field.Label>Course Teacher's Department</Field.Label>
                    <Field.HelperText>Enter your course teacher's</Field.HelperText>
                    <NativeSelect.Root>
                        <NativeSelect.Field name="cover type" border="2px gray solid" placeholder="e.g. Computer Science and Engineering">
                        <For each={departments}>
                            {(item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                            )}
                        </For>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>            
            </Fieldset.Content>
        </Fieldset.Root>

        {/* Student Details */}
        <Fieldset.Root mt={{base: "2", lg: "0"}} size="lg" maxW="md" paddingX={1}>
            <Stack borderBottom="2px gray solid">
                <Fieldset.Legend paddingBottom="1">Student Details</Fieldset.Legend>
            </Stack>
            <Fieldset.Content>
                <Field.Root>
                    <Field.Label>Student name</Field.Label>
                    <Field.HelperText>Enter your name</Field.HelperText>
                    <Input name="name" border="2px gray solid" placeholder='e.g. Joyant Sheikhar Gupta Joy' />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Student Id</Field.Label>
                    <Field.HelperText>Enter your student id</Field.HelperText>
                    <Input name="name" border="2px gray solid" placeholder='e.g. 241-0200-203' />
                </Field.Root>
                <Box display="flex" gap={1}>
                    <Field.Root>
                        <Field.Label>Batch No</Field.Label>
                        <Field.HelperText>Enter your batch number</Field.HelperText>
                        <Input name="name" border="2px gray solid" placeholder='e.g. CSE 241' />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Section</Field.Label>
                        <Field.HelperText>Enter your section</Field.HelperText>
                        <Input name="name" border="2px gray solid" placeholder='e.g. A' />
                    </Field.Root>
                </Box>

                <Field.Root>
                    <Field.Label>Session</Field.Label>
                    <Field.HelperText>Enter your session</Field.HelperText>
                    <NativeSelect.Root>
                        <NativeSelect.Field name="name" border="2px gray solid" placeholder='e.g. Summer'>
                        <For each={["Spring", "Summer", "Fall"]}>
                            {(item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                            )}
                        </For>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>

                <Field.Root>
                    <Field.Label>Department</Field.Label>
                    <Field.HelperText>Enter your department</Field.HelperText>
                    <NativeSelect.Root>
                        <NativeSelect.Field name="cover type" border="2px gray solid" placeholder="e.g. Computer Science and Engineering">
                        <For each={departments}>
                            {(item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                            )}
                        </For>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>
                
            </Fieldset.Content>

        {/* <Button type="submit" alignSelf="flex-start">
            Submit
        </Button> */}
        </Fieldset.Root>
    </Box>
    
  )
}

export default FormField