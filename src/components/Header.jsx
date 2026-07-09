import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 cursor-pointer group">
          <img src="/logo.png" alt="JKS Logo" className="w-12 h-12 object-contain rounded-full group-hover:scale-105 transition-transform duration-300" />
          <div className="font-headline-md text-headline-md text-primary tracking-tight group-hover:text-primary-fixed transition-colors duration-300">
            JKS Hair Studio
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#services">Services</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#gallery">Gallery</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
          <a className="bg-primary text-on-primary px-6 py-2.5 font-label-caps text-label-caps uppercase tracking-widest active:scale-95 duration-200" href="#booking">Book Now</a>
        </div>
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface/95 backdrop-blur-lg border-b border-outline-variant/30 flex flex-col items-center py-8 gap-6 shadow-xl">
          <a className="font-body-md text-lg text-on-surface hover:text-primary transition-colors" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a className="font-body-md text-lg text-on-surface hover:text-primary transition-colors" href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a className="font-body-md text-lg text-on-surface hover:text-primary transition-colors" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a className="bg-primary text-on-primary px-8 py-3 mt-4 font-label-caps text-label-caps uppercase tracking-widest active:scale-95 duration-200" href="#booking" onClick={() => setIsMenuOpen(false)}>Book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
