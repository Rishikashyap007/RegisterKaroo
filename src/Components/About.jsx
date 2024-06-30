import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              About <span className="text-orange-500">Register Karo</span>
            </h2>
            <p className="mb-4 text-gray-700">
              We have been using Intelegencia as our DevOps vendor for our field service
              applications over the last couple of years and I'm extremely pleased with
              their performance, ability to execute, and willingness to adapt in our ever-changing
              environment. Perry is an outstanding leader who is fanatical about
              customer satisfaction; he has built a solid team which has consistently delivered
              on projects thereby exceeding everyone's expectations.
            </p>
            <p className="mb-6 text-gray-700">
              I would strongly recommend their services to any organization that is looking for
              solid, reliable, and predictable outcomes.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
              Learn More
            </button>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://s3-alpha-sig.figma.com/img/78f8/096c/dbd2da76442c29194b8d57f4b8a7db2f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P0LnyleO0uPI8sPWru9sOkbIvfbeHrYRJwDuf~Ws5Zoi-Al5U0sz4QlOLFJDkOfr9f3V29QtlwPws4j9EXwCW1a4-8jkSSTRwcspH8YkOXj1ih-RAwc5Rk4EvrTCWz8yv8RxRbbu~4Bm94m2IaBcACoqc~E5xmqLxWV5pefEb45okS-TN~JWQrlGK-ctHOwgkorzSK7aSYyOOwFzmbGhUdP9sgHI~p~rq4P0aTmj-xRkl0JOtjcBkup6~gnTdgRT7qdg3RsP92QT20rdpXzN2jBwAbqwWxN31EcQlcT30YJNbichOJ1KnxVyfTkeVq4HUh09925NvMj9GVBFIIL9~Q__"
              alt="Register Karo Team"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
