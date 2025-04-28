import { Button, CloseButton, Dialog, Icon, Portal } from '@chakra-ui/react'
import { Clipboard } from 'lucide-react'
import React from 'react'

const DialogForm = () => {
  return (
    <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom"> 
        <Dialog.Trigger asChild>
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
                <Icon as={Clipboard} />
                Fill Up Form
            </Button>
        </Dialog.Trigger>
        <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content backgroundColor="#f4f1ee">
                    <Dialog.Header>
                        <Dialog.Title>Fill up this Form</Dialog.Title>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Header>
                    <Dialog.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, facere?
                    </Dialog.Body>
                </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
    </Dialog.Root>
  )
}

export default DialogForm