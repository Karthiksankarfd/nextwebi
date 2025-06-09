import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (

  <section className='w-full bg-gray-900'>
    <footer className="max-w-[1380px] w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6  text-white text-sm" role="contentinfo">
      
      {/* Company Info */}
      <div>
        <h2 className="text-lg font-semibold mb-2">RentNest</h2>
        <p className="text-gray-400">
          Your trusted partner in finding affordable, reliable rental properties in Bangalore.
        </p>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-md font-semibold mb-2">Contact Us</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            Bengaluru, Karnataka 560100
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400" />
            <a href="tel:+91025765897" className="hover:underline">+91 0257-658-97</a>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            <a href="mailto:support@rakrentals.com" className="hover:underline">support@rakrentals.com</a>
          </li>
          <li className="flex items-center gap-2">
            <FaHeadset className="text-blue-400" />
            24/7 Customer Support
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-md font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1 text-gray-400">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="" className="hover:underline">Rentals</a></li>
          <li><a href="" className="hover:underline">Blogs</a></li>
          <li><a href="" className="hover:underline">About Us</a></li>
          <li><a href="" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-md font-semibold mb-2">Follow Us</h3>
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500"><FaFacebook /></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-400"><FaInstagram /></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-300"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-600"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  </section>

  );
};

export default Footer;
