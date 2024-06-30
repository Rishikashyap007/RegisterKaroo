import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 flex py-3 flex-wrap justify-between md:justify-end items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm md:text-base lg:text-lg">
            <i className="far fa-envelope"></i> www.registerkaro.in
          </span>
          <span className="hidden sm:inline text-sm md:text-base lg:text-lg">
            <i className="fas fa-phone-alt"></i> +918447746183
          </span>
        </div>
        <div className="flex space-x-2 gap-2 ml-auto md:ml-4">
          <a href="#" className="text-sm md:text-base lg:text-lg"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-sm md:text-base lg:text-lg"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-sm md:text-base lg:text-lg"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-sm md:text-base lg:text-lg"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
