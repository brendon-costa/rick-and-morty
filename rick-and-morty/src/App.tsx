import './App.css'
import Home from "./pages/home/Home";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Home></Home>
    </ThemeProvider>
  )
}

export default App
