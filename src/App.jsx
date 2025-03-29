import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Vision from "./pages/Vision";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/app.css";
import Focus from "./pages/Focus";

function App() {
  return (
    <Router>
      <div className="pt-12 md:pt-17">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route
            path="/our-vision"
            element={
              <>
                <Navbar />
                <Vision />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Navbar />
                <ContactUs />
              </>
            }
          />
          <Route
            path="/our-team"
            element={
              <>
                <Navbar />
                <Team />
              </>
            }
          />
          <Route
            path="/focus"
            element={
              <>
                <Navbar />
                <Focus />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Error />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
