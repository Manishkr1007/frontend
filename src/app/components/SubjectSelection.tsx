"use client";
import { useRouter } from 'next/navigation';

// const subjects = ["Math", "Science", "History"];
const subjects = ["Physic","Comming Soon ...","Comming Soon ..."];

export default function SubjectSelection() {
  const router = useRouter();

  const handleSubjectClick = (subject: string) => {
    router.push(`/quiz/${subject.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <h1 className="text-4xl font-bold mb-6 text-white text-center animate-fadeIn">
        Choose a Subject
      </h1>
      {/* Container with border and padding */}
      <div className="border-4 border-white rounded-lg p-6 bg-white shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject}
              onClick={() => handleSubjectClick(subject)}
              className={`rounded-lg p-4 cursor-pointer transition duration-300 
                transform hover:scale-105 
                hover:shadow-xl flex flex-col items-center justify-center 
                bg-${subject === "Math" ? "yellow-200" : subject === "Physics" ? "blue-200" : subject === "Chemistry" ? "green-200" : "pink-200"}
                border-2 border-transparent hover:border-blue-400`}  // Added border and hover effect
            >
              <h2 className="text-2xl font-semibold text-center text-gray-800">{subject}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
