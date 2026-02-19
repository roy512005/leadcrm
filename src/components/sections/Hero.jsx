import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <>
            <main className="relative pt-[180px] pb-10 overflow-hidden">
                <img src="/assets/img/lines.png" className="absolute top-0 left-0 w-full h-100 pointer-events-none" alt="Background lines" />
                <img src="/assets/img/herobackground.svg" className="absolute top-[84px] left-0 w-full h-full pointer-events-none mix-blend-multiply" alt="Hero background pattern" />

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#99ccff] shadow-sm mb-8 animate-fade-in-up">
                        <img src="/assets/img/frame-44.svg" className="w-5 h-5" alt="Badge" />
                        <span className="text-[#63657e] text-sm font-normal font-exo">Thousands of Professional using LeadCRM</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-normal leading-tight md:leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[#121212] to-[#121212] mb-6 mx-auto font-exo">
                        <span className="font-semibold text-[#121212]">LinkedIn CRM Integration <br className="hidden md:block" /> Capture, Sync and Enrich in </span>
                        <span className="font-semibold text-[#2d95bc] relative">
                            <img src='/assets/icons/line.svg' className='absolute -bottom-[19px] left-[10px] w-full' />
                            Both Ways</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-[#363636] font-semibold text-lg md:text-[19px] max-w-4xl mx-auto leading-relaxed mb-12 font-exo">
                        Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
                    </p>

                    <div className="inline-flex items-center justify-center px-8 py-5 rounded-[20px] bg-gradient-to-r from-[#5ed3ff] via-[#eb65f4] to-[#fd58f2] shadow-sm">
                        <div className="flex items-center gap-10">
                            <span className="font-exo font-medium text-[#2d2d2d] text-2xl tracking-tight">Works with</span>
                            <ul className="flex items-center gap-6">
                                <li className="w-[60px] h-[60px]">
                                    <img src="/assets/icons/git.svg" alt="" className=" w-full h-full" />
                                </li>
                                <li className="w-[60px] h-[60px]">
                                    <img src="/assets/icons/picon.svg" alt="" className=" w-full h-full" />
                                </li>
                                <li className="w-[60px] h-[60px]">
                                    <img src="/assets/icons/Salesforce.svg" alt="" className=" w-full h-full" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 my-4">
                        <div className="flex items-center justify-center gap-[8.33px] p-[5px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] p-[10px] bg-white rounded-[6.67px] shadow-[0px_4px_34px_#acacac1a]">
                                <img src="/assets/icons/crome.svg" className='w-full' alt="" />
                            </div>
                            <ul className="flex items-center h-[18px] gap-2">
                                <li className="w-[19px]"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                            </ul>
                            <div class="font-medium text-[#090f4e] text-[15px] leading-[normal] text-center tracking-[0] whitespace-nowrap">5/5</div>
                        </div>

                        <div class="flex items-center justify-center gap-[8.33px] p-[5px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] p-[10px] bg-white rounded-[6.67px] shadow-[0px_4px_34px_#acacac1a]">
                                <img src="/assets/icons/capterra-logo.svg" className='w-full' alt="" />
                            </div>

                            <ul className="flex items-center h-[18px] gap-2">
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                                <li className="h-full"><img src="/assets/icons/star.svg" alt="" className=" w-full h-full" /></li>
                            </ul>
                            <div class="font-medium text-[#090f4e] text-[15px] leading-[normal] text-center tracking-[0] whitespace-nowrap">5/5</div>
                        </div>
                    </div>


                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-100">
                        <a href="#" className="inline-block bg-[#242424] text-white rounded-xl p-2 transition-colors flex items-center gap-3 w-fit px-6 py-2">
                            <div className="text-left leading-tight">
                                <div className="text-sm font-normal font-poppins">Available in</div>
                                <div className="text-md font-medium font-poppins">Chrome Web Store</div>
                            </div>
                            <div className="bg-white rounded-full p-0"><img src="/assets/icons/crome.svg" className="w-8" alt="" /></div>
                        </a>
                        <Button variant="lime" size="xl" className="inline-flex items-center gap-2 group shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(179,252,106,0.6)]">
                            Get a Free Trial Now!
                        </Button>
                    </div>

                </div>
            </main>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                {/* Ticker / Features Strip */}
                <div className="w-full max-w-7xl mx-auto mt-8 border-b border-gray-100 pt-6 pb-12">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                        <div className="flex items-center gap-3">
                            <img src="/assets/img/adobe-express---file--37--1.png" className="w-12 h-12 object-contain" alt="" />
                            <p className="text-lg leading-7 font-exo"><span className="text-[#6c6c6c]">Access to</span> <span className="font-semibold text-[#161616]">700M+ Contacts</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/assets/img/cursor-pointer-icon-479x512-ek32btk3-1-2.png" className="w-8 h-8 object-contain" alt="" />
                            <p className="text-lg leading-7 font-exo"><span className="font-semibold text-[#090f4e]">One click push</span> <span className="text-[#6c6c6c]">to CRM</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/assets/img/h38ch38bm0014iconset004-1.png" className="w-10 h-10 object-contain" alt="" />
                            <p className="text-lg leading-7 font-exo"><span className="font-semibold text-[#090f4e]">Custom Field</span> <span className="text-[#6c6c6c]">Mapping</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/assets/img/waterfall-3d-icon-download-in-png-blend-fbx-gltf-file-formats--w.png" className="w-9 h-9 object-contain" alt="" />
                            <p className="text-lg leading-7 font-exo"><span className="text-[#6c6c6c]">Advanced</span> <span className="font-semibold text-[#090f4e]">Waterfall Enrichment</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
