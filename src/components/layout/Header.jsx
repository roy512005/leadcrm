import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menuName) => {
        setOpenDropdown(openDropdown === menuName ? null : menuName);
    };

    const navLinks = [
        {
            name: 'Product',
            items: ['Features', 'Integrations', 'Enterprise', 'Chrome Extension']
        },
        {
            name: 'Pricing',
            href: '#'
        },
        {
            name: 'Resources',
            items: ['Blog', 'Guides & E-books', 'Help Center', 'API Documentation']
        },
        {
            name: 'Company',
            items: ['About Us', 'Careers', 'Contact', 'Partners']
        }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm h-[114px] flex items-center font-exo">
            <div className="container mx-auto px-4 lg:px-10 max-w-[1440px] flex justify-between items-center h-full">
                <a href="#" className="flex-shrink-0">
                    <img src="/assets/img/logo.svg" alt="LeadCRM" className="h-16 w-auto" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-12">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative group">
                                {link.href ? (
                                    <a href={link.href} className="font-semibold text-[#222222] text-lg hover:text-[#2d95bc] transition-colors">
                                        {link.name}
                                    </a>
                                ) : (
                                    <>
                                        <button
                                            className="flex items-center gap-2 font-semibold text-[#222222] text-lg focus:outline-none"
                                            onClick={() => toggleDropdown(link.name)}
                                        >
                                            {link.name}
                                            <img
                                                src="/assets/img/vector-7.svg"
                                                alt=""
                                                className={`w-4 h-3 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        {/* Dropdown Menu */}
                                        {openDropdown === link.name && (
                                            <div className="absolute top-full left-0 mt-4 w-56 bg-white shadow-xl rounded-xl border border-gray-100 animate-fade-in-up z-50">
                                                <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                                                <ul className="py-3 relative z-10 bg-white rounded-xl">
                                                    {link.items.map((item) => (
                                                        <li key={item}>
                                                            <a href="#" className="block px-6 py-2.5 hover:bg-gray-50 text-[#4c4c4c] font-medium transition-colors">
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <Button variant="primary">Get Your Free Account</Button>
                    <Button variant="secondary" className="gap-2">
                        <img src="/assets/img/frame-40.svg" alt="" className="w-6 h-6" />
                        Login
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-8 h-8 text-[#090f4e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-[114px] left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 lg:hidden border-t z-40">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <a href="#" className="text-lg font-semibold py-2 block text-[#222222]">
                                {link.name}
                            </a>
                        </div>
                    ))}
                    <div className="flex flex-col gap-3 mt-4">
                        <Button variant="primary" className="w-full">Get Your Free Account</Button>
                        <Button variant="secondary" className="w-full">Login</Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
