"use client"
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemComparison } from "@/components/ProblemComparison";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <ProblemComparison />
                <FeaturesShowcase />
                <Pricing />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
