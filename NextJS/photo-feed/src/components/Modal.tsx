"use client";

import { ReactNode, useState, useEffect, MouseEvent } from "react";
import {useRouter } from "next/navigation";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  // Trigger entrance animation
  useEffect(() => {
    setTimeout(() => setOpen(true), 10);
  }, []);

  const close = () => {
    setOpen(false);
    setTimeout(() => router.back(), 150);
  };

  const onBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <div
      onClick={onBackdropClick}
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black/50 backdrop-blur-sm
        transition-opacity duration-150
        ${open ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Modal Box */}
      <div
        className={`
          bg-white dark:bg-neutral-900 rounded-lg shadow-xl
          w-full max-w-3xl max-h-[90vh] overflow-auto relative pt-12 pr-6 pl-6 pb-6
          transform transition-all duration-150
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="
            absolute top-3 right-3
            text-gray-700 dark:text-gray-300
            hover:text-black hover:font-stretch-50% dark:hover:text-white
            bg-gray-200/60 dark:bg-neutral-700/60
            px-2 py-1 rounded-md text-sm backdrop-blur
            cursor-pointer
          "
        >
          Close
        </button>

        {children}
      </div>
    </div>
  );
}
