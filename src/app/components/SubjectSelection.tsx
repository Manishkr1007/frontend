"use client";
import { useRouter } from 'next/navigation';

const subjects = ["Math", "Science", "History"];

export default function SubjectSelection() {
  const router = useRouter();

  const handleSubjectClick = (subject: string) => {
    router.push(`/quiz/${subject.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Choose a Subject</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subjects.map((subject) => (
          <div
            key={subject}
            onClick={() => handleSubjectClick(subject)}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-blue-100 transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-center">{subject}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
