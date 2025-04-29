
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@chakra-ui/react';
import FormPage from './pages/FormPage';
import Navbar from './components/Navbar';
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/formpage' element={<FormPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </Box>
  )
}

export default App
