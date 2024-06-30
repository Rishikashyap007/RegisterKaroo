import React, { useState } from 'react';

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/a1df/00e4/fa4fbf829549b7c93436ce45093f7d32?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3KGVTbii0uf6mQSLOhRVMqDjATI54VWQZtVeJiVfW7s5hzFPnMVx-Xmyax9RiPZ3vqgGW5d1klTxihwn20sb50uc3Z7LcWf7344sHBKdgx9kCgazcGuNrhcwksNBN0JfFnaXHE6BkoDfaUvgPAHTxGdvg4S-zwdCwMUKB3bbu7u3VVGcGD4lUsVmGmQ0xJ3mIPkK25F9LY8pjujEQPewIVohiAL8359qfEuoxVlGOaYXGVaCGDhMD2MMWOZKKjxZPsEjY3M7Rp5aC3cgANHifaxJgEYQfwR-Q3vv3FLek8NeoP7aoGuv8bOfSHCPkq5NisWYb2T9l-ryxciF~nqRQ__"
            alt="Logo"
            className="  h-8 object-contain"
          />
          {/* <span className="text-xl font-bold text-blue-800">Register<span className="text-orange-500">Karo</span></span> */}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-sm md:text-base lg:text-lg text-gray-700 hover:text-blue-800">Home</a>
          <div className="relative group">
            <a href="#" className="text-sm md:text-base lg:text-lg text-gray-700 hover:text-blue-800">Our Services</a>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</a>
            </div>
          </div>
          <a href="#" className="text-sm md:text-base lg:text-lg text-gray-700 hover:text-blue-800">Blog</a>
          <a href="#" className="text-sm md:text-base lg:text-lg text-gray-700 hover:text-blue-800">Contact Us</a>
          <a href="#" className="text-sm md:text-base lg:text-lg text-gray-700 hover:text-blue-800">About us</a>
        </div>

        {/* Search and Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-800"><i className="fas fa-search"></i></a>
          <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 text-xl">Talk An Expert</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none focus:text-blue-800"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg py-4 px-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} duration-300 ease-in-out`}>
        <a href="#" className="block text-sm text-gray-700 hover:text-blue-800 py-2">Home</a>
        <div className="relative">
          <a href="#" className="block text-sm text-gray-700 hover:text-blue-800 py-2">Our Services</a>
          {/* Dropdown */}
          <div className="bg-white shadow-lg py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</a>
          </div>
        </div>
        <a href="#" className="block text-sm text-gray-700 hover:text-blue-800 py-2">Blog</a>
        <a href="#" className="block text-sm text-gray-700 hover:text-blue-800 py-2">Contact Us</a>
        <a href="#" className="block text-sm text-gray-700 hover:text-blue-800 py-2">About us</a>
        <a href="#" className="block bg-orange-500 text-white py-2 px-4 rounded-md text-center hover:bg-orange-600 mt-4">Talk An Expert</a>
      </div>
    </nav>
  );
};

export default MainNavbar;
