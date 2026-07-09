import React from 'react';

const ContactFooter = () => {
  return (
    <>
      {/* Social Proof */}
      <section className="py-32 bg-surface-container-lowest transition-all duration-1000 opacity-100 translate-y-0" id="contact">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg mb-16">Connect With The Studio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a className="obsidian-card p-12 flex flex-col items-center group" href="https://www.instagram.com/j_kay_s1?igsh=MWtrNncxOHNsdTljaA==" target="_blank" rel="noreferrer">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-2">Instagram</span>
              <span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">@j_kay_sl</span>
            </a>
            <a className="obsidian-card p-12 flex flex-col items-center group" href="https://wa.me/447312200225" target="_blank" rel="noreferrer">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-2">WhatsApp / Direct Line</span>
              <span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">+44(0)7312200225</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/20 pt-20 pb-12">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-20">
            <div className="space-y-6">
              <div className="flex justify-center md:justify-start">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block group cursor-pointer">
                  <img src="/logo.png" alt="JKS Logo" className="w-24 h-24 object-contain rounded-full border border-primary/20 group-hover:scale-105 transition-transform duration-300 shadow-xl" />
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
                The definitive destination for premium hair craftsmanship in London. Precision, prestige, and unparalleled service.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-label-caps text-label-caps text-on-surface uppercase mb-6">Navigation</h5>
              <ul className="space-y-3">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Home</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#services">Services</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#gallery">Gallery</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#booking">Book Online</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-label-caps text-label-caps text-on-surface uppercase mb-6">Legal &amp; Connect</h5>
              <ul className="space-y-3">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Studio Policies</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/10">
            <p className="font-body-md text-body-md text-outline mb-4 md:mb-0">
              © 2024 JKS Hair Studio. All rights reserved.
            </p>
            <div className="flex gap-8">
              <span className="font-label-caps text-[10px] text-outline uppercase">Handcrafted by London's Finest</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
