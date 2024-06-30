import React from 'react';

const testimonials = [
  {
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    imageUrl: "https://via.placeholder.com/100",
    rating: 4.5,
  },
  {
    name: "Christan",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    imageUrl: "https://via.placeholder.com/100",
    rating: 4.5,
  },
  {
    name: "Chrisban",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    imageUrl: "https://via.placeholder.com/100",
    rating: 4.5,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          What people say about us
        </h2>
      </div>
      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-yellow-500 flex justify-center">
              {[...Array(5)].map((star, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.493h4.725c.969 0 1.371 1.24.588 1.81l-3.822 2.771 1.462 4.493c.3.921-.755 1.688-1.538 1.11l-3.822-2.771-3.822 2.771c-.782.577-1.838-.189-1.538-1.11l1.462-4.493-3.822-2.771c-.782-.57-.38-1.81.588-1.81h4.725l1.462-4.493z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-gray-600">{testimonial.text}</p>
            <div className="mt-4 flex items-center">
              <img className="h-10 w-10 rounded-full" src={testimonial.imageUrl} alt={testimonial.name} />
              <div className="ml-4">
                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
