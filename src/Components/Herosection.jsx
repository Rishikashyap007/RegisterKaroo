import React from 'react';
// import heroImage from './path-to-your-image.png'; // Update with your image path

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-12 px-4 lg:px-8">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full">
          <div className="text-yellow-500 flex items-center space-x-1 mb-2">
            <i className="fas fa-star"></i>
            <span>Google Rating</span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Your trusted partner <br />
            for compliance business needs
          </h1>
          <p className="text-gray-600 mb-6">
            An online business compliance platform that helps entrepreneurs and other individuals with various,
            <span className="text-blue-500 font-semibold"> registrations, tax filings,</span> and other legal matters.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mb-6 space-y-2 lg:space-y-0">
            <div className="flex items-center space-x-1">
              <i className="fas fa-star text-yellow-500"></i>
              <span className="text-gray-800 font-semibold">4.5+</span>
              <span className="text-gray-500">Customer Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-user text-blue-500"></i>
              <span className="text-gray-800 font-semibold">200,000+</span>
              <span className="text-gray-500">Clients</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-check-circle text-green-500"></i>
              <span className="text-gray-800 font-semibold">99.8%</span>
              <span className="text-gray-500">Financial Stability</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Talk to an Expert
            </button>
            <button className="flex items-center text-blue-600 py-2 px-4 rounded border border-blue-600 hover:bg-blue-50 transition duration-300">
              <i className="fas fa-play mr-2"></i> See how it works
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="lg:w-1/2 w-full lg:pl-12 mb-12 lg:mb-0">
          <img src="https://img.freepik.com/free-vector/experts-concept-illustration_114360-451.jpg" alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
