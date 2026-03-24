import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaAward } from 'react-icons/fa';

const About = () => {
    

    return (
        <section id="about" className="py-20 bg-base-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="text-primary font-medium tracking-widest uppercase mb-2">Get To Know</p>
                    <h2 className="text-4xl md:text-5xl font-bold">About <span className="text-primary">Me</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left: Image Area */}
                    <motion.div 
                        className="lg:col-span-5 flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                            
                            {/* Image Container */}
                            <div className="relative w-72 h-96 md:w-80 md:h-[450px] overflow-hidden rounded-2xl bg-base-200 shadow-2xl">
                                <img 
                                    src="https://i.ibb.co/skpShwq/profile-1-1.jpg" 
                                    alt="About Fahim" 
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content Area */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                       
                        {/* Bio Text */}
                        <div className="space-y-4 text-lg leading-relaxed text-base-content/80">
                            <p>
                                Hello! I'm <span className="text-primary font-semibold">Fahim</span>, a passionate Full Stack Developer who loves turning complex problems into simple, beautiful, and intuitive designs. 
                            </p>
                            <p>
                                My journey in web development started with a curiosity for how things work on the internet. Since then, I've mastered modern technologies like <span className="font-medium text-base-content">React, Next.js, Node.js, and MongoDB</span> to build scalable applications.
                            </p>
                            <p>
                                I don't just write code; I build solutions that provide value to users and help businesses grow. When I'm not coding, you'll probably find me exploring new tech trends or improving my problem-solving skills.
                            </p>
                        </div>
                        {/* Achievements / Certificates Grid */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
    {[
       
        { icon: <FaCode />, label: "Full Stack Development", value: "Certified" },
        { icon: <FaAward />, label: "Professional Courses", value: "2+ Completed" }
    ].map((item, index) => (
        <motion.div 
            key={index}
            className="p-4 rounded-2xl bg-base-200 border border-base-300 hover:border-primary transition-colors text-center"
            whileHover={{ y: -5 }}
        >
            <div className="text-primary text-2xl mb-2 flex justify-center">{item.icon}</div>
            <h4 className="font-bold text-sm">{item.label}</h4>
            <p className="text-xs text-base-content/60">{item.value}</p>
        </motion.div>
    ))}
</div>

                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;