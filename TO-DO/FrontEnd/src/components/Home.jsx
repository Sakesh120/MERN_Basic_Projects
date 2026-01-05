import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[60vh] bg-gray-100 py-14 px-4">
      <div className="mx-auto max-w-4xl">
        <main className="rounded-[15px] bg-[#f4eded] shadow-sm shadow-gray-600 p-8 md:p-12 text-center relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-100/40 opacity-30 animate-ping"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-100/30 opacity-25 animate-bounce"
          />

          <p className="text-sm uppercase tracking-widest text-gray-600 mb-3">
            Keep the momentum
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Study Smarter, Not Harder
          </h2>

          <h3 className="mx-auto max-w-2xl text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            <span className="inline-block transform transition-transform duration-700 hover:scale-105">
              Focus. Learn. Deliver.
            </span>
          </h3>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>Set clear outcomes — break study sessions into tiny wins.</p>
            <p>Review and revise; repetition builds mastery.</p>
            <p>Balance work and rest; productivity follows recovery.</p>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-md shadow">
              <Link to="/signup">Get Started</Link>
            </button>
            <button className="bg-transparent border border-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-50">
              Learn Tips
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
