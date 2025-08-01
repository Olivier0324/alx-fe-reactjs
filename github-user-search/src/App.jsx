// src/App.jsx
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          GitHub User Search
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <input
            type="text"
            placeholder="Search GitHub username..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          {/* Search results will go here later */}
        </div>
      </div>
    </div>
  );
};

export default App;
