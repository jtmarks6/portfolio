"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;
    const lowercasePath = pathname.toLowerCase();

    if (pathname !== lowercasePath) {
      window.location.replace(lowercasePath + search + hash);
      return;
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-6">Page not found</p>
        <a
          href="/"
          className="text-blue-400 hover:text-blue-300 underline text-lg"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
