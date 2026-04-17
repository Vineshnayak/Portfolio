"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Code2,
    Globe,
    Brain,
    Wrench,
    Database,
    Terminal,
} from "lucide-react";

const skillGroups = [
    {
        category: "Languages",
        icon: Code2,
        color: "from-python-blue to-blue-400",
        accentColor: "text-python-blue",
        borderHover: "hover:border-python-blue/30",
        items: [
            { name: "Python", highlight: true },
            { name: "Java" },
            { name: "C/C++" },
            { name: "JavaScript" },
            { name: "SQL" },
        ],
    },
    {
        category: "AI / ML",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        accentColor: "text-purple-400",
        borderHover: "hover:border-purple-400/30",
        items: [
            { name: "Machine Learning" },
            { name: "CNNs" },
            { name: "OpenCV" },
            { name: "Scikit-learn" },
            { name: "MobileNetV2" },
            { name: "YOLOv8" },
            { name: "LLM / RAG" },
        ],
    },
    {
        category: "Web Dev",
        icon: Globe,
        color: "from-cyan-400 to-blue-500",
        accentColor: "text-cyan-400",
        borderHover: "hover:border-cyan-400/30",
        items: [
            { name: "HTML/CSS" },
            { name: "JavaScript" },
            { name: "Vite" },
        ],
    },
    {
        category: "Frameworks",
        icon: Terminal,
        color: "from-green-400 to-emerald-500",
        accentColor: "text-green-400",
        borderHover: "hover:border-green-400/30",
        items: [
            { name: "FastAPI", highlight: true },
            { name: "Streamlit" },
            { name: "Tkinter" },
        ],
    },
    {
        category: "Databases",
        icon: Database,
        color: "from-orange-400 to-amber-500",
        accentColor: "text-orange-400",
        borderHover: "hover:border-orange-400/30",
        items: [
            { name: "SQL" },
            { name: "MongoDB", highlight: true },
            { name: "FAISS" },
        ],
    },
    {
        category: "Tools & Design",
        icon: Wrench,
        color: "from-python-yellow to-amber-400",
        accentColor: "text-python-yellow",
        borderHover: "hover:border-python-yellow/30",
        items: [
            { name: "Git & GitHub" },
            { name: "Antigravity" },
            { name: "VS Code" },
            { name: "Jupyter" },
            { name: "Figma" },
            { name: "Canva" },
        ],
    },
];

export default function Skills() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <section id="skills" className="py-28 relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-python-blue/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        Technical{" "}
                        <span className="text-gradient-python">Arsenal</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
                        Used across face authentication, logo detection, ML prediction
                        pipelines, data management systems, and more.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillGroups.map((group, gIdx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: gIdx * 0.08,
                            }}
                            className={`glass-card p-6 skill-card ${group.borderHover} mt-4`}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className={`p-2.5 rounded-xl bg-gradient-to-br ${group.color} bg-opacity-10`}
                                >
                                    <group.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white font-heading">
                                    {group.category}
                                </h3>
                            </div>

                            {/* Skills — tag style */}
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-300 hover:scale-105 cursor-default ${skill.highlight
                                            ? "bg-python-yellow/10 text-python-yellow border-python-yellow/20 font-semibold"
                                            : "bg-white/[0.03] text-gray-300 border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                                            }`}
                                    >
                                        {skill.name}
                                        {skill.highlight && (
                                            <span className="ml-1.5 text-[9px] px-1.5 py-0.5 bg-python-yellow/15 text-python-yellow rounded-full border border-python-yellow/20 uppercase tracking-wider font-bold">
                                                Primary
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
