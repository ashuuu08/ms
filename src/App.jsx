import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Security from './pages/Security';
import Policy from './pages/Policy';
import Startups from './pages/Startups';
import SMEs from './pages/SMEs';
import Enterprises from './pages/Enterprises';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="w-full max-w-[100vw] overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          {/* Solutions Dropdown Routes */}
          <Route path="/solutions/startups" element={<Startups />} />
          <Route path="/solutions/smes" element={<SMEs />} />
          <Route path="/solutions/enterprises" element={<Enterprises />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/company" element={<Company />} />
          {/* Company Dropdown Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/faq" element={<FAQ />} />
          <Route path="/company/security" element={<Security />} />
          <Route path="/company/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
          {/* Keep old routes for backward compatibility */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;