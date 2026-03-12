"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, School, BookOpen } from "lucide-react";
import Image from "next/image";

const educationItems = [
    {
        icon: GraduationCap,
        color: "text-python-yellow",
        glowColor: "shadow-[0_0_15px_rgba(255,212,59,0.3)]",
        bgColor: "bg-python-yellow",
        dotBorder: "border-python-yellow",
        date: "Nov 2022 — July 2026",
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        org: "CMR College of Engineering & Technology",
        location: "Medchal, Hyderabad",
        detail: "CGPA: 8.21",
        detailColor: "text-python-yellow",
        logo: "/cmr.png",
    },
    {
        icon: School,
        color: "text-cyan-400",
        glowColor: "shadow-[0_0_15px_rgba(34,211,238,0.3)]",
        bgColor: "bg-cyan-400",
        dotBorder: "border-cyan-400",
        date: "2019 — 2021",
        title: "Intermediate (MPC)",
        org: "Sri Chaitanya Junior Kalasala",
        location: "Gudimalkapur, Hyderabad",
        detail: "Percentage: 99%",
        detailColor: "text-cyan-400",
        logo: "/chaitanya.png",
    },
    {
        icon: BookOpen,
        color: "text-green-400",
        glowColor: "shadow-[0_0_15px_rgba(74,222,128,0.3)]",
        bgColor: "bg-green-400",
        dotBorder: "border-green-400",
        date: "2018 — 2019",
        title: "SSC",
        org: "Aryabhatta High School",
        location: "Thorrur, Mahabubabad",
        detail: "CGPA: 9.8",
        detailColor: "text-green-400",
        logo: "/acs.png",
    },
];

export default function Experience() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="education" className="py-28 relative overflow-hidden" ref={ref}>
            <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">
                        Education{" "}
                        <span className="text-gradient-python">Journey</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line opacity-30" />

                    <div className="space-y-16">
                        {educationItems.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: idx * 0.2,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 z-10">
                                    <div
                                        className={`w-4 h-4 rounded-full ${item.bgColor} ${item.glowColor} ring-4 ring-black`}
                                    />
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${
                                        idx % 2 === 0 ? "md:text-right" : "md:text-left"
                                    }`}
                                >
                                    <div className="glass-card p-6 group hover:border-white/10 transition-all duration-300 skill-card">
                                        <div
                                            className={`flex items-center gap-3 mb-3 ${
                                                idx % 2 === 0
                                                    ? "md:flex-row-reverse md:justify-start"
                                                    : ""
                                            }`}
                                        >
                                            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                                                <item.icon className={`w-4 h-4 ${item.color}`} />
                                            </div>
                                            <span className="text-xs font-mono text-gray-500">
                                                {item.date}
                                            </span>
                                        </div>

                                        <div className={`flex items-start gap-4 ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                                            <div className="shrink-0 rounded-md bg-white p-1 overflow-hidden h-12 w-12 flex items-center justify-center">
                                                <Image src={item.logo} alt={item.org} width={40} height={40} className="object-contain" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-white group-hover:text-python-yellow transition-colors duration-300 font-heading">
                                                    {item.title}
                                                </h3>
                                                <p className={`text-sm ${item.color} font-mono mt-1`}>
                                                    {item.org}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                                    <span>📍</span> {item.location}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Score Badge */}
                                        <div className="mt-4 pt-3 border-t border-white/[0.06]">
                                            <span
                                                className={`inline-block px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-white/[0.03] border border-white/[0.06] ${item.detailColor}`}
                                            >
                                                {item.detail}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden md:block md:w-[calc(50%-40px)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
