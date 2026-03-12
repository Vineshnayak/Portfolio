import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <CursorGlow />
            <Navbar />
            <Hero />

            <div className="section-divider" />
            <About />

            <div className="section-divider" />
            <Skills />

            <div className="section-divider" />
            <Projects />

            <div className="section-divider" />
            <Certifications />

            <div className="section-divider" />
            <Experience />

            <div className="section-divider" />
            <Contact />

            <Footer />
        </main>
    );
}
