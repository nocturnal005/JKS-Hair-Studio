import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="JKS Logo" className="w-12 h-12 object-contain rounded-full" />
          <div className="font-headline-md text-headline-md text-primary tracking-tight">
            JKS Hair Studio
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#services">Services</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#gallery">Gallery</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
          <a className="bg-primary text-on-primary px-6 py-2.5 font-label-caps text-label-caps uppercase tracking-widest active:scale-95 duration-200" href="#booking">Book Now</a>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
