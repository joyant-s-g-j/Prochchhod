import { Box, Button, CloseButton, Drawer, Icon, Portal } from '@chakra-ui/react'
import { Home, Menu, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  return (
    <Box display={{base: 'block', lg: "none"}}>
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Drawer.Trigger asChild>
                <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                    <Icon as={Menu} />
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop onClick={handleClose} />
                <Drawer.Positioner>
                <Drawer.Content backgroundColor="#f4f1ee">
                    <Drawer.Header>
                        <Drawer.Title style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }}>Menu</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body display="flex" flexDirection="column" alignItems="start">
                        <Link to="/" onClick={handleClose}>
                            <Button
                                style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }} 
                                variant="ghost"
                            >
                                <Icon as={Home} />
                                Home
                            </Button>
                        </Link>
                        <Link to="/formpage" onClick={handleClose}>
                            <Button
                                style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }} 
                                variant="ghost"
                            >
                                <Icon as={PlusIcon} />
                                Create Cover
                            </Button>
                        </Link>
                    </Drawer.Body>
                    <Drawer.CloseTrigger asChild>
                        <CloseButton size="sm" onClick={handleClose}/>
                    </Drawer.CloseTrigger>
                </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    </Box>
  )
}

export default MobileNavbar