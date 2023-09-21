import { CEO, CEOlg, Quote } from "@/assets/img";
import Image from "next/image";

export const AboutCEO = () => {
  return (
    <div className="my-20 grid gap-10 lg:grid-cols-3">
      <div className="flex items-center justify-start lg:col-span-1">
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            src={CEOlg}
            alt="CEO of Almuda"
            fill
            className="rounded-3xl bg-top object-contain sm:object-cover lg:object-contain"
          />
        </div>
        <div className="relative block h-[400px] w-[400px] md:hidden">
          <Image
            src={CEO}
            alt="CEO of Almuda"
            fill
            className="rounded-3xl bg-top object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col justify-center px-4 sm:px-0 lg:col-span-2">
        <Image src={Quote} alt="Quote Icon" width={24} height={24} priority />
        <p className="text-muted my-4 text-left text-[17px] leading-6 tracking-wide sm:text-lg sm:leading-8">
          The healthcare industry has never been so advanced, and yet there are
          still so many patients who don&apos;t receive the right care at the
          right time. Infermedica thrives in the face of this global challenge
          by focusing on leading-edge technology to create patient-oriented
          solutions, including reliable symptom assessment, which significantly
          improves patient flow and enhances patient satisfaction.
        </p>
        <h3
          title="Oisha Rakhimova"
          className="text-xl font-bold tracking-wide text-secondary sm:text-2xl sm:leading-9"
        >
          Oisha Rakhimova
        </h3>
        <p
          title="Almuda CEO"
          className="text-muted text-left text-[17px] leading-6 tracking-wide sm:text-lg sm:leading-8"
        >
          Almuda CEO
        </p>
      </div>
    </div>
  );
};
