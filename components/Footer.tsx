"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative py-12 overflow-hidden">
            {/* Top Divider */}
            <div className="section-divider mb-12" />

            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-python-blue to-python-yellow flex items-center justify-center font-mono font-bold text-black text-xs">
                            JV
                        </div>
                        <div>
                            <p className="text-sm font-heading font-bold text-white">
                                Jatothu Vinesh
                            </p>
                            <p className="text-xs text-gray-500 font-mono">
                                Python Developer & AI/ML Engineer
                            </p>
                        </div>
                    </div>

                    {/* Center - Built With */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs text-gray-600 flex items-center gap-1"
                    >
                        Built with{" "}
                        <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />{" "}
                        using Next.js & Tailwind CSS
                    </motion.p>

                    {/* Right - Year */}
                    <p className="text-xs text-gray-600 font-mono">
                        © {new Date().getFullYear()} Jatothu Vinesh
                    </p>
                </div>
            </div>
        </footer>
    );
}
