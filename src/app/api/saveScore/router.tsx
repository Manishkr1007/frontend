import { NextResponse } from "next/server";

const usersScores: { [key: string]: number[] } = {}; // In-memory store for scores (use a database in production)

export async function POST(request: Request) {
  const { username, score } = await request.json();

  if (!username || score === undefined) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  if (!usersScores[username]) {
    usersScores[username] = [];
  }

  usersScores[username].push(score); // Save the score
  console.log(usersScores);

  return NextResponse.json({ success: true });
}