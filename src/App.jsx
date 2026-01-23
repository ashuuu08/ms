import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './components/Portfolio' // Import the new page

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} /> {/* Dynamic Route */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;