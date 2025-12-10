"use client";

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Counter() {
    const {isLoaded, userId, sessionId, getToken} = useAuth();
    // const {isLoaded, isSignedIn, user} = useUser();
  const [count, setCount] = useState(0);
  if(!isLoaded || !userId){
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-md bg-white/10">
      <h2 className="text-2xl font-semibold">Counter: {count}</h2>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          - Decrease
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          + Increase
        </button>
      </div>
    </div>
  );
}
