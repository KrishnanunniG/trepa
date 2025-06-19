'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does accuracy-based payout work?",
      answer: "Your payout is determined by how close your prediction is to the actual outcome. The closer you are, the higher your multiplier. For example, if you predict a stock will close at 78% and it closes at 78%, you get the maximum payout. If you predict 75% and it closes at 78%, you get a lower but still profitable payout."
    },
    {
      question: "What happens if I'm completely wrong?",
      answer: "Even if your prediction is off, you won't lose everything. Our algorithm ensures that participants get some return based on their accuracy level. Only predictions that are extremely far off (beyond our threshold) result in total loss, encouraging thoughtful predictions over random guesses."
    },
    {
      question: "How are the actual results determined?",
      answer: "We use reliable, third-party data sources for all market outcomes. Stock prices come from major exchanges, sports data from official sources, and economic indicators from government agencies. All data sources are transparent and verifiable."
    },
    {
      question: "Is this gambling or skill-based?",
      answer: "Trepa is fundamentally skill-based. Unlike traditional gambling where outcomes are purely random, your success depends on market knowledge, research, and analytical skills. The accuracy-based payout system rewards expertise over luck."
    },
    {
      question: "What markets can I predict on?",
      answer: "We offer predictions on stocks, crypto, sports, economic indicators, and more. New markets are added regularly based on user demand. Each market has different prediction windows and payout structures optimized for that asset class."
    },
    {
      question: "How do I withdraw my winnings?",
      answer: "Withdrawals are processed instantly once markets close and results are confirmed. You can withdraw to your bank account, digital wallet, or reinvest in new predictions. There are no withdrawal fees for amounts over $50."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glassmorphism mb-6">
            <HelpCircle className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium text-white/80">Got questions?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          
          <p className="text-xl text-white/70">
            Everything you need to know about precision predictions
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="glassmorphism rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-blue-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-4">
            Still have questions?
          </p>
          <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200">
            Contact our support team →
          </button>
        </motion.div>
      </div>
    </section>
  );
}