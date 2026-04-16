import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import FeatureDetail from './pages/FeatureDetail';
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
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ChatBot from './components/ChatBot';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

const AppContent = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Initial load simulation
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInitialLoad) return;
    
    // Trigger transition when actual path changes
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);

      const switchTimer = setTimeout(() => {
        setDisplayLocation(location);
        window.scrollTo(0, 0);
      }, 300);

      const finishTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, 700);

      return () => {
        clearTimeout(switchTimer);
        clearTimeout(finishTimer);
      };
    }
    // We only depend on location to trigger the effect
    // Including displayLocation in dependencies was causing the effect to reset and cancel the finish timer
  }, [location.pathname, isInitialLoad]);

  const showLoader = isInitialLoad || isTransitioning;

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <Loader 
            key="page-loader" 
            isInitial={isInitialLoad} 
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-[100vw] overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans">
        <Navbar />
        <Routes location={displayLocation} key={displayLocation.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/startups" element={<Startups />} />
          <Route path="/solutions/smes" element={<SMEs />} />
          <Route path="/solutions/enterprises" element={<Enterprises />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/:slug" element={<FeatureDetail />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/faq" element={<FAQ />} />
          <Route path="/company/security" element={<Security />} />
          <Route path="/company/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;