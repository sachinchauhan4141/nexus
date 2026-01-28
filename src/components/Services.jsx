import React from 'react';
import { motion } from 'framer-motion';

// Using simple SVG icons to match the abstract look in screenshots
const MoleculeIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e0c2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" fill="#e0c2ff" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="5" r="2" />
        <path d="M7 17l3-3" />
        <path d="M14 10l3-3" />
    </svg>
);

const CheckIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const GridIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" fill="#A855F7" />
        <rect x="14" y="3" width="7" height="7" fill="#E9D5FF" />
        <rect x="14" y="14" width="7" height="7" fill="#E9D5FF" />
        <rect x="3" y="14" width="7" height="7" fill="#E9D5FF" />
    </svg>
);

const services = [
    {
        icon: <MoleculeIcon />,
        title: "Search Engine Optimization",
        description: "Get seen by customers at the exact moment they’re searching for your products and services."
    },
    {
        icon: <CheckIcon />,
        title: "Social Media Marketing",
        description: "Connect, engage, and grow your brand with smart social media strategies and campaigns."
    },
    {
        icon: <GridIcon />,
        title: "Pay Per Click",
        description: "ROI & Performance marketing at its best. Reach your target group exactly where they are."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16 md:mb-20">
                    <h4 className="text-primary font-avenir-heavy font-bold tracking-widest mb-2 uppercase text-[16px] md:text-[14px]">What's In BOX For You?</h4>
                    <h2 className="text-[28px] md:text-section-h2 text-secondary font-worksans leading-tight">
                        Taking Your Business to<br className="hidden md:block" /> the Next Level
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }} // Slide up
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="flex flex-col items-center max-w-[300px] mx-auto"
                        >
                            <div className="mb-6 w-20 h-20 md:w-24 md:h-24 bg-purple-50 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-card-title text-secondary mb-3 md:mb-4 font-avenir-heavy">{service.title}</h3>
                            <p className="text-[16px] md:text-card-desc text-secondary/80 leading-[1.6] font-avenir-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
