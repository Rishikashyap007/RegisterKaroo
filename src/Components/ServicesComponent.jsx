import React from 'react';

const services = [
  {
    title: 'Company Formation',
    description: 'Build web-based solutions that enhance customer experience.',
    icon: '🏢',
  },
  {
    title: 'Company Secretarial Services',
    description: 'Make data-driven decisions and utilize technology to reach business goals.',
    icon: '📊',
  },
  {
    title: 'Virtual Office Address',
    description: 'Foster customer relationships by effectively serving your market.',
    icon: '🏠',
  },
  {
    title: 'Annual Compliance Services',
    description: 'Turn your ideas into modern products with our design experts.',
    icon: '📅',
  },
  {
    title: 'Payroll Services',
    description: 'Expand your business across the globe with minimal effort.',
    icon: '💼',
  },
  {
    title: 'Bookkeeping Services',
    description: 'Steering user behaviours with creative design, data insights & technology.',
    icon: '📚',
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
    <div className="text-4xl mb-4 text-orange-500">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <button className="text-sm text-blue-600 hover:underline focus:outline-none">Learn more</button>
  </div>
);

const ServicesComponent = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            See All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
