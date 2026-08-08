import React, { useEffect } from 'react';
import SEO from '../Component/SEO';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Privacy Policy - Amrit Electricals" />
      <div className="py-10 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Amrit Electricals. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. The Data We Collect About You</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at info@amritelectricals.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
