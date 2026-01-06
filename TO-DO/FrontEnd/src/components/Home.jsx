import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[60vh] bg-gray-100 py-14 px-4">
      <div className="mx-auto max-w-4xl">
        <main className="rounded-[15px] bg-[#f4eded] shadow-sm shadow-gray-600 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements (theme unchanged) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-100/40 opacity-30 animate-ping"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-100/30 opacity-25 animate-bounce"
          />

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">
              Stay Organized
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Daily To-Do List
            </h2>

            <p className="mt-3 text-gray-700 max-w-xl mx-auto">
              Plan your tasks, track progress, and stay productive every day.
            </p>
          </div>

          <section className="bg-white rounded-lg shadow p-6 mb-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Plan Your Day with Clarity
            </h3>

            <p className="text-gray-700 max-w-2xl mx-auto mb-4">
              Create tasks, set priorities, and manage your daily goals
              efficiently — all in one simple and distraction-free to-do
              workspace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="border rounded-md p-4">
                <h4 className="font-semibold text-gray-800 mb-1">Add Tasks</h4>
                <p className="text-sm text-gray-600">
                  Quickly note down what needs to be done.
                </p>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-semibold text-gray-800 mb-1">
                  Set Priorities
                </h4>
                <p className="text-sm text-gray-600">
                  Focus on what matters the most today.
                </p>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-semibold text-gray-800 mb-1">
                  Track Progress
                </h4>
                <p className="text-sm text-gray-600">
                  Stay motivated by completing tasks step by step.
                </p>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow">
              <Link to={localStorage.getItem("login") ? "/addTask" : "/login"}>
                Add New Task
              </Link>
            </button>

            <button className="bg-transparent border border-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-50">
              <Link to={localStorage.getItem("login") ? "/list" : "/login"}>
                View All Tasks
              </Link>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
