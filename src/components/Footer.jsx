import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (

     <div>
          <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto  py-12 grid gap-10 md:grid-cols-3 ">
        
        {/* Brand */}
        <div className='max-md:mx-2'>
          <h2 className="text-2xl font-bold text-yellow-400">
            Poono Bazar
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Your trusted online marketplace for fresh groceries and daily
            essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div className='max-md:mx-2'>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/allproduct" className="hover:text-yellow-400">
                Products
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              
                About Us
          
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='max-md:mx-2'>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1234 567 890</li>
            <li>✉️ support@poonobazar.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © new 2026 Poono Bazar. All rights reserved.
      </div>
    </footer>
    </div>

  );
};

export default Footer;