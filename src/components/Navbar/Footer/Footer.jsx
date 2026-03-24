import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-base-200 pt-16 pb-8 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
                    
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold italic">
                            FA<span className="text-primary">HIM</span>
                        </h2>
                        <p className="text-base-content/70 max-w-xs">
                            Building digital experiences with passion and precision. Let's create something amazing together.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://github.com/faizullahalfahim" className="w-10 h-10 flex items-center justify-center rounded-full bg-base-300 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/faizullahalfahim20" className="w-10 h-10 flex items-center justify-center rounded-full bg-base-300 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
                                <FaLinkedin size={20} />
                            </a>
                           
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:justify-self-center">
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
                            <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:justify-self-end">
                        <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                        <p className="text-sm text-base-content/60 mb-4">Subscribe to get my latest updates.</p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="input input-bordered rounded-r-none w-full focus:outline-none focus:border-primary" 
                            />
                            <button className="btn btn-primary rounded-l-none">Join</button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-base-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm opacity-60">
                        © {new Date().getFullYear()} <span className="font-bold">Fahim</span>. All rights reserved.
                    </p>
                    
                    {/* Scroll to Top Button */}
                    <button 
                        onClick={scrollToTop}
                        className="btn btn-circle btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20 animate-bounce"
                    >
                        <FaArrowUp />
                    </button>

                    <div className="flex gap-6 text-sm opacity-60">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;