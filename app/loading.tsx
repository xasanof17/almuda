import { Logo } from "@/assets";
import Image from "next/image";

export default function Loading() {
  return (
    <section className="max-w-screen fixed left-0 top-0 z-50 flex h-full min-h-screen w-full flex-col items-center justify-center bg-white">
      <div className="relative h-12 w-[150px] mb-5">
        <Image
          src={Logo}
          alt="Al-Muda"
          fill
          className="objectContain"
          loading="lazy"
        />
      </div>
      <p className="text-xl font-semibold text-primary">Loading...</p>
    </section>
  );
}
