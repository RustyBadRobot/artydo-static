import React from 'react';
import { ExternalLink, Palette, PenTool, Box } from 'lucide-react';

interface BrandCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ name, description, icon, colorClass }) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-300">
    <div className={`w-14 h-14 rounded-xl ${colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
    <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-500 transition-colors">
      <span>Visit Website</span>
      <ExternalLink size={16} className="ml-2" />
    </div>
  </div>
);

const OurBrands: React.FC = () => {
  const brands = [
    {
      name: "SketchMasters",
      description: "Daily sketching prompts and tutorials for aspiring illustrators.",
      icon: <PenTool size={28} className="text-white" />,
      colorClass: "bg-orange-400",
    },
    {
      name: "ChromaClub",
      description: "Premium watercolor and oil painting video workshops.",
      icon: <Palette size={28} className="text-white" />,
      colorClass: "bg-rose-400",
    },
    {
      name: "SculptBox",
      description: "Monthly 3D modeling assets and clay sculpting kits delivered to your door.",
      icon: <Box size={28} className="text-white" />,
      colorClass: "bg-emerald-400",
    },
  ];

  return (
    <section id="brands" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Family of Brands</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Artydo powers the backend for these beloved creative communities. If you subscribe to any of these, your payment is processed by Artydo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <BrandCard key={index} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;