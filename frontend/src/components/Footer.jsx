import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Tagline */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Better Together</h2>
            <p className="text-gray-400">Empowering Minds, Together.</p>
          </div>
            
          {/* Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Our Services</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-white">Disclaimer</a></li>
            </ul>
          </div>

          {/* Address  */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">Better Together Wellness Pvt Ltd</h3>
            <ul className="space-y-2">
              <li>MG Road, 62/63 The Pavilion, Church Street, Bengaluru, KA 560001</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-sm text-center md:text-left">© {new Date().getFullYear()} Better Together. All rights reserved.</p>
          <p className="text-xs text-center md:text-right mt-4 md:mt-0">Disclaimer: This is still in development.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
