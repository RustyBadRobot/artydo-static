import React from 'react';
import { CreditCard, ShieldCheck, HelpCircle, FileText } from 'lucide-react';

const BillingExplainer: React.FC = () => {
  return (
    <section id="billing" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-4 text-blue-600">
            <CreditCard size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Why is "Artydo" on my bank statement?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            If you see a charge from <strong>Artydo</strong> or <strong>Artydo Inc.</strong>, it is likely for a subscription to one of our creative portfolio websites. We centralize billing to ensure bank-level security for all our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Processing</h3>
            <p className="text-slate-600">
              We process payments centrally to maintain the highest standards of data encryption and PCI compliance across all our platforms.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Unified Billing</h3>
            <p className="text-slate-600">
              Your subscription might be for <em>SketchDaily</em>, <em>PalettePro</em>, or <em>SculptHub</em>. All these services are managed by Artydo.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6">
              <HelpCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Need Help?</h3>
            <p className="text-slate-600">
              Don't recognize a charge? We are here to help clarify or refund unintended purchases. Please contact our support team.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl shadow-blue-900/10">
            <h3 className="text-2xl font-bold mb-4">Still unsure about a charge?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Our support team typically responds within 24 hours. We can look up your transaction ID and tell you exactly which service was purchased.
            </p>
            <a href="mailto:support@artydo.com" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors">
                Contact Billing Support
            </a>
        </div>
      </div>
    </section>
  );
};

export default BillingExplainer;