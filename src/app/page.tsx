import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";

export default function HomePage() {
    return (
        <main className="relative z-10">
            <Navbar />
            <Hero />
            <Services />
            <PortfolioGrid />
            <AboutSection />
            <Skills />
            <ContactSection />
            <Footer />
        </main>
    );
}
