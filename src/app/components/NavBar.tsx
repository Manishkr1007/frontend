// src/app/components/NavBar.tsx
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  // Logout function (replace with your actual logout logic)
  const handleLogout = () => {
    // Clear user session or token
    console.log("User logged out");
    // Redirect to login page or home
    window.location.href = "/login"; // Change to your desired redirect path
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-teal-500">Quiz App</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-teal-500">Home</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-teal-500">Contact</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-teal-500">About Us</Link>
          </li>
          <li>
            <button 
              onClick={handleLogout} 
              className="text-gray-700 hover:text-teal-500"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
