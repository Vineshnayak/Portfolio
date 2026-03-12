"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Shield, Cloud, Cpu, BookOpen, Brain } from "lucide-react";

const certifications = [
    {
        title: "Salesforce Agentforce Specialist",
        issuer: "Salesforce",
        description: "AI agent design, configuration, automation, and deployment.",
        icon: Shield,
        color: "text-blue-400",
        borderColor: "border-blue-400/20",
        bgColor: "bg-blue-400/5",
    },
    {
        title: "Deep Learning & AI",
        issuer: "CodeChef",
        description: "Neural networks and deep learning fundamentals.",
        icon: Brain,
        color: "text-purple-400",
        borderColor: "border-purple-400/20",
        bgColor: "bg-purple-400/5",
    },
    {
        title: "Google Cloud Gen-AI Internship",
        issuer: "Google Cloud",
        description: "Generative AI, cloud ML workflows, and model deployment.",
        icon: Cloud,
        color: "text-cyan-400",
        borderColor: "border-cyan-400/20",
        bgColor: "bg-cyan-400/5",
    },
    {
        title: "Python Essentials 2",
        issuer: "Cisco Networking Academy",
        description: "Advanced Python programming concepts and practices.",
        icon: Cpu,
        color: "text-python-yellow",
        borderColor: "border-python-yellow/20",
        bgColor: "bg-python-yellow/5",
    },
    {
        title: "Networking Basics & Data Science",
        issuer: "Cisco Networking Academy",
        description: "Networking fundamentals and introduction to data science.",
        icon: Cpu,
        color: "text-green-400",
        borderColor: "border-green-400/20",
        bgColor: "bg-green-400/5",
    },
    {
        title: "NIELIT CABA Certification",
        issuer: "NIELIT",
        description: "Computer Applications and Business Accounting.",
        icon: BookOpen,
        color: "text-orange-400",
        borderColor: "border-orange-400/20",
        bgColor: "bg-orange-400/5",
    },
];

const cpProfiles = [
    {
        name: "LeetCode",
        href: "https://leetcode.com/u/Vineshnayak_61/",
        color: "text-yellow-500",
    },
    {
        name: "CodeChef",
        href: "https://www.codechef.com/users/vineshnayak_61",
        color: "text-orange-400",
    },
    {
        name: "HackerRank",
        href: "https://www.hackerrank.com/profile/Vineshnayak_61",
        color: "text-green-400",
    },
];

export default function Certifications() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section
            id="certifications"
            className="py-28 relative overflow-hidden"
            ref={ref}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        Verified{" "}
                        <span className="text-gradient-gold">Credentials</span>
                    </h2>
                </motion.div>

                {/* Competitive Programming */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="glass-card p-8 mb-12 flex flex-col items-center text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-xl font-bold text-white mb-6 font-heading">
                        Competitive Programming Profiles
                    </h3>
                    <div className="flex flex-wrap justify-center gap-5">
                        {cpProfiles.map((cp) => (
                            <a
                                key={cp.name}
                                href={cp.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-6 py-3 text-sm font-mono bg-white/[0.03] border border-white/[0.06] rounded-xl ${cp.color} hover:bg-white/[0.06] transition-all duration-300 hover:scale-105 shadow-[0_4px_10px_rgba(0,0,0,0.1)]`}
                            >
                                {cp.name}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.08,
                            }}
                            className="cert-badge glass-card p-6 group"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`p-3 rounded-xl ${cert.bgColor} border ${cert.borderColor} shrink-0`}
                                >
                                    <cert.icon className={`w-5 h-5 ${cert.color}`} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm group-hover:text-python-yellow transition-colors duration-300">
                                        {cert.title}
                                    </h4>
                                    <p className="text-xs text-python-blue mt-1 font-mono">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
