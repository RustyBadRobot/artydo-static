import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BillingExplainer from './components/BillingExplainer';
import OurBrands from './components/OurBrands';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BillingExplainer />
        <OurBrands />
      </main>
      <Footer />
    </div>
  );
};

export default App;