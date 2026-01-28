import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "7", label: "Years of Experience" },
    { value: "36", label: "Qualified Experts" },
    { value: "25000", label: "Conversions Generated Monthly" },
    { value: "1 M", label: "Organic Leads Monthly" },
];

const Stats = () => {
    return (
        <section className="py-20 bg-[#16163F] text-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-16">We're Good with Numbers</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="relative"
                        >
                            <h3 className="text-stat-num font-sans mb-2">{stat.value}</h3>
                            <p className="text-gray-400 text-stat-label font-avenir-light uppercase tracking-[1.6px]">{stat.label}</p>

                            {/* Separator dot for desktop, except last item */}
                            {index !== stats.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-30"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
