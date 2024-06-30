import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex justify-center mb-8">
          <img 
            src="https://s3-alpha-sig.figma.com/img/a1df/00e4/fa4fbf829549b7c93436ce45093f7d32?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3KGVTbii0uf6mQSLOhRVMqDjATI54VWQZtVeJiVfW7s5hzFPnMVx-Xmyax9RiPZ3vqgGW5d1klTxihwn20sb50uc3Z7LcWf7344sHBKdgx9kCgazcGuNrhcwksNBN0JfFnaXHE6BkoDfaUvgPAHTxGdvg4S-zwdCwMUKB3bbu7u3VVGcGD4lUsVmGmQ0xJ3mIPkK25F9LY8pjujEQPewIVohiAL8359qfEuoxVlGOaYXGVaCGDhMD2MMWOZKKjxZPsEjY3M7Rp5aC3cgANHifaxJgEYQfwR-Q3vv3FLek8NeoP7aoGuv8bOfSHCPkq5NisWYb2T9l-ryxciF~nqRQ__" 
            alt="Logo" 
            className="hidden md:block h-8 object-contain"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Consulting</a></li>
              <li><a href="#" className="hover:underline">Sales</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Training</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 space-x-4">
              <a href="#" className="inline-block text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.734 0-1.325.592-1.325 1.325v21.351c0 .733.591 1.324 1.325 1.324h11.478v-9.294h-3.122v-3.622h3.122v-2.667c0-3.066 1.872-4.736 4.606-4.736 1.311 0 2.437.097 2.765.141v3.205l-1.896.001c-1.486 0-1.772.707-1.772 1.742v2.284h3.544l-.462 3.622h-3.082v9.294h6.045c.734 0 1.325-.591 1.325-1.324v-21.35c0-.734-.591-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="inline-block text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12-6.627 0-12-5.373-12-12 0-6.627 5.373-12 12-12zm.002 2.658c-5.148 0-9.334 4.186-9.334 9.335 0 5.148 4.186 9.334 9.334 9.334 5.15 0 9.335-4.186 9.335-9.334 0-5.149-4.185-9.335-9.335-9.335zm0 1.575c4.281 0 7.76 3.48 7.76 7.76 0 4.281-3.479 7.76-7.76 7.76-4.282 0-7.76-3.479-7.76-7.76 0-4.28 3.478-7.76 7.76-7.76zm0 3.634c-2.285 0-4.126 1.841-4.126 4.126s1.841 4.126 4.126 4.126 4.126-1.841 4.126-4.126-1.841-4.126-4.126-4.126zm0 1.575c1.414 0 2.551 1.136 2.551 2.551 0 1.415-1.137 2.552-2.551 2.552-1.415 0-2.552-1.137-2.552-2.552 0-1.415 1.137-2.551 2.552-2.551zm5.222-1.287c-.387 0-.703.315-.703.703 0 .387.315.702.703.702.388 0 .703-.315.703-.702 0-.388-.315-.703-.703-.703z"/>
                </svg>
              </a>
              <a href="#" className="inline-block text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.566-2.005.978-3.127 1.2-.896-.955-2.173-1.55-3.586-1.55-2.715 0-4.917 2.203-4.917 4.917 0 .386.043.762.127 1.124-4.083-.205-7.7-2.161-10.123-5.134-.423.728-.666 1.571-.666 2.475 0 1.708.869 3.214 2.188 4.096-.807-.026-1.566-.247-2.229-.617v.063c0 2.385 1.697 4.374 3.946 4.829-.414.113-.849.174-1.296.174-.317 0-.626-.031-.928-.088.627 1.956 2.445 3.379 4.6 3.418-1.684 1.32-3.809 2.106-6.114 2.106-.397 0-.788-.023-1.175-.067 2.18 1.396 4.768 2.209 7.548 2.209 9.057 0 14.009-7.506 14.009-14.008 0-.213-.004-.426-.014-.637.962-.694 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="inline-block text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0h-20.46c-.974 0-1.77.796-1.77 1.77v20.46c0 .974.796 1.77 1.77 1.77h20.46c.974 0 1.77-.796 1.77-1.77v-20.46c0-.974-.796-1.77-1.77-1.77zm-12.217 20.426h-4.107v-8.876h4.107v8.876zm-2.054-10.172h-.028c-1.38 0-2.276-.948-2.276-2.137 0-1.214.926-2.137 2.334-2.137 1.407 0 2.276.923 2.303 2.137 0 1.189-.896 2.137-2.333 2.137zm12.408 10.172h-4.108v-4.322c0-1.03-.369-1.732-1.292-1.732-.705 0-1.124.474-1.307.934-.067.162-.084.388-.084.615v4.505h-4.108s.038-7.312 0-8.876h4.108v1.256c.393-.606 1.096-1.472 2.662-1.472 1.943 0 3.397 1.267 3.397 3.986v5.106z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
