
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@chakra-ui/react';
import FormPage from './pages/FormPage';
import Navbar from './components/Navbar';

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
    </Box>
  )
}

export default App
