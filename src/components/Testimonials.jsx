import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "Nexus resources have completed more projects than the client could have done with an in-house team. Their technically savvy, organized team meets all of the client's project requirements and follows their specific sprint timelines.",
        name: "Josh Phillips",
        role: "Director of Software Engineering, BodyLabs"
    },
    {
        quote: "Working with Nexus was a game-changer for our product launch. Their attention to detail and ability to deliver complex features on time was exactly what we needed to scale efficiently.",
        name: "Sarah Jenkins",
        role: "CTO, TechFlow Solutions"
    },
    {
        quote: "The team demonstrated exceptional technical prowess and deep understanding of our business goals. They felt like a true extension of our internal team rather than just an agency.",
        name: "Michael Ross",
        role: "VP of Product, Innovate Corp"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000); // 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-[#9E3FFD] text-white relative overflow-hidden">
            {/* Background blobs for texture */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="font-avenir-heavy tracking-widest uppercase mb-8 text-[14px]"
                >
                    Trusted by
                </motion.h4>

                <div className="max-w-4xl mx-auto min-h-[300px] flex flex-col justify-center">
                    {/* 
                  Using AnimatePresence for smooth cross-fade. 
                  Removed y-axis animation as requested.
               */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            variants={{
                                enter: { opacity: 0, scale: 0.95 },
                                center: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 1.05 }
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <h2 className="text-[20px] md:text-quote font-avenir-heavy mb-8 md:mb-12 px-2 md:px-0">
                                "{testimonials[activeIndex].quote}"
                            </h2>

                            <div>
                                <h3 className="text-author-name font-sans mb-1">{testimonials[activeIndex].name}</h3>
                                <p className="opacity-80 text-author-role font-avenir-light tracking-wide">{testimonials[activeIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white opacity-100 scale-125' : 'bg-white opacity-40 hover:opacity-60'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
