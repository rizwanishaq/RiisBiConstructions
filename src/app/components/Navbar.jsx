'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Name */}
        <Link href="/" passHref>
          <span className="text-xl font-bold cursor-pointer">RiisBiConstructions</span>
        </Link>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-6">
          <li>
            <Link href="#about" passHref>
              <span className="hover:text-yellow-400 cursor-pointer">About Us</span>
            </Link>
          </li>
          <li>
            <Link href="#services" passHref>
              <span className="hover:text-yellow-400 cursor-pointer">Services</span>
            </Link>
          </li>
          <li>
            <Link href="#portfolio" passHref>
              <span className="hover:text-yellow-400 cursor-pointer">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="#testimonials" passHref>
              <span className="hover:text-yellow-400 cursor-pointer">Testimonials</span>
            </Link>
          </li>
          <li>
            <Link href="#contact" passHref>
              <span className="hover:text-yellow-400 cursor-pointer">Contact Us</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 w-full bg-gray-900 border-t border-gray-700`}>
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <Link href="#about" passHref>
                <span className="block py-2 px-4 hover:text-yellow-400 cursor-pointer">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="#services" passHref>
                <span className="block py-2 px-4 hover:text-yellow-400 cursor-pointer">Services</span>
              </Link>
            </li>
            <li>
              <Link href="#portfolio" passHref>
                <span className="block py-2 px-4 hover:text-yellow-400 cursor-pointer">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link href="#testimonials" passHref>
                <span className="block py-2 px-4 hover:text-yellow-400 cursor-pointer">Testimonials</span>
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <span className="block py-2 px-4 hover:text-yellow-400 cursor-pointer">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
