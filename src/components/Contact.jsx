import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = "service_0u87cun";
        const templateId = "template_675slhw";
        const publicKey = "IQVL8sHRO218k1NrG";

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(() => {
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(to right, #E5E7EB 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-12 md:gap-24">

                    {/* Left Info */}
                    <div className="text-center md:text-left">
                        <h4 className="text-primary font-avenir-heavy font-bold tracking-widest uppercase mb-4 text-[16px] md:text-[14px]">CONTACT</h4>
                        <h2 className="text-[28px] md:text-section-h2 text-secondary mb-8">Let's Work Together</h2>

                        <div className="text-secondary font-avenir-light mb-8 space-y-2 text-[18px]">
                            <p>2nd Floor, Plot no A-41,</p>
                            <p>Sector- 62, Noida 201301</p>
                            <a href="mailto:admin@nexus.com" className="block hover:text-primary transition-colors">
                                admin@nexus.com
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="text-secondary hover:text-primary transition-colors">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Form - Line Inputs */}
                    <div>
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group relative">
                                    <label className="block text-[10px] md:text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide font-avenir-heavy">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        className="w-full py-2 border-b border-gray-400 focus:border-secondary outline-none transition-colors bg-transparent font-avenir-normal text-secondary font-medium"
                                    />
                                </div>
                                <div className="group relative">
                                    <label className="block text-[10px] md:text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide font-avenir-heavy">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        className="w-full py-2 border-b border-gray-400 focus:border-secondary outline-none transition-colors bg-transparent font-avenir-normal text-secondary font-medium"
                                    />
                                </div>
                            </div>

                            <div className="group relative">
                                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide font-avenir-heavy">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full py-2 border-b border-gray-400 focus:border-secondary outline-none transition-colors bg-transparent font-avenir-normal text-secondary font-medium"
                                />
                            </div>

                            <div className="group relative">
                                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide font-avenir-heavy">Leave us a message...</label>
                                <textarea
                                    name="message"
                                    rows="1" // Starts as a line
                                    className="w-full py-2 border-b border-gray-400 focus:border-secondary outline-none transition-colors bg-transparent font-avenir-normal text-secondary font-medium resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full md:w-auto px-12 py-3 bg-[#9E3FFD] text-white rounded-full text-[16px] shadow-lg hover:opacity-90 transition-all mt-8 font-avenir-heavy"
                            >
                                {status === 'sending' ? 'Sending...' : 'Submit'}
                            </button>

                            {status === 'success' && <p className="text-green-600 mt-4">Message sent!</p>}
                            {status === 'error' && <p className="text-red-500 mt-4">Error sending message.</p>}
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full h-80 mt-20 grayscale opacity-80">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6661197946974!2d77.3619553150821!3d28.61479298242484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce561c25a3851%3A0x289729051834164b!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1625641234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;
