import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-50 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
            <Logo showTagline={true} className="scale-125 origin-bottom" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          The Home of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Creative Innovation</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
          Artydo is the parent company for a family of leading art education and subscription platforms. 
          We handle the technology and billing so our brands can focus on inspiring your creativity.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#billing" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
          >
            Recognize a charge?
          </a>
          <a 
            href="#brands" 
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            View Our Brands
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;