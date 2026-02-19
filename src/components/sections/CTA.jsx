import React from 'react';
import Button from '../ui/Button';

const CTA = () => {
    return (
        <section className="py-12 relative overflow-hidden bg-[#EAEFFA]">
            <div className="absolute inset-0 bg-[#eaeffa] -z-20 clip-path-slant"></div>
            <div className="container mx-auto px-4 lg:px-10 max-w-[1440px] relative">
                <h2 className="text-4xl font-semibold text-[#090f4e] text-left mb-12 font-exo">
                    Join Thousands of Professionals Using LeadCRM
                </h2>

                <div className="relative w-full rounded-2xl overflow-hidden shadow-1xl bg-gradient-to-b from-[#0995c8] to-[#065d7d] min-h-[400px] flex items-center justify-center">
                    <img src="/assets/img/bg.png" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" alt="" aria-hidden="true" />

                    <div className="relative z-10 text-center">
                        <h3 className="text-white text-3xl md:text-5xl font-semibold mb-8 mt-10 p-4 font-exo">
                            Your LinkedIn Powerhouse for Smarter Lead Management
                        </h3>

                        {/* Trust Badges */}
                        <img src="/assets/img/Producthunt-banner.svg" className='h-full' alt="Product Hunt Badge" />

                    </div>

                    {/* Decorative elements */}
                    <img src="/assets/img/vector-10.svg" className="absolute top-[20%] left-0 w-[5%] opacity-50" alt="" aria-hidden="true" />
                    <img src="/assets/img/vector-10.svg" className="absolute bottom-[20%] right-[20%] w-[5%] opacity-50 transform rotate-180" alt="" aria-hidden="true" />
                </div>

                <div className="flex justify-center mt-20">
                    <Button className="px-10 py-4 text-lg bg-[#b3fc6a] hover:bg-[#a3ec5a] text-black font-semibold rounded-xl shadow-lg">
                        Get Started Today
                        <img src="/assets/icons/rightarrow.svg" className="w-4 ml-3" alt="" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
