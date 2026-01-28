import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutImage from '../assets/about_right.avif';

const About = () => {
    const { scrollY } = useScroll();
    // Simplified window scroll tracking for stability
    const y = useTransform(scrollY, [500, 2000], ['-20%', '40%']);

    return (
        <section id="about" className="relative bg-white overflow-hidden">
            <div className="grid md:grid-cols-2 min-h-[600px]">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 md:px-12 lg:pr-32 lg:pl-16 py-16 md:py-24"
                >
                    <h4 className="text-primary font-avenir-heavy font-bold tracking-widest uppercase mb-4 text-[16px] md:text-[14px]">ABOUT</h4>
                    <h2 className="text-[28px] md:text-section-h2 text-secondary font-sans mb-6 md:mb-8 leading-tight">
                        Our Experts Are<br /> the Finest
                    </h2>

                    <div className="text-secondary/80 space-y-5 md:space-y-6 font-avenir-light text-[16px] md:text-section-p">
                        <p>
                            Our tight-knit team consists of enthusiastic and dedicated professionals who are passionate about what they do.
                            We have a wide range of marketing and technical expertise.
                        </p>
                        <p>
                            We measure success by results. As a full-service agency, we are committed to helping your business grow and stand out.
                            We believe in building long-term partnerships with our clients to ensure sustainable growth.
                        </p>
                        <p>
                            We have years of experience helping companies from various industries scale their business.
                        </p>
                    </div>
                </motion.div>

                {/* Right: Parallax Image Column */}
                <div className="relative w-full h-[400px] md:h-auto overflow-hidden">
                    <motion.img
                        src={aboutImage}
                        alt="Our professional team working on digital marketing strategies"
                        loading="lazy"
                        style={{ y }}
                        className="w-full h-[120%] object-cover object-left-bottom"
                    />
                    <div className="md:hidden absolute inset-0 bg-black/10 z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
