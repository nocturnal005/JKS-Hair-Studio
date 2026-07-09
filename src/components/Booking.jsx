import React from 'react';

const Booking = () => {
  return (
    <section className="py-32 bg-background transition-all duration-1000 opacity-100 translate-y-0" id="booking">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 leading-tight">
              Secure Your<br /><span className="text-primary italic">Signature Experience</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-primary border border-outline-variant/30">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="font-body-md font-bold text-on-surface">Flexible Hours</h4>
                  <p className="text-on-surface-variant">Mon, Fri, Sat: 10 AM - 10 PM<br />Tue, Wed, Thu: 10 AM - 8 PM<br />Sun: Closed</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-primary border border-outline-variant/30">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-body-md font-bold text-on-surface">Private Studio</h4>
                  <p className="text-on-surface-variant">Premium location in the heart of London.<br />Detailed address provided on booking.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-primary border border-outline-variant/30">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <h4 className="font-body-md font-bold text-on-surface">Seamless Payment</h4>
                  <p className="text-on-surface-variant">We accept all major cards and digital wallets.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="obsidian-card p-6 md:p-10 gold-glint">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-label-caps text-[10px] text-outline uppercase block mb-2">Full Name</label>
                  <input className="w-full bg-surface border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline/50 transition-colors py-3 px-0" type="text" />
                </div>
                <div>
                  <label className="font-label-caps text-[10px] text-outline uppercase block mb-2">Phone Number</label>
                  <input className="w-full bg-surface border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline/50 transition-colors py-3 px-0" type="tel" />
                </div>
              </div>
              <div>
                <label className="font-label-caps text-[10px] text-outline uppercase block mb-2">Service Required</label>
                <select className="w-full bg-surface border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-colors py-3 px-0">
                  <option>Select a service...</option>
                  <option>Haircut (Age: 18+)</option>
                  <option>Haircut (Age: 13-17)</option>
                  <option>Haircut (Age: 0-12)</option>
                  <option>Beard Sculpt &amp; Groom</option>
                  <option>Gold Standard Shave</option>
                  <option>The Full Transformation</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-label-caps text-[10px] text-outline uppercase block mb-2">Preferred Date</label>
                  <input className="w-full bg-surface border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-colors py-3 px-0" type="date" />
                </div>
                <div>
                  <label className="font-label-caps text-[10px] text-outline uppercase block mb-2">Preferred Time</label>
                  <input className="w-full bg-surface border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-colors py-3 px-0" type="time" />
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary font-label-caps text-label-caps uppercase py-5 tracking-[0.2em] hover:bg-primary-fixed-dim transition-all gold-glint mt-4" type="submit">
                Confirm Appointment Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
