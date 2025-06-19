'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function HeroSection() {
  const [predictionValue, setPredictionValue] = useState([75]);
  const actualValue = 78;
  const difference = Math.abs(actualValue - predictionValue[0]);
  const accuracy = Math.max(0, 100 - difference * 2);
  const payout = (accuracy / 100) * 1.5 + 0.5;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full glassmorphism"
            >
              <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium text-white/80">
                Precision pays more than luck
              </span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Don't just be </span>
                <span className="gradient-text">right</span>
                <br />
                <span className="text-white">Be </span>
                <span className="gradient-text">precise</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
                The closer your prediction, the bigger your payout. Transform your intelligence 
                into rewards with accuracy-based predictions.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold glow-effect group"
              >
                Start Predicting
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md">
              <div className="glassmorphism rounded-3xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
                  Try it: Predict the stock price
                </h3>
                
                <div className="space-y-8">
                  <div className="text-center">
                    <label className="block text-sm font-medium text-white/80 mb-4">
                      Apple stock will close at:
                    </label>
                    <div className="text-4xl font-bold text-blue-400 mb-6">
                      {predictionValue[0]}%
                    </div>
                    <Slider
                      value={predictionValue}
                      onValueChange={setPredictionValue}
                      max={100}
                      step={1}
                      className="custom-slider"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                      <span className="text-white/60 text-sm">Your Prediction</span>
                      <span className="text-xl font-bold text-blue-400">{predictionValue[0]}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                      <span className="text-white/60 text-sm">Actual Result</span>
                      <span className="text-xl font-bold text-green-400">{actualValue}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                      <span className="text-white/60 text-sm">Your Payout</span>
                      <span className="text-2xl font-bold text-white">{payout.toFixed(2)}x</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm text-white/60 mb-2">
                      Accuracy: {accuracy.toFixed(1)}%
                    </div>
                    <div className="text-xs text-white/40">
                      Distance: {difference} points
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}