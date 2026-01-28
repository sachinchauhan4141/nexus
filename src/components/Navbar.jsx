import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollValues = window.scrollY;

            setIsScrolled(window.scrollY > 50);

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollValues >= sectionTop && scrollValues < sectionTop + sectionHeight) {
                    setActiveSection(sectionId ? sectionId.charAt(0).toUpperCase() + sectionId.slice(1) : 'Home');
                } else if (scrollValues < 100) {
                    setActiveSection('Home');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Clients', href: '#clients' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/70 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-sm font-medium relative">
                {/* Logo */}
                <a href="#" className="flex items-center tracking-wide z-10">
                    <span className="text-secondary font-worksans font-semibold text-[26px] leading-none">NEXUS</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`${activeSection === link.name ? 'text-primary' : 'text-secondary'
                                } hover:text-primary transition-colors text-[18px] leading-[49px] font-avenir-light font-normal`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-secondary z-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop Overlay */}
                <div
                    className="absolute inset-0 bg-secondary/20 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Content */}
                <div
                    className={`absolute right-0 top-0 h-full w-[75%] max-w-[300px] bg-white shadow-2xl flex flex-col py-24 px-8 gap-8 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`${activeSection === link.name ? 'text-primary' : 'text-secondary'} font-avenir-heavy text-xl tracking-wide transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="mt-4 inline-block w-full h-[50px] leading-[50px] text-center bg-primary text-white rounded-full text-[16px] font-avenir-heavy shadow-md"
                        onClick={() => setIsOpen(false)}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
