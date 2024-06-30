import React from 'react';

const Video = () => {
  return (
    <div className="bg-blue-900 text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold mb-4">Our Video Introductions</h2>
          <p className="mb-6">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt sapien dui.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-orange-500 rounded-full p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Explore ideas together</h3>
                <p className="text-sm text-gray-300">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-500 rounded-full p-2 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Bring those ideas to life</h3>
                <p className="text-sm text-gray-300">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          <img 
            src="https://s3-alpha-sig.figma.com/img/a62c/2d74/6f4256f5f8a9ed25e6891d1db44e4512?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Buxm92Y6mNYmZeFDNeDIl3sIa8rnPEd~TOUt2CHfC~UkZ4nSHJvKqtpBn5bSWxaz97E1ORlxDiyJZbHUns1LgPGhpnTnSPCSTLsxnJqcopjVhYyeZWNxzOdE76UP2KMVmGbHmNU7T-fGA9T2dor2shlPjpYnKGTE6jXWmQ--EZ-pqTOiAZunyJkHZMOLwVI2YkLKaacNr5VvTwMR8Tm3pYFhY9QKO4wdRxIylGgisNK7fBlAAN7oGZjHl4TSJAj4Z760Swt3Fk67V3maPqwe0Q20d1Aw1VYrmp-c2YU49wA4vri49dq~AM3WmmdvwUMKJi0kGrcDb97yvgWGMTqTcw__"
            alt="Video Introduction"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;