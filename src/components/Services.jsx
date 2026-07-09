import React from 'react';

const Services = () => {
  return (
    <>
      {/* Aesthetic Divider */}
      <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/20 transition-all duration-1000 opacity-100 translate-y-0">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto no-scrollbar">
          <div className="flex justify-between items-center gap-6 md:gap-12 min-w-max">
            <span className="font-label-caps text-xs md:text-xl font-medium text-primary/70 uppercase tracking-[0.2em] md:tracking-[0.5em]">Precision</span>
            <span className="font-label-caps text-xs md:text-xl font-medium text-primary/70 uppercase tracking-[0.2em] md:tracking-[0.5em]">•</span>
            <span className="font-label-caps text-xs md:text-xl font-medium text-primary/70 uppercase tracking-[0.2em] md:tracking-[0.5em]">Craftsmanship</span>
            <span className="font-label-caps text-xs md:text-xl font-medium text-primary/70 uppercase tracking-[0.2em] md:tracking-[0.5em]">•</span>
            <span className="font-label-caps text-xs md:text-xl font-medium text-primary/70 uppercase tracking-[0.2em] md:tracking-[0.5em]">Exclusivity</span>
            <span className="font-label-caps text-xs md:text-xl font-medium text-primary/70 uppercase tracking-[0.2em] md:tracking-[0.5em]">•</span>
            <span className="font-label-caps text-xs md:text-xl font-medium text-primary/70 uppercase tracking-[0.2em] md:tracking-[0.5em]">Artistry</span>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-32 bg-background transition-all duration-1000 opacity-100 translate-y-0" id="services">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-label-caps text-label-caps uppercase gold-underline">The Menu</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mt-4">Curated Haircare Services</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Each session is a bespoke experience tailored to your unique hair profile and lifestyle requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
            {/* Service Group 1 */}
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Haircut (Age: 18+)</h3>
                  <div className="menu-dot-line"></div>
                  <span className="font-headline-md text-headline-md text-primary">£20</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Precision cut, styling, and finish for adults.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Haircut (Age: 13-17)</h3>
                  <div className="menu-dot-line"></div>
                  <span className="font-headline-md text-headline-md text-primary">£15</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Sharp, stylish cuts for teens.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Haircut (Age: 0-12)</h3>
                  <div className="menu-dot-line"></div>
                  <span className="font-headline-md text-headline-md text-primary">£10</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Gentle but stylish cuts for the younger ones.</p>
              </div>
            </div>

            {/* Service Group 2 */}
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Beard Sculpt &amp; Groom</h3>
                  <div className="menu-dot-line"></div>
                  <span className="font-headline-md text-headline-md text-primary">£25</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Bespoke shaping, length adjustment, and beard oil treatment for a refined look.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Gold Standard Shave</h3>
                  <div className="menu-dot-line"></div>
                  <span className="font-headline-md text-headline-md text-primary">£30</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Traditional hot towel treatment, pre-shave oil, and razor-sharp finish for ultimate smoothness.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">The Full Transformation</h3>
                  <div className="menu-dot-line"></div>
                  <span className="font-headline-md text-headline-md text-primary">£65</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">The ultimate combination: Luxury Cut, Style, and Beard Grooming with facial refresh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
