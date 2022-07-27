import React from "react";

const Subcribe = () => {
  return (
    <div className="py-12 bg-fadebrown px-3 md:px-16 items-center">
      <div className="max-w-6xl mx-auto  ">
        <h1 className="mb-2 text-lg md:text-2xl font-bold">
          Subscribe to newsletter
        </h1>
        <div className="   flex flex-col md:flex-row gap-5">
          <div className="w-full">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="shadow-sm bg-white   md:py-4 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-none focus:outline-none block w-full p-2.5"
              required
            />
          </div>
          <button className="min-w-64 md:w-64 bg-gold w-full text-white py-2 rounded-full hover:bg-white hover:text-gold hover:border-2 hover:border-gold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
