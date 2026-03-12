"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled ? "navbar-glass py-3" : "py-5 bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <AnimatePresence>
                            {scrolled && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-python-blue/50 flex flex-shrink-0 items-center justify-center group-hover:scale-110 relative"
                                >
                                    <Image src="/profile.jpg" alt="Vinesh Profile" fill className="object-cover" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <span className="font-heading font-bold text-lg hidden sm:block">
                            <span className="text-white">Jatothu Vinesh</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`nav-link text-sm font-medium tracking-wide ${
                                    activeSection === link.href.replace("#", "")
                                        ? "text-white active"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Resume Button */}
                    <div className="hidden md:block">
                        <a
                            href="mailto:vineshnayak.jatothu@gmail.com"
                            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-python-blue to-python-yellow text-black hover:shadow-[0_0_30px_rgba(55,118,171,0.4)] transition-all duration-300 hover:scale-105"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-8"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-heading font-bold text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
