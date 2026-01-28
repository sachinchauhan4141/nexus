import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/hero_bg.avif';

const Hero = () => {
    const { scrollY } = useScroll();
    const width = useTransform(scrollY, [0, 500], ["100%", "70%"]);


    // standardized slide up animation
    const slideUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: custom * 0.2
            }
        })
    };

    return (
        <section className="relative min-h-[90vh] md:min-h-[135vh] flex items-start pt-20 md:pt-32 pb-20 overflow-hidden">
            {/* Animated Background Wrapper */}
            <motion.div
                style={{ width }}
                className="absolute top-0 left-0 right-0 mx-auto h-full overflow-hidden z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />

                {/* Top Cyan Glow Overlay */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-100/50 to-transparent z-0 pointer-events-none"></div>

                {/* General Overlay */}
                <div className="absolute inset-0 bg-white/30 z-0"></div>
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div>
                    {/* Text Content */}
                    <div className="block">
                        <motion.h1
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={slideUp}
                            className="text-[32px] md:text-[65px] md:max-w-[1050px] text-secondary mb-6 md:mb-6 mt-6 md:mt-0 tracking-normal font-worksans leading-[1.15] md:leading-[1.1] font-bold"
                        >
                            Realise the full digital potential of your brand
                        </motion.h1>

                        <motion.p
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={slideUp}
                            className="text-[16px] md:text-hero-sub text-secondary mb-4 md:mb-10 max-w-lg md:max-w-[465px] font-avenir-light leading-relaxed"
                        >
                            Solve your toughest marketing challenges and drive exceptional business results leveraging our unique expertise.
                        </motion.p>
                    </div>

                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                    >
                        <a
                            href="#contact"
                            className="inline-block w-[154px] h-[50px] leading-[50px] text-center bg-primary text-white rounded-full text-hero-btn hover:opacity-90 transition-opacity font-avenir-light"
                        >
                            Learn More
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
