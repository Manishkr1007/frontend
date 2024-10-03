"use client";
import SubjectSelection from "../components/SubjectSelection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavBar />

      <div className="flex flex-col items-center justify-center flex-1 p-4 md:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 sm:mb-8 animate-fadeIn">
          Dashboard
        </h1>

        {/* Subject Selection Component */}
        <div className="w-full max-w-xl animate-fadeInUp p-6 bg-white shadow-md rounded-lg border border-gray-300">
          <SubjectSelection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
