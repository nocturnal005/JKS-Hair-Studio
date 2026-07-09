import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-40 grayscale" 
          data-alt="A dark, moody cinematic close-up of a professional barber's tools resting on a black leather surface. Warm, dramatic lighting highlights the metallic sheen of scissors and razors. The atmosphere is upscale, masculine, and sophisticated, with deep shadows and soft golden reflections that evoke a luxury boutique feeling." 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeyl4HDuohxXiNbwljzJ8DN1OxDSauFeFXd5EI-ud1yg9ZE5BTJEPE_UYmFmOEqEsc2I43yDPNTXgDh8mOjZmR_WBE5WKrUj8P2AVg8bdRa0HiXfcWFHRNj18kmm8yvs85uJs9rJLu5dhU90N8KX4OmlKOX5KHkNy18Tp9Ak5CcBHB7G1phiQb5KUQJNiwcnczeR1adlEr-YS5rDyO1q1dB7YH8KGNojAYfUwOt8nXQcXprnjLE4GOhA')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 gap-12 items-center">
        <div className="space-y-8 text-center">
          <div className="inline-block border border-primary/40 px-4 py-1 text-primary font-label-caps text-label-caps uppercase">
            London's Premier Grooming Destination
          </div>
          <h1 className="font-display-lg text-display-lg text-on-background leading-none">
            The <span className="text-primary italic font-medium">Gold</span> Standard: <br />
            Haircraft At Its Finest
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
            Experience precision engineering for the modern gentleman. We combine traditional craftsmanship with contemporary aesthetics to define your signature look.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
            <a className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-primary-fixed-dim transition-all gold-glint" href="#booking">
              Book Appointment
            </a>
            <a className="border border-primary text-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-primary/10 transition-all" href="#services">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
