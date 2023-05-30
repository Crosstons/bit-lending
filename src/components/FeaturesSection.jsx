import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    number: 1,
    title: 'Secure and Reliable',
    text: 'Our platform utilizes advanced cryptographic techniques to ensure the utmost security for your digital assets.'
  },
  {
    number: 2,
    title: 'Instant Loans',
    text: 'Leverage the power of blockchain technology to get instant loans. No more waiting for approvals or paperwork.'
  },
  {
    number: 3,
    title: 'Earn Passive Income',
    text: 'Earn passive income by lending your cryptocurrencies. Set your own terms and enjoy high returns.'
  }
];

function FeaturesSection() {
  return (
    <section className="bg-background text-primary py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="border border-primary rounded p-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-background mb-5">
                {feature.number}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
