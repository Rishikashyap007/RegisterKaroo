import React, { useState } from 'react';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "Our return policy allows returns within 30 days of purchase. Products must be in their original condition and packaging to be eligible for a refund."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, we will send you an email with the tracking number and a link to track your package."
  },
  {
    question: "Can I change or cancel my order?",
    answer: "You can change or cancel your order within 24 hours of placing it. Please contact our customer service team as soon as possible to make any changes."
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mt-10 max-w-5xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
