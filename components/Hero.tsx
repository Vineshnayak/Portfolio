"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ChevronDown, Terminal } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const pythonSnippets = [
    "import tensorflow as tf",
    "model.fit(X_train, y_train)",
    "cv2.imread('image.jpg')",
    "def predict(data):",
    "    return model(data)",
    "pip install opencv",
    "from sklearn import svm",
    "np.array(features)",
    "plt.show()",
    "class NeuralNet:",
    "torch.nn.Linear()",
    "df.describe()",
    "print('Hello World')",
    "async def fetch():",
    "for epoch in range(100):",
    "loss.backward()",
    "optimizer.step()",
    "from fastapi import FastAPI",
    "model = YOLO('yolov8n.pt')",
    "import faiss",
];

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-8"
        >
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-python-blue/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-python-yellow/10 blur-[150px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[200px] rounded-full" />
            </div>

            {/* Floating Code Rain */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {pythonSnippets.map((snippet, i) => (
                    <div
                        key={i}
                        className="absolute text-python-blue/[0.08] font-mono text-xs whitespace-nowrap animate-float-up"
                        style={{
                            left: `${(i * 6) % 100}%`,
                            animationDuration: `${15 + (i % 10) * 2}s`,
                            animationDelay: `${(i * 1.3) % 15}s`,
                        }}
                    >
                        {snippet}
                    </div>
                ))}
            </div>

            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 pt-24 pb-16 md:py-0">
                {/* Text Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="order-2 lg:order-1 flex flex-col items-start gap-5"
                >


                    <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">
                        Hey, I&apos;m{" "}
                        <br />
                        <span className="text-gradient-python">Vinesh nayak</span>
                    </h1>

                    <div className="h-10 flex items-center">
                        <span className="text-lg sm:text-xl text-gray-400 font-mono">
                            {">>> "}
                        </span>
                        <TypeAnimation
                            sequence={[
                                "AI/ML Engineer",
                                2000,
                                "Python Developer",
                                2000,
                                "Data Systems Builder",
                                2000,
                            ]}
                            wrapper="span"
                            speed={40}
                            className="text-lg sm:text-xl text-white font-mono"
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
                        Building intelligent systems from{" "}
                        <span className="text-python-yellow">data cleaning</span> to{" "}
                        <span className="text-python-blue">production deployment</span>.
                        Focused on CNNs, real-time inference, and modern web tech.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 mt-2">
                        <a
                            href="https://github.com/vineshnayak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:bg-python-blue/20 hover:border-python-blue/30 hover:text-python-yellow transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(55,118,171,0.2)]"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/vineshnayak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:bg-python-blue/20 hover:border-python-blue/30 hover:text-python-yellow transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(55,118,171,0.2)]"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:vineshnayak.jatothu@gmail.com"
                            className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:bg-python-blue/20 hover:border-python-blue/30 hover:text-python-yellow transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(55,118,171,0.2)]"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 bg-gradient-to-r from-python-blue to-python-yellow text-black font-bold rounded-xl shadow-[0_0_30px_rgba(55,118,171,0.3)] hover:shadow-[0_0_50px_rgba(55,118,171,0.5)] transition-shadow duration-300"
                        >
                            Explore My Work
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 bg-white/[0.03] border border-white/[0.1] text-white font-bold rounded-xl hover:bg-white/[0.06] transition-all duration-300"
                        >
                            About Me
                        </motion.a>
                        <motion.a
                            href="/Vinesh-Fresher(AI & ML).pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 bg-python-yellow/10 border border-python-yellow/30 text-python-yellow font-bold rounded-xl hover:bg-python-yellow/20 transition-all duration-300"
                        >
                            View Resume
                        </motion.a>
                    </div>
                </motion.div>

                {/* Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="order-1 lg:order-2 flex justify-center relative"
                >
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[350px] lg:h-[350px]">
                        {/* Outer Glow Ring */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-python-blue/20 to-python-yellow/20 blur-xl animate-pulse-glow" />

                        {/* Spinning Ring */}
                        <div className="absolute -inset-2 border border-python-blue/20 rounded-full animate-spin-slow" />
                        <div className="absolute -inset-6 border border-python-yellow/10 rounded-full animate-reverse-spin" />

                        {/* Profile Image */}
                        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                            <Image
                                src="/profile.jpg"
                                alt="Vinesh nayak — Python Developer & AI/ML Engineer"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Orbiting Decorations - rendered after image so they appear on top */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="animate-orbit">
                                <div className="w-3 h-3 rounded-full bg-python-yellow shadow-[0_0_10px_rgba(255,212,59,0.5)]" />
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="animate-orbit-reverse">
                                <div className="w-2 h-2 rounded-full bg-python-blue shadow-[0_0_10px_rgba(55,118,171,0.5)]" />
                            </div>
                        </div>

                        {/* Bottom Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-2 whitespace-nowrap"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs font-mono text-gray-300">
                                Open to opportunities
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500"
            >
                <span className="text-xs font-mono tracking-wider">scroll</span>
                <ChevronDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
}
