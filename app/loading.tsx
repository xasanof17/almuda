"use client";
import { Logo } from "@/assets";
import Image from "next/image";

export default function Loading() {
  return (
    <section className="min-h-screen w-screen flex flex-col">
      <div className="relative w-[150px] h-12">
        <Image src={Logo} alt="Al-Muda" fill />
      </div>
      <p>Loading...</p>
    </section>
  );
}
