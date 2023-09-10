import { Logo } from "@/assets";
import Image from "next/image";

export default function CareersLoading() {
  return (
    <section className="max-w-screen fixed left-0 top-0 z-50 flex h-full min-h-screen w-full flex-col items-center justify-center overflow-x-hidden overflow-y-scroll bg-white">
      <div className="relative mb-5 h-12 w-[150px]">
        <Image
          src={Logo}
          alt="Al-Muda"
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-lg font-semibold text-primary md:text-xl">
        Careers page is loading...
      </p>
    </section>
  );
}
