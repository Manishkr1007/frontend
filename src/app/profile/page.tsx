"use client";
import React from "react";
import { useRouter } from "next/navigation";

const usersScores: { [key: string]: number[] } = {}; // In-memory store for scores (use a database in production)

export default function ProfilePage() {
  const router = useRouter();
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");

  if (!username) {
    return <div>Please provide a username.</div>;
  }

  const scores = usersScores[username] || [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">Profile Page</h1>
      <h2 className="text-xl">Username: {username}</h2>
      <h2 className="text-xl">Scores:</h2>
      console.log(scores);
      console.log(username);
      <ul>
        {scores.length > 0 ? scores.map((score, index) => (
          <li key={index} className="text-lg">Score: {score}</li>
        )) : (
          <li>No scores available.</li>
        )}
      </ul>
      <button onClick={() => router.push("/")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Back to Quiz
      </button>
    </div>
  );
}
