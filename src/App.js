
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
// import { purple } from "@mui/material/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";



const themes = createTheme({
  // palette: {
  //   primary: purple
  // }
  typography: {
    fontFamily: 'Poiret One'
  }
})


function App() {
  return (
    <ThemeProvider theme={themes}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
