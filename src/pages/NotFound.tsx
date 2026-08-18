import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import SEO from '../Component/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found - Amrit Electricals" 
        description="The page you are looking for does not exist." 
      />
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary-blue to-primary-orange mb-6">
            404
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for seems to have gone missing or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-blue hover:bg-blue-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
