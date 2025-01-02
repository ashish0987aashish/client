import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './Main Pages/Home';
import About from './Directories/About/About';
import Blog from './Directories/Blog/Blog';
import Carrer from './Directories/Carrers/Carrer';
import Contact from './Directories/Contact/Contact';
import Project from './Directories/Project/Project';
import Lenis from 'lenis';

const App = () => {
  return (
    <Router>
      <ScrollHandler>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/carrer" element={<Carrer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollHandler>
    </Router>
  );
};

// Scroll handler to manage Lenis and scroll position
const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      smoothness: 0.8,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Reset scroll position to top on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [location]);

  return children;
};

// Initial Redirect Component
const Root = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />;
};

export default App;
