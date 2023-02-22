import HeroSection from "./components/home/playVideo";
import Main from "./components/home/MostVisited";
import Navbar from "./components/home/Navbar";
import { Routes, Route } from "react-router-dom";
import YouPlan from "./components/planning/YouPlan";
import WePlan from "./components/planning/WePlan";
import SubscribeUs from "./components/home/SubscribeUs";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import Footer from "./components/home/Footer";
import News from "./components/home/News";
import About from "./components/home/About";
import Goa from "./components/travelInfo/Goa";
import Kerala from "./components/travelInfo/Kerala";
import NewYork from "./components/travelInfo/NewYork";
import Panchgani from "./components/travelInfo/Panchgani";
import Uttarakhand from "./components/travelInfo/Uttarakhand";
import Maldives from "./components/travelInfo/Maldives";
import RanthamboreNationalPark from "./components/travelInfo/RanthamboreNationalPark";
import Kalpa from "./components/travelInfo/Kalpa";
import Kanyakumari from "./components/travelInfo/Kanyakumari";
import Login from "./pages/login";
import Signup from "./pages/signup";
import HolyPlace from "./components/home/HolyPlace";
import customplace from "./components/travelInfo/customPlace";
import CustomPlace from "./components/travelInfo/customPlace";

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
      "Roboto", //default
      "Helvetica Neue",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Poppins",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <Main />
              <HolyPlace />
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
          <Route path="/customplace" element={<CustomPlace />}></Route>
        </>
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
