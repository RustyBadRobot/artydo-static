import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4 tracking-tight">
               <span className="text-teal-400">arty</span>
               <span className="text-blue-400">do</span>
            </div>
            <p className="max-w-sm mb-4">
              Empowering Creative Ventures. Artydo provides the infrastructure and security for the next generation of art technology platforms.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@artydo.com" className="hover:text-white transition-colors">support@artydo.com</a>
              </li>
              <li>
                <span className="block">123 Creative Avenue</span>
                <span className="block">San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Artydo Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Secure payments processed via Stripe & PayPal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;