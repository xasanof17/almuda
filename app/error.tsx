"use client";
export default function Error() {
  return (
    <section className="max-h-screen max-w-screen w-full h-full bg-white flex flex-col items-center justify-center">
      <h1 className="text-5xl text-black font-bold">
        500! Something went wrong!
      </h1>
      <button className="px-4 py-3 bg-primary text-white text-lg rounded-lg">Home</button>
    </section>
  );
}
