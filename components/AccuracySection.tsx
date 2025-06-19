'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Target, Zap, TrendingUp } from 'lucide-react';

export default function AccuracySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedValues, setAnimatedValues] = useState({
    accuracy95: 0,
    accuracy75: 0,
    accuracy50: 0
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedValues({
          accuracy95: 95,
          accuracy75: 75,
          accuracy50: 50
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const examples = [
    {
      accuracy: 95,
      prediction: "₿ $72k",
      actual: "₿ $71.5k",
      payout: "4.2x",
      color: "from-green-400 to-emerald-500"
    },
    {
      accuracy: 75,
      prediction: "📈 Tesla +12%",
      actual: "📈 Tesla +8%",
      payout: "2.8x",
      color: "from-blue-400 to-cyan-500"
    },
    {
      accuracy: 50,
      prediction: "🏠 Rate 6.5%",
      actual: "🏠 Rate 7.2%",
      payout: "1.1x",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism mb-6">
            <Brain className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm font-medium text-white/80">Your IQ pays off</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why </span>
            <span className="gradient-text">Accuracy</span>
            <span className="text-white"> Matters</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See how precision translates to profits. The difference between good and great predictions 
            can mean exponentially higher rewards.
          </p>
        </motion.div>

        {/* Accuracy Examples */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="glassmorphism rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-white">
                  {example.accuracy}% Accurate
                </div>
                <Target className="w-6 h-6 text-blue-400" />
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Your Prediction</span>
                  <span className="text-white font-medium">{example.prediction}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Actual Result</span>
                  <span className="text-white font-medium">{example.actual}</span>
                </div>
              </div>

              {/* Accuracy Bar */}
              <div className="mb-4">
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${example.accuracy}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                    className={`h-full bg-gradient-to-r ${example.color} rounded-full`}
                  />
                </div>
              </div>

              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${example.color} bg-clip-text text-transparent`}>
                  {example.payout}
                </div>
                <div className="text-white/60 text-sm">Payout Multiplier</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="glassmorphism rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Exponential Rewards</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Unlike traditional betting where you either win or lose, our accuracy-based system rewards 
              every level of precision. A 95% accurate prediction can pay 4x more than a 75% accurate one.
            </p>
          </div>

          <div className="glassmorphism rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Skill Over Luck</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Your market knowledge, research skills, and analytical thinking directly translate to higher 
              payouts. The more precise you are, the more you earn.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 glassmorphism rounded-2xl p-8 border border-blue-500/30">
            <div className="text-left">
              <div className="text-2xl font-bold gradient-text mb-2">Ready to show your precision?</div>
              <div className="text-white/70">Join thousands earning more through accuracy</div>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold glow-effect transition-all duration-200 hover:scale-105 whitespace-nowrap">
              Start Predicting
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}