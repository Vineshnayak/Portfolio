"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/vineshnayak",
        color: "hover:text-white hover:border-white/20",
        label: "@vineshnayak",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com/in/vineshnayak",
        color: "hover:text-blue-400 hover:border-blue-400/20",
        label: "Vinesh Nayak",
    },
    {
        name: "YouTube",
        icon: Youtube,
        href: "https://www.youtube.com/@Vinesh_nayak",
        color: "hover:text-red-500 hover:border-red-500/20",
        label: "@Vinesh_nayak",
    },
    {
        name: "Email",
        icon: Mail,
        href: "mailto:vineshnayak.jatothu@gmail.com",
        color: "hover:text-python-yellow hover:border-python-yellow/20",
        label: "vineshnayak.jatothu@gmail.com",
    },
];

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="contact" className="py-28 relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-python-blue/10 blur-[200px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-python-yellow/5 blur-[200px] rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        Profiles &{" "}
                        <span className="text-gradient-python">Contact</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm">
                        Open to jobs, internships, collaborations, and conversations related to AI/ML and Python development.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target={social.name !== "Email" ? "_blank" : undefined}
                                rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                                className={`glass-card flex flex-col items-center justify-center gap-4 w-36 h-36 group transition-all duration-300 ${social.color} hover:-translate-y-2 hover:shadow-lg`}
                            >
                                <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <social.icon className="w-8 h-8" />
                                </div>
                                <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                                    {social.name}
                                </span>
                            </motion.a>
                        ))}

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
