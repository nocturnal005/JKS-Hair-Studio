import React from 'react';

const Gallery = () => {
  return (
    <section className="py-32 bg-surface-container-lowest transition-all duration-1000 opacity-100 translate-y-0" id="gallery">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-20">
          <span className="text-primary font-label-caps text-label-caps uppercase">Gallery</span>
          <h2 className="font-headline-lg text-headline-lg mt-4">Hall of Haircraft</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          <div className="md:col-span-2 md:row-span-2 obsidian-card overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" 
              data-alt="A high-contrast black and white editorial photograph of a male model with a perfectly executed sharp fade haircut." 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCx1seokM5VOTKqR0HA-tKVqRsVBFIsbApjcABCoJ0UV3Aj70Y_-8A0iZlmBimnSt185xWS-jxJq6QAvbBgx3X4nxVzz8ZEPOzxfsBoYMXPcyiV9KS7jhvQXhzgKaJfQH_zIY8LsvuZ_UqOa2RkbhIoLGd-dHT7VXuLUFdfNqwP_YnkgGBaGrihSbFBr71Ol8eUJ1QuqpdCXVHDpMgSszzSKLlnDuLoQ7pG_7SlG66XtTPtaSba-ROV3w')" }}
            ></div>
          </div>
          <div className="md:col-span-2 md:row-span-1 obsidian-card overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" 
              data-alt="A close-up photograph focusing on the fine detail of a master barber's hands using a straight razor on a client's beard." 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBz3nx1hc0ZpROo8uOyRE1oUDi1unU4swXQ1R0Wwn46j3CR9pRGjKXHZs_8n1dGztHef-SGxoTJEB36qKlyAe2kVc2jd3O9fj3h9elbBrGcetzRRpwYJxNtC0YMhBrq8T9ipcQ3J5phgc3UzK9W2aErURECLvUZGCyaYfy01Y03TJAGJjdwSPPb9aooMZ8wLfy3tXa1J8ge7pEBrc9bvaYk3wfy1DUywFVsEMsWdnkiAK1yyKV2rHvh2w')" }}
            ></div>
          </div>
          <div className="md:col-span-1 md:row-span-1 obsidian-card overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" 
              data-alt="An artistic shot of professional grooming products." 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBg31AearWxgfw7o8Yq90gfejnVgxGyuqi68ODl0wBxYmNBhlGzZYhqz0vSSERFO08Ray_qiIC0p-gNv4GQeWLoWNjetMavvxuhp3HSg6aIcSlLIIPpfMH08xKSNQ8QpLFhY2BNmFur9kN29l_LimJyRYmrHFn7BTi-mBhh7jrQZqp6a2L7tL0MpWHDmYZ_Jwytp-3sE7sKswdMmXC002nr-iG0i_mkSWl_z5DNT4HCD2KkOx7yGT9hTQ')" }}
            ></div>
          </div>
          <div className="md:col-span-1 md:row-span-1 obsidian-card overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" 
              data-alt="A side profile view of a client with a textured quiff hairstyle." 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTnxvUNhsutM5BU4C1fGnqQa8QMM4tuD9Tn2ZKmDqEuSEYlyo8H93gS1lC2mfSpJjjzPHbDftBE7dTVw1QstNno3IE6yQiNjm1xXRkSaB0YX1iFfhbS5GnDPSihWpexeDydexse1OuqHa-TbD44ORac9tx-CQDHvDUrPvjmvmzWKmyqyxPkg7wduXcjYRdu-4sazmqEyI-mQ6agZ3pPeIunJQBp-E_Fiac_IBuXVBxaiWfkx2yPi4TmQ')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
