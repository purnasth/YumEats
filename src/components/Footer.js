import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const author = "Purna Shrestha";
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center mb-8">
          <div>
            <a
              href="#"
              className="text-gray-300 hover:text-white hover:underline mr-4"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white hover:underline mx-4"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white hover:underline mx-4"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white hover:underline mx-4"
            >
              Contact
            </a>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="mr-4 text-gray-300 hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="mr-4 text-gray-300 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between items-center mb-8">
          <h4 className="text-gray-300 font-bold text-lg mb-2">
            Subscribe to Our Newsletter
          </h4>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white px-4 py-2 mb-2 md:mb-0 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-700 text-white px-6 py-2 hover:bg-orange-600 border-none rounded-none focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center border-t border-white border-dotted pt-4">
          <p className="text-sm text-center">
            &copy; {currentYear}{" "}
            <a
              href="https://www.purnashrestha.com.np/"
              target="_blank"
              className="text-gray-300"
            >
              {" "}
              Yum Eats{" "}
              <span className="font-bold">
                {" | "}
                <span
                  className="hover:underline text-xl"
                  style={{
                    fontFamily: "Cedarville Cursive",
                    cursive: "Cedarville Cursive",
                  }}
                >
                  {author}
                </span>{" "}
                {" | "}{" "}
              </span>
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
