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
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route
            path="/our-vision"
            element={
              <div className="pt-12 md:pt-17">
                <Navbar />
                <Vision />
              </div>
            }
          />
          <Route
            path="/contact-us"
            element={
              <div className="pt-12 md:pt-17">
                <Navbar />
                <ContactUs />
              </div>
            }
          />
          <Route
            path="/our-team"
            element={
              <div className="pt-12 md:pt-17">
                <Navbar />
                <Team />
              </div>
            }
          />
          <Route
            path="/profile/:name/:role/:imageUrl/:bio/:email"
            element={
              <div className="pt-12 md:pt-17">
                <Navbar />
                <Profile />
              </div>
            }
          />
          <Route
            path="/focus"
            element={
              <div className="pt-12 md:pt-17">
                <Navbar />
                <Focus />
              </div>
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
