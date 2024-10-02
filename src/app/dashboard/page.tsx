"use client";
import SubjectSelection from "../components/SubjectSelection";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <SubjectSelection />
    </div>
  );
}
