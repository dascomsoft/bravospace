



'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const scrollToSection = (e) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">Bravospace</span>
          <span className="text-2xl font-bold text-gray-800">294</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.label}
            </Link>
          ))}
          {/* <a
            href="tel:+1234567890"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaPhoneAlt className="inline mr-2" /> Call Us
          </a> */}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white px-4 py-3 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.label}
            </Link>
          ))}
          {/* <a
            href="tel:+1234567890"
            className="text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaPhoneAlt className="inline mr-2" /> Call Us
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
