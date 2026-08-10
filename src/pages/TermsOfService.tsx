import React, { useEffect } from 'react';
import SEO from '../Component/SEO';

export const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Terms of Service - Amrit Electricals" />
      <div className="py-10 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Scope</h2>
              <p>
                Amrit Electricals provides electrical and solar installation, repair, and maintenance services. All services provided are subject to individual contracts, quotations, and specific terms agreed upon in writing between Amrit Electricals and the client.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Quotations and Pricing</h2>
              <p>
                Any quotations provided on our website are estimates. Final pricing will be determined after a proper site inspection and evaluation by our certified technicians. Prices are subject to change based on material costs and scope variations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Warranties and Guarantees</h2>
              <p>
                We stand behind our work. Specific warranties for solar panels and electrical parts are provided by their respective manufacturers. Amrit Electricals provides a service warranty for installation work, details of which will be included in your final service contract.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall Amrit Electricals or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Amrit Electricals's website or services rendered.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Information</h2>
              <p>
                For any questions regarding these terms, please contact us at info@amritelectricals.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
