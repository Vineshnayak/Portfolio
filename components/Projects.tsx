"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github } from "lucide-react";

const projects = [
    {
        title: "Sentinel Face Secure",
        tech: ["Python", "FastAPI", "PyTorch", "MongoDB", "OpenCV"],
        description:
            "A secure facial authentication system using lightweight CNN architectures (MobileNetV2) and YOLO-Nano for real-time identity verification. Features multi-modal liveness detection, RBAC, encrypted vector embedding storage, and AES-128 encryption to prevent spoofing attacks.",
        gradient: "from-python-yellow to-amber-500",
        github: "https://github.com/Vineshnayak/Sentinel-Face-Secure",
        featured: true,
    },
    {
        title: "HygieneVision",
        tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Streamlit"],
        description:
            "A real-time computer vision monitoring system for hygiene compliance detection. Uses YOLOv8 and Haar Cascades for detecting hair caps and gloves. Features a Streamlit dashboard, FastAPI REST API integration, and MongoDB event logging with debounce logic.",
        gradient: "from-teal-400 to-emerald-500",
        github: "https://github.com/Vineshnayak/HygieneVision",
        featured: false,
    },
    {
        title: "CodeSage",
        tech: ["Python", "RAG", "FAISS", "AST", "Groq API"],
        description:
            "A local codebase intelligence platform combining Retrieval-Augmented Generation (RAG), AST analysis, vector embeddings, and dependency graph traversal. Features semantic codebase querying, automated bug detection, AI refactoring suggestions, and real-time filesystem monitoring.",
        gradient: "from-purple-500 to-indigo-500",
        github: "https://github.com/Vineshnayak/CodeSage",
        featured: false,
    },
    {
        title: "Fake Logo Detection",
        tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Tkinter"],
        description:
            "A desktop-based image classification application that detects fake and original logos using Convolutional Neural Networks and OpenCV. Includes a Tkinter GUI for real-time image prediction, dataset preprocessing, and confusion matrix reporting.",
        gradient: "from-red-500 to-rose-500",
        github: "https://github.com/Vineshnayak/FakeLogo-Detection",
        featured: false,
    },
    {
        title: "Rainfall Prediction Model",
        tech: ["Python", "Streamlit", "Scikit-learn", "SHAP", "OpenWeather API"],
        description:
            "A machine learning web application built with Streamlit for predicting rainfall, flood risks, and agricultural suitability. Integrates historical and live weather data via OpenWeather API, featuring SHAP-based Explainable AI (XAI) for feature importance visualization.",
        gradient: "from-cyan-500 to-blue-500",
        github: "https://github.com/Vineshnayak/Rainfall-Prediction-Model",
        featured: false,
    },
    {
        title: "Music Recommendation System",
        tech: ["Python", "Scikit-Learn", "NLTK", "Pandas", "NLP"],
        description:
            "A content-based recommendation engine leveraging NLP techniques to analyze lyrics, song titles, and artist information. Uses TF-IDF vectorization and Cosine similarity matching to process the Spotify Million Song Dataset and recommend similar tracks.",
        gradient: "from-purple-500 to-pink-500",
        github: "https://github.com/Vineshnayak/MusicRecommendationSystem",
        featured: false,
    },
    {
        title: "GymLog",
        tech: ["Python", "Streamlit", "SQLite"],
        description:
            "A Streamlit-based gym management application featuring complete CRUD operations and SQLite integration. Tracks members, trainers, plans, and sessions while providing automated reports, session history, and popular plan analytics.",
        gradient: "from-green-500 to-emerald-500",
        github: "https://github.com/Vineshnayak/GymLog",
        featured: false,
    },
    {
        title: "SpendSphere",
        tech: ["Python", "FastAPI", "MongoDB", "WebSockets", "Vanilla JS"],
        description:
            "A collaborative expense tracking system supporting both personal and group management. Built with FastAPI and MongoDB, it features JWT authentication, real-time synchronization using WebSockets, budget tracking, and interactive spending analytics.",
        gradient: "from-python-yellow to-orange-500",
        github: "https://github.com/Vineshnayak/SpendSphere",
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
                        From computer vision and RAG systems to web applications and CI/CD pipelines — here are the projects I&apos;ve built using Python and modern technologies.
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


