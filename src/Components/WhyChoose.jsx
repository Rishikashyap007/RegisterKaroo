import React from 'react';

const features = [
  {
    icon: '🛡️',
    title: 'Confidential & Safe',
    description: 'All your private information is safe with us',
    bgColor: 'bg-red-100',
  },
  {
    icon: '✅',
    title: 'No Hidden Fee',
    description: 'Everything is put before you with no hidden charges or conditions',
    bgColor: 'bg-green-100',
  },
  {
    icon: '😊',
    title: 'Guaranteed Satisfaction',
    description: 'We ensure that you stay 100% satisfied with our offered services',
    bgColor: 'bg-blue-100',
  },
  {
    icon: '👨‍💼',
    title: 'Expert CA/CS Assistance',
    description: 'Prompt support from our in-house expert professionals',
    bgColor: 'bg-pink-100',
  },
  {
    icon: '🛡️',
    title: 'Confidential & Safe',
    description: 'All your private information is safe with us',
    bgColor: 'bg-red-100',
  },
];

const FeatureCard = ({ icon, title, description, bgColor }) => (
  <div className={`p-6 rounded-lg ${bgColor} shadow-md hover:shadow-lg transition-shadow`}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const WhyChoose = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-orange-500 font-semibold mb-2">WHY REGISTERKARO.IN</div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Register Karo</h2>
          <p className="text-gray-600">
            It is with consistent services and results that build trust with the people and that in
            turn help us to serve the business better.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
