import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    
    <section className="bg-background text-primary text-center py-20 px-10">
      <h1 className="text-5xl font-semibold mb-4">Open Source Liquidity Protocol</h1>
      <p className="text-2xl mb-10">Interest rate protocol for decentralized lending and borrowing</p>
      <div className="flex justify-center space-x-4">
      <Link to="/dashboard" className="mt-10 inline-block bg-primary text-background px-8 py-4 rounded-full font-bold text-xl transition-colors duration-200 hover:bg-accent">
        Enter App
      </Link>
        <a href="/docs" className="px-8 py-3 rounded bg-secondary text-background hover:bg-primary hover:text-background  transition-colors duration-200">Docs</a>
      </div>
    </section>
  );
}

export default HeroSection;
