'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AccuracySection from '@/components/AccuracySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import JoinBetaSection from '@/components/JoinBetaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <AccuracySection />
      <TestimonialsSection />
      <FAQSection />
      <JoinBetaSection />
      <Footer />
    </main>
  );
}