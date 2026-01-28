import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}
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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden fixed inset-0 w-full h-screen bg-white z-[100] flex flex-col items-center justify-center gap-10"
                    >
                        {/* Close button inside menu */}
                        <button
                            className="absolute top-8 right-6 text-secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 + 0.2 }}
                                className={`${activeSection === link.name ? 'text-primary' : 'text-secondary'
                                    } font-avenir-light text-[22px] md:text-5xl tracking-tight transition-colors font-light duration-300`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
