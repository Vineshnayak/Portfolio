"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Brain, Database, Trophy, Rocket } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Python First",
        desc: "Core language for everything — ML pipelines, data systems, desktop apps, and automation.",
        color: "text-python-yellow",
        borderColor: "border-python-yellow/20",
        bgColor: "bg-python-yellow/5",
    },
    {
        icon: Trophy,
        title: "Problem Solving",
        desc: "Strong problem-solving skills, actively and regularly participating in various contests such as CodeChef, LeetCode, etc.",
        color: "text-cyan-400",
        borderColor: "border-cyan-400/20",
        bgColor: "bg-cyan-400/5",
    },
    {
        icon: Rocket,
        title: "Hackathons",
        desc: "Active participant in various hackathons, applying AI/ML principles and Python programming to build practical, data-driven solutions.",
        color: "text-purple-400",
        borderColor: "border-purple-400/20",
        bgColor: "bg-purple-400/5",
    },
];

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        Who I <span className="text-gradient-python">Am</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-3 space-y-6"
                    >
                        <div className="glass-card p-8 h-full flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3">
                                AI/ML Engineer & Python Developer
                            </h3>
                            <p className="text-python-yellow font-mono text-sm mb-8">
                                B.Tech in Artificial Intelligence & Machine Learning

                            </p>

                            <ul className="space-y-4 text-gray-300 leading-relaxed text-[16px]">
                                <li className="flex gap-3 items-start hover:text-white transition-colors duration-300">
                                    <span className="text-python-yellow font-bold mt-0.5">▹</span>
                                    <span>AI/ML undergrad with hands-on experience in CNNs, YOLO, LLMs, real-time inference, and data systems</span>
                                </li>
                                <li className="flex gap-3 items-start hover:text-white transition-colors duration-300">
                                    <span className="text-python-yellow font-bold mt-0.5">▹</span>
                                    <span>Work across the full pipeline — data cleaning to production deployment</span>
                                </li>
                                <li className="flex gap-3 items-start hover:text-white transition-colors duration-300">
                                    <span className="text-python-yellow font-bold mt-0.5">▹</span>
                                    <span>Currently deepening expertise in Python while actively learning AI/ML concepts and advanced SQL for data-driven application development, and contributing to open-source projects on GitHub.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                                className={`glass-card p-5 flex items-start gap-4 group hover:${item.bgColor} transition-all duration-300 cursor-default skill-card`}
                            >
                                <div
                                    className={`p-3 rounded-xl ${item.bgColor} border ${item.borderColor}`}
                                >
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
