"use client";

import { ReactNode } from "react";

export default function ReloadOnClick({ children }: { children: ReactNode }) {
  return (
    <div
      onClick={() => window.location.reload()}
      className="relative cursor-pointer group"
    >
      {/* Hover Overlay */}
      <div
        className="
          z-20
          inset-0
          absolute
          opacity-0
          group-hover:opacity-100
          flex items-center justify-center
          transition-opacity
          rounded-lg
          hover:opacity-100
          
        "
      >
        <span className="text-red-300 text-lg font-semibold">
          See the full view
        </span>
      </div>

      {/* Actual content */}
      {children}
    </div>
  );
}
