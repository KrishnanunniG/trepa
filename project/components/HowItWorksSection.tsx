'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MousePointer, DollarSign, Trophy, ArrowRight } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [demoValue, setDemoValue] = useState([50]);

  const steps = [
    {
      icon: MousePointer,
      title: "Slide",
      description: "Set your prediction using our intuitive slider interface",
      detail: "No complex forms or confusing interfaces. Just slide to your prediction value."
    },
    {
      icon: DollarSign,
      title: "Stake",
      description: "Choose your stake amount and confirm your prediction",
      detail: "Flexible staking options from $1 to $10,000. Your potential payout scales with accuracy."
    },
    {
      icon: Trophy,
      title: "Show Off",
      description: "Watch your precision pay off with accuracy-based rewards",
      detail: "The closer you are to the actual result, the higher your multiplier and bragging rights."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Three simple steps to turn your market insights into rewards
          </p>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-3xl mx-auto glassmorphism rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
              Live Demo: Bitcoin Price Prediction
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-white/80">Your Prediction</span>
                  <span className="font-bold text-blue-400">${demoValue[0]}k</span>
                </div>
                <Slider
                  value={demoValue}
                  onValueChange={setDemoValue}
                  max={100}
                  step={1}
                  className="custom-slider"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-sm text-white/60 mb-1">Current Price</div>
                  <div className="text-xl font-bold text-white">$67k</div>
                </div>
                
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-sm text-white/60 mb-1">Your Stake</div>
                  <div className="text-xl font-bold text-green-400">$100</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                  <div className="text-sm text-white/60 mb-1">Potential Payout</div>
                  <div className="text-xl font-bold text-white">
                    ${Math.round(100 * (1 + Math.max(0, (100 - Math.abs(67 - demoValue[0])) / 100) * 2.5))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="relative group"
            >
              <div className="glassmorphism rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 group-hover:glow-effect">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {step.title}
                </h3>
                
                <p className="text-white/80 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <p className="text-white/60 text-sm">
                  {step.detail}
                </p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-blue-400/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white/70 mb-6">
            Ready to put your predictions to the test?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg glow-effect transition-all duration-200 hover:scale-105">
            Start Your First Prediction
          </button>
        </motion.div>
      </div>
    </section>
  );
}