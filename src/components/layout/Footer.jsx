import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br mt-10 from-[#01b2d8]/20 to-[#01b2d8]/5 pt-24 pb-3 relative overflow-hidden font-poppins">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <img src="/assets/img/logo.svg" className="w-40 h-16 object-contain mb-6" alt="LeadCRM" />
                        <p className="text-black mb-8 max-w-xs">LeadCRM is LinkedIn integration tool for your CRM.</p>
                        <div className="flex gap-4">
                            <a href="#"><img src="/assets/img/link-2.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="LinkedIn" /></a>
                            <a href="#"><img src="/assets/img/link-1.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="Twitter" /></a>
                            <a href="#"><img src="/assets/img/link.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="Facebook" /></a>
                            <a href="#"><img src="/assets/img/link-3.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="Instagram" /></a>
                        </div>
                    </div>

                    {/* Integrations Column */}
                    <div>
                        <h4 className="font-bold text-[#090f4e] text-xl mb-6 font-poppins">Integrations</h4>
                        <ul className="space-y-3 font-poppins text-sm text-black">
                            <li><a href="#" className="hover:text-blue-600">HubSpot</a></li>
                            <li><a href="#" className="hover:text-blue-600">Salesforce</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pipedrive</a></li>
                            <li className="relative w-fit">
                                <a href="#" className="hover:text-blue-600">Close.io</a>
                                <span className="border border-white bg-gradient-to-r from-[#d8ffdd] to-[#bdffc6] text-[#002a06] text-[10px] font-bold ml-1 px-2 py-1 rounded-full whitespace-nowrap">Coming Soon</span>
                            </li>
                            <li className="relative w-fit">
                                <a href="#" className="hover:text-blue-600">Insightly</a>
                                <span className="border  border-white bg-gradient-to-r from-[#d8ffdd] to-[#bdffc6] text-[#002a06] text-[10px] font-bold ml-1 px-2 py-1 rounded-full whitespace-nowrap">Coming Soon</span>
                            </li>
                        </ul>
                    </div>

                    {/* Alternative Column */}
                    <div>
                        <h4 className="font-bold text-[#090f4e] text-xl mb-6 font-poppins">Alternative</h4>
                        <ul className="space-y-3 font-poppins text-sm text-black">
                            <li><a href="#" className="hover:text-blue-600">Surfe VS LeadCRM</a></li>
                            <li><a href="#" className="hover:text-blue-600">Linkmatch Alternative</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="font-bold text-[#090f4e] text-xl mb-6 font-poppins">Legal</h4>
                        <ul className="space-y-3 font-poppins text-sm text-black">
                            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-600">Terms of Use</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-[#090f4e] text-xl mb-6 font-poppins">Contact Us</h4>
                        <ul className="space-y-3 font-poppins text-sm text-black">
                            <li className="flex items-center gap-2"><img src="/assets/img/icon-1.svg" className="w-5 h-5" alt="" /> support@leadcrm.io</li>
                            <li className="flex items-center gap-2"><img src="/assets/img/icon.svg" className="w-5 h-5" alt="" /> +1 231-538-7466</li>
                            <li className="flex items-center gap-2"><img src="/assets/img/svg-11.svg" className="w-5 h-5" alt="" /> Help Center</li>
                        </ul>

                        {/* Chrome Store Badge */}
                        <a href="#" className="inline-block mt-6 bg-[#242424] text-white rounded-lg p-2 border-2 border-white/20 hover:border-white transition-colors flex items-center gap-3 w-fit pr-4">
                            <div className="text-left leading-tight">
                                <div className="text-xs font-normal font-poppins">Available in</div>
                                <div className="text-sm font-medium font-poppins">Chrome</div>
                            </div>
                            <div className="bg-white rounded-full p-0"><img src="/assets/icons/crome.svg" className="w-6" alt="" /></div>
                        </a>
                    </div>
                </div>


                <div className="text-center">
                    <p className="text-sm text-[#54595f] mt-4 font-poppins mb-2">
                        Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
                    </p>
                    <p className="text-sm text-[#7a7a7a] font-poppins border-t border-gray-300 pt-3">Copyright © 2025 LeadCRM. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
