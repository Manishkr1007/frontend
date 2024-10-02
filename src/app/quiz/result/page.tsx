"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function ResultPage() {
  const { username, score } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">Quiz Completed!</h1>
      <h2 className="text-xl">Username: {decodeURIComponent(Array.isArray(username) ? username[0] : username)}</h2>
      <h2 className="text-xl">Your Score: {score}</h2>
      <a href="/profile" className="mt-4 text-blue-500 underline">View Profile</a>
    </div>
  );
}
