import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-amber-600">404</h1>
      <p className="text-2xl mt-4 text-gray-700">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 border-amber-600 text-amber-600 text-lg hover:border-1 transition :0.3s ease-in-out rounded-lg"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
