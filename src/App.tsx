import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import PhotoDetail from "./pages/PhotoDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VideoDetail from "./pages/VideoDetail";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:id" element={<PhotoDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos/:id" element={<VideoDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;