'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Shield, Zap, Users } from 'lucide-react';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Quantitative Analyst",
      content: "Finally, a platform that rewards precision over luck. My analytical skills actually matter here.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Sarah Martinez",
      role: "Day Trader",
      content: "The accuracy-based payouts are game-changing. I've 3x'd my returns compared to traditional betting.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Michael Thompson",
      role: "Financial Advisor",
      content: "Trepa turns market knowledge into real rewards. It's like being paid for being right, not just lucky.",
      rating: 5,
      avatar: "MT"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Bank-grade security with transparent payout algorithms"
    },
    {
      icon: Zap,
      title: "Instant Settlements",
      description: "Get paid immediately when markets close"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "Join 50k+ precision predictors worldwide"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Precision Predictors</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See what our community of intelligent predictors has to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="glassmorphism rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glassmorphism rounded-2xl p-8 border border-blue-500/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50k+</div>
                <div className="text-white/70 text-sm">Active Predictors</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">$2.3M</div>
                <div className="text-white/70 text-sm">Payouts Distributed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">94%</div>
                <div className="text-white/70 text-sm">User Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-white/70 text-sm">Markets Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}