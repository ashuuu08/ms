import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logoo.png';

const Loader = ({ isInitial = false }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: 1,
        // When not initial, we can make it slightly transparent if desired
        backgroundColor: isInitial ? "rgba(2, 6, 23, 1)" : "rgba(2, 6, 23, 0.95)"
      }}
      exit={{ 
        opacity: 0,
        backgroundColor: "rgba(2, 6, 23, 0)", // Fade background to transparent
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center backdrop-blur-md"
    >
      <div className="relative">
        {/* Outer Ring Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-2 border-[#349ec9]/10 border-t-[#349ec9]"
        />
        
        {/* Inner Ring Spinner (Reverse) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-2 border-[#172a5f]/20 border-b-[#172a5f]"
        />

        {/* Logo in Center */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center font-bold"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold tracking-tight text-white leading-none">
          Ashbit<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f] font-extrabold">Soft</span>
        </h2>
        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.42em] mt-2 ml-1">
          IT Solutions
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
