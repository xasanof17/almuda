"use client";
import { Logo } from "@/assets";
import { Waveform } from "@uiball/loaders";
import Image from "next/image";

export default function Loading() {
  return (
    <section className="max-w-screen fixed left-0 top-0 z-50 flex h-full min-h-screen w-full flex-col items-center justify-center bg-white">
      <div className="relative h-12 w-[150px] pb-5">
        <Image src={Logo} alt="Al-Muda" fill />
      </div>
      <div className="my-5">
        <Waveform color="#10a0e8" size={50} />
      </div>
      <p className="text-xl font-semibold text-primary">Loading...</p>
    </section>
  );
}
