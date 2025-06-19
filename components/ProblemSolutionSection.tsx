'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check, Target, Zap } from 'lucide-react';

export default function ProblemSolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Beyond </span>
            <span className="gradient-text">Binary Betting</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Traditional prediction markets reward you the same whether you're barely right or spot-on. 
            We believe precision should pay more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Traditional Way */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-500/20 rounded-full">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Traditional Markets</h3>
            </div>

            <div className="glassmorphism rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                <span className="text-white/80">Stock closes at 95%</span>
                <span className="text-red-400 font-bold">2x payout</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                <span className="text-white/80">Stock closes at 51%</span>
                <span className="text-red-400 font-bold">2x payout</span>
              </div>
              <div className="text-center text-white/60 text-sm mt-4">
                Same reward for wildly different accuracy levels
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <X className="w-5 h-5 text-red-400" />
                <span>Binary outcomes only</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <X className="w-5 h-5 text-red-400" />
                <span>No precision rewards</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <X className="w-5 h-5 text-red-400" />
                <span>Luck beats skill</span>
              </div>
            </div>
          </motion.div>

          {/* Trepa Way */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">The Trepa Way</h3>
            </div>

            <div className="glassmorphism rounded-2xl p-6 space-y-4 border border-blue-500/30">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl">
                <span className="text-white">Predict: 78% | Actual: 78%</span>
                <span className="text-green-400 font-bold">3.5x payout</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-500/10 rounded-xl">
                <span className="text-white/80">Predict: 65% | Actual: 78%</span>
                <span className="text-blue-400 font-bold">1.2x payout</span>
              </div>
              <div className="text-center text-blue-400 text-sm mt-4 font-medium">
                Higher accuracy = Higher rewards
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white">
                <Check className="w-5 h-5 text-green-400" />
                <span>Continuous accuracy rewards</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Check className="w-5 h-5 text-green-400" />
                <span>Precision pays premium</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Check className="w-5 h-5 text-green-400" />
                <span>Intelligence over luck</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 glassmorphism rounded-2xl p-6 border border-blue-500/30">
            <Zap className="w-8 h-8 text-yellow-400" />
            <div className="text-left">
              <div className="text-3xl font-bold gradient-text">5x Higher</div>
              <div className="text-white/70">Maximum payouts for perfect predictions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}