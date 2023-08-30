"use client";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <section className="max-w-screen flex h-full max-h-screen w-full flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-black">
        500! Something went wrong!
      </h1>
      <button
        type="button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="rounded-lg bg-primary px-4 py-3 text-lg text-white"
      >
        Try Again
      </button>
    </section>
  );
}
