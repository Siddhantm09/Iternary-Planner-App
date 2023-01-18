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
import News from "./Components/Home/News";
import About from "./Components/Home/About";
import Goa from "./Components/TravelInfo/Goa";
import Kerala from "./Components/TravelInfo/Kerala";
import NewYork from "./Components/TravelInfo/NewYork";
import Panchgani from "./Components/TravelInfo/Panchgani";
import Uttarakhand from "./Components/TravelInfo/Uttarakhand";
import Maldives from "./Components/TravelInfo/Maldives";
import RanthamboreNationalPark from "./Components/TravelInfo/RanthamboreNationalPark";
import Kalpa from "./Components/TravelInfo/Kalpa";
import Kanyakumari from "./Components/TravelInfo/Kanyakumari";

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
      "Apple Color Emoji",
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
        <>
          <Route path="/youplan" element={<YouPlan />}></Route>
          <Route path="/weplan" element={<WePlan />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/about" element={<About />}></Route>
        </>

        <>
          <Route path="/tips/goa" element={<Goa />}></Route>
          <Route
            path="/tips/ranthambore"
            element={<RanthamboreNationalPark />}
          ></Route>
          <Route path="/tips/kalpa" element={<Kalpa />}></Route>
          <Route path="/tips/panchgani" element={<Panchgani />}></Route>
          <Route path="/tips/maldives" element={<Maldives />}></Route>
          <Route path="/tips/newyork" element={<NewYork />}></Route>
          <Route path="/tips/kanyakumari" element={<Kanyakumari />}></Route>
          <Route path="/tips/kerala" element={<Kerala />}></Route>
          <Route path="/tips/uttarakhand" element={<Uttarakhand />}></Route>
        </>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
