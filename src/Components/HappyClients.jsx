import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HappyClients = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Happy Clients</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Professionally cultivate one-to-one customer service with robust ideas.
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Font Awesome icons */}
          <FontAwesomeIcon icon={faFacebook} className="text-4xl text-blue-600 transform hover:scale-110 transition-transform duration-300" />
          <FontAwesomeIcon icon={faLinkedin} className="text-4xl text-blue-700 transform hover:scale-110 transition-transform duration-300" />
          <FontAwesomeIcon icon={faInstagram} className="text-4xl text-pink-500 transform hover:scale-110 transition-transform duration-300" />
          <FontAwesomeIcon icon={faTwitter} className="text-4xl text-blue-400 transform hover:scale-110 transition-transform duration-300" />
          
        </div>
        <div className="mt-6 text-center">
          <button className="text-indigo-600 hover:text-indigo-900">
            Show more →
          </button>
        </div>
      </div>
      <div className="mt-12 bg-orange-400 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-white text-3xl">📄</div>
            <p className="text-white">Fill up Application Form</p>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-white text-3xl">💳</div>
            <p className="text-white">Make Online Payment</p>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-white text-3xl">🧑‍💼</div>
            <p className="text-white">Executive Access Application</p>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-white text-3xl">📧</div>
            <p className="text-white">Get Confirm Mail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
