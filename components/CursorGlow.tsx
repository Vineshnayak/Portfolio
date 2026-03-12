"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function CursorGlow() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    return (
        <>
            {/* Cursor Glow */}
            <div
                className="fixed pointer-events-none z-[100] transition-opacity duration-300 hidden lg:block"
                style={{
                    left: mousePos.x - 200,
                    top: mousePos.y - 200,
                    width: 400,
                    height: 400,
                    background:
                        "radial-gradient(circle, rgba(55,118,171,0.06) 0%, transparent 70%)",
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
                style={{
                    scaleX,
                    background: "linear-gradient(90deg, #3776AB, #FFD43B)",
                }}
            />
        </>
    );
}
