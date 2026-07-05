import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import SentioApp from "./pages/SentioApp";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/portfolio/sentio-app" element={<SentioApp />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;