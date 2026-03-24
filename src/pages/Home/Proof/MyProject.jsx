import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MyProject = () => {
  const projects = [

  {
  title: "Natural Food BD",
  description:
    "একটি ফুল-স্ট্যাক ই-কমার্স প্ল্যাটফর্ম যা খাঁটি এবং প্রাকৃতিক খাদ্যদ্রব্য বিক্রয়ের জন্য তৈরি। এতে রয়েছে ডাইনামিক প্রোডাক্ট ম্যানেজমেন্ট, রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং, কাস্টমার অর্ডার সিস্টেম এবং অ্যাডমিন ড্যাশবোর্ড। প্রজেক্টটিতে সিকিউরিটির জন্য Helmet, Rate Limiting এবং Zod validation ব্যবহার করা হয়েছে।",
  tech: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase Admin",
    "Tailwind CSS",
    "TanStack Query"
  ],
  image: "https://i.ibb.co/TVTnPhp/Screenshot-2026-03-15-at-5-29-44-AM.png", // এখানে আপনার প্রজেক্টের স্ক্রিনশট লিংক দিন
  live: "https://naturalfoodbd.store/",
 
}
    ,
    {
      title: "Digital Life Lessons",
      description:
        "Digital Life Lessons is a guide to living smart and balanced in the digital age—covering technology skills, online safety, productivity, career growth, mental well-being, social media awareness, and real-life skills to help you succeed digitally without losing control of your life.",
      tech: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind",
      ],
      image:
        "https://i.ibb.co/zhbfqsy2/Screenshot-2026-01-05-at-12-41-59-AM.png",
      live: "https://digitallifelessons.netlify.app/",
      github:
        "https://github.com/faizullahalfahim/-digital-life-lessons-client.git",
    },
    {
      title: "AI Inventory Manager 🚀",
      description:
        "I've just completed building a full-stack AI Model Inventory Management System! As AI models become more complex, managing them shouldn't be. This platform is designed to provide developers with a seamless experience to organize and track their machine learning assets.",
      tech: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind",
      ],
      image:
        "https://i.ibb.co/gbmXPNLy/Screenshot-2026-01-05-at-12-44-57-AM.png",
      live: "https://aiinventorymaneger.netlify.app",
      github: "https://github.com/faizullahalfahim/inventory-manager-client",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-2">
            My Recent Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold italic">
            Latest <span className="text-primary">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-base-200 rounded-3xl overflow-hidden border border-base-300 hover:border-primary/50 transition-all duration-500 shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn btn-circle btn-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="btn btn-circle btn-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-bold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                  {project.description}
                </p>

                <div className="flex justify-between items-center border-t border-base-300 pt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-xs font-bold flex items-center gap-2 hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    Live Demo <FaExternalLinkAlt size={10} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-xs font-bold flex items-center gap-2 hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    Code <FaGithub size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Footer/CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 opacity-60 italic text-lg">
            Interested in seeing more?
          </p>
          <a
            href="https://github.com/faizullahalfahim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary px-10 rounded-full shadow-lg shadow-primary/20">
              Check My GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
