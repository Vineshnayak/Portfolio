"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github } from "lucide-react";

const projects = [
    {
        title: "Sentinel Face Secure",
        tech: ["Python", "MobileNetV2", "FastAPI", "MongoDB", "AES-128"],
        description:
            "Built a facial authentication system using MobileNetV2 for efficient feature extraction on edge devices. Implemented multi-modal liveness detection (blink, motion, head movement) to prevent spoofing attacks. Developed FastAPI backend with secure encrypted embeddings storage (AES-128) and MongoDB integration.",
        gradient: "from-python-yellow to-amber-500",
        github: "https://github.com/Vineshnayak/Sentinel-Face-Secure",
        featured: true,
    },
    {
        title: "HygieneVision",
        tech: ["Python", "YOLOv8", "FastAPI", "OpenCV", "MongoDB"],
        description:
            "Built a real-time hygiene monitoring system using YOLOv8 for detecting safety violations. Developed an OpenCV-based inference pipeline with improved detection using spatial analysis techniques. Designed REST APIs with FastAPI and integrated MongoDB for event logging and analytics.",
        gradient: "from-teal-400 to-emerald-500",
        github: "https://github.com/Vineshnayak/HygieneVision",
        featured: false,
    },
    {
        title: "CodeSage",
        tech: ["Python", "RAG", "FAISS", "AST", "LLM"],
        description:
            "Developed a code intelligence system using RAG for natural language querying over large codebases. Implemented FAISS-based vector search and AST-based static analysis for complexity and code quality evaluation. Built LLM-powered modules for bug detection and automated code refactoring with optimized outputs.",
        gradient: "from-purple-500 to-indigo-500",
        github: "https://github.com/Vineshnayak/CodeSage",
        featured: false,
    },
    {
        title: "Fake Logo Detection",
        tech: ["Python", "Tkinter", "OpenCV", "CNN"],
        description:
            "Desktop application to detect counterfeit logos using Convolutional Neural Networks. Pre-processed a custom dataset, trained the model with image augmentation, and built a real-time prediction UI with image overlay.",
        gradient: "from-red-500 to-rose-500",
        github: "https://github.com/Vineshnayak/FakeLogo-Detection",
        featured: false,
    },
    {
        title: "Rainfall Prediction System",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        description:
            "ML project that predicts whether it will rain using historical weather data. Trains classification models on weather features, visualizes data distributions with Matplotlib/Seaborn, and outputs predictions to CSV.",
        gradient: "from-cyan-500 to-blue-500",
        github: "https://github.com/Vineshnayak/Rainfall-Prediction-Model",
        featured: false,
    },
    {
        title: "Flight Delay Prediction",
        tech: ["Python", "TensorFlow", "Pandas", "Plotly", "Scikit-learn"],
        description:
            "ML project that predicts flight arrival delays and visualizes delay behaviour across airports and time periods. Trains a TensorFlow neural network, performs EDA with correlation heatmaps, and supports real-time user-input prediction.",
        gradient: "from-python-blue to-cyan-500",
        github: "https://github.com/Vineshnayak/FlightDelayPrediction",
        featured: false,
    },
    {
        title: "Music Recommendation System",
        tech: ["Python", "Pandas", "NumPy", "Tkinter"],
        description:
            "A Python Tkinter application that recommends songs to users based on popularity calculated from play-count data. Songs are grouped and ranked per user, and the ranked list is displayed in the GUI.",
        gradient: "from-purple-500 to-pink-500",
        github: "https://github.com/Vineshnayak/MusicRecommendationSystem",
        featured: false,
    },
    {
        title: "GymLog",
        tech: ["Python", "Streamlit", "SQLite", "SQL"],
        description:
            "A smart gym management system with Streamlit web UI featuring CRUD for Members, Trainers, Plans, and Sessions. Includes SQLite database with schema, views, triggers, and automated reports.",
        gradient: "from-green-500 to-emerald-500",
        github: "https://github.com/Vineshnayak/GymLog",
        featured: false,
    },
    {
        title: "SpendSphere",
        tech: ["JavaScript", "HTML", "CSS", "Chart.js"],
        description:
            "Responsive expense tracker with add/edit/delete transactions, monthly budgets with progress bars, search filters, LocalStorage persistence, JSON backup, and interactive Chart.js pie and trend charts.",
        gradient: "from-python-yellow to-orange-500",
        github: "https://github.com/Vineshnayak/SpendSphere",
        featured: false,
    },
    {
        title: "E-Ticketing System",
        tech: ["Java", "Swing"],
        description:
            "A desktop application built with Java Swing for booking tickets by entering passenger details and destination. Features input validation, on-screen ticket generation, and form reset functionality.",
        gradient: "from-blue-500 to-indigo-500",
        github: "https://github.com/Vineshnayak/ETicketingSystem",
        featured: false,
    },
];

export default function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-28 relative overflow-hidden" ref={ref}>
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-python-yellow/[0.015] to-transparent pointer-events-none" />
            <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        Featured{" "}
                        <span className="text-gradient-gold">Work</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
                        From ML prediction pipelines to full-stack data systems — here are
                        projects I&apos;ve built using Python and modern technologies.
                    </p>
                </motion.div>

                {/* Featured Project — full width hero card */}
                {featured.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                        className="mb-8"
                    >
                        <div className="relative group cursor-pointer rounded-2xl border border-python-yellow/20 bg-gradient-to-br from-python-yellow/[0.04] via-transparent to-python-blue/[0.04] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-python-yellow/40 hover:shadow-[0_0_60px_rgba(255,212,59,0.08)]">
                            {/* Glow accent */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-python-yellow/10 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Badge + GitHub */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-python-yellow/15 text-python-yellow rounded-full border border-python-yellow/20">
                                            ⭐ Featured Project
                                        </span>
                                        <span className="text-5xl font-heading font-black bg-gradient-to-br from-python-yellow to-amber-500 bg-clip-text text-transparent opacity-20">
                                            01
                                        </span>
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 bg-white/[0.05] border border-white/[0.08] rounded-xl text-gray-400 hover:text-python-yellow hover:border-python-yellow/30 hover:bg-python-yellow/[0.05] transition-all duration-300"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-python-yellow transition-colors duration-300 mb-3 font-heading">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mb-6">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className={`px-3 py-1.5 text-[11px] font-mono rounded-lg border ${
                                                t === "Python"
                                                    ? "bg-python-yellow/10 text-python-yellow border-python-yellow/20"
                                                    : "bg-white/[0.03] text-gray-400 border-white/[0.06]"
                                            }`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Other Projects — grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rest.map((project, idx) => (
                        <ProjectCard key={project.title} project={project} idx={idx} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({
    project,
    idx,
    inView,
}: {
    project: (typeof projects)[number];
    idx: number;
    inView: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: 0.15 + idx * 0.08,
                ease: [0.23, 1, 0.32, 1],
            }}
            className="project-card glass-card p-7 group cursor-pointer flex flex-col"
        >
            {/* Top bar */}
            <div className="flex justify-between items-start mb-4">
                <span
                    className={`text-4xl font-heading font-black bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                >
                    {String(idx + 2).padStart(2, "0")}
                </span>
                {project.github !== "#" && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Github size={15} />
                    </a>
                )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white group-hover:text-python-yellow transition-colors duration-300 mb-2 font-heading">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
            </p>

            {/* Tech Tags */}
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border ${
                            t === "Python"
                                ? "bg-python-yellow/10 text-python-yellow border-python-yellow/20"
                                : "bg-white/[0.03] text-gray-400 border-white/[0.06]"
                        }`}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}


