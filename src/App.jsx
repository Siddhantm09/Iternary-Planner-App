import HeroSection from "./Components/Home/HeroSection";
import Main from "./Components/Home/Main";
import Navbar from "./Components/Home/Navbar";
import { Routes, Route } from "react-router-dom";
import YouPlan from "./Components/Planning/YouPlan";
import WePlan from "./Components/Planning/WePlan";
import Subscribe from "./Components/Home/Subscribe";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <Main />
              <Subscribe />
            </div>
          }
        ></Route>
        <Route path="/youplan" element={<YouPlan />}></Route>
        <Route path="/weplan" element={<WePlan />}></Route>
      </Routes>
    </>
  );
}

export default App;
