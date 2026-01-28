import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-8 text-center border-t border-gray-100">
            <p className="text-xs text-gray-500 font-avenir-light">
                © {new Date().getFullYear()} by Nexus. Powered and secured by Nexus.
            </p>
        </footer>
    );
};

export default Footer;
