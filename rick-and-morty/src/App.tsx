import './App.css'
import Home from "./pages/home/Home";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Character from "./pages/character/Character";
import {Location} from "./pages/location/Location";
import {Episode} from "./pages/episode/Episode";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/character" element={<Character/>} />
                <Route path="/location" element={<Location/>} />
                <Route path="/episode" element={<Episode/>} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
