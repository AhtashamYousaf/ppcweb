"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import HowItWorks from "@/components/HowItWorks";
import LeadModels from "@/components/LeadModels";
import Comparison from "@/components/Comparison";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-slate-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <HowItWorks />
        <LeadModels />
        <Comparison />
        <Industries />
        <Features />
        <Stats />
        <Testimonials />
        <CaseStudies />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
