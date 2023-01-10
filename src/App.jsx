import HeroSection from "./Components/Home/HeroSection";
import Main from "./Components/Home/Main";
import Navbar from "./Components/Home/Navbar";
import { Routes, Route } from "react-router-dom";
import YouPlan from "./Components/Planning/YouPlan";
import WePlan from "./Components/Planning/WePlan";
import SubscribeUs from "./Components/Home/SubscribeUs";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import Footer from "./Components/Home/Footer";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#b09cf4",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      '"Helvetica Neue"',
      "cursive",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <Main />
              <SubscribeUs />
            </div>
          }
        ></Route>
        <Route path="/youplan" element={<YouPlan />}></Route>
        <Route path="/weplan" element={<WePlan />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
