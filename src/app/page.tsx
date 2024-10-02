// src/app/page.tsx
import React from 'react';
import NavBar from './components/NavBar';
import Link from 'next/link';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex flex-grow items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-5xl font-bold mb-4 text-teal-500">Welcome to Quiz App</h1>
          <p className="text-xl mb-6">
            Test your knowledge and learn new things with our engaging quizzes!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/login">
              <button className="bg-teal-500 text-white p-3 rounded hover:bg-teal-600 transition duration-300">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-teal-500 text-white p-3 rounded hover:bg-teal-600 transition duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
