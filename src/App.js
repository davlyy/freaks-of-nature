import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import About from './pages/about';
import Blog from './pages/blog';
import Blogpost from './pages/blogpost';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/stolzl/font.css';
import './global.css';
import Relive from './pages/relive';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost" element={<Blogpost />} />
          <Route path="/relive" element={<Relive/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
