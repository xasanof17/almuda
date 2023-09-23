import { CEO, CEOlg, Quote } from "@/assets/img";
import Image from "next/image";

export const AboutCEO = () => {
  return (
    <div role="banner" className="my-20 grid gap-10 lg:grid-cols-3">
      <div className="flex items-center justify-start lg:col-span-1">
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            role="img"
            src={CEOlg}
            alt="CEO of Almuda"
            fill
            className="rounded-3xl bg-top object-contain sm:object-cover lg:object-contain"
          />
        </div>
        <div className="relative block h-[400px] w-full md:hidden md:w-[400px]">
          <Image
            role="img"
            src={CEO}
            alt="CEO of Almuda"
            fill
            className="rounded-3xl bg-top object-contain"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center lg:col-span-2">
        <Image
          role="img"
          src={Quote}
          alt="Quote Icon"
          width={24}
          height={24}
          loading="lazy"
        />
        <p className="text-muted my-4 w-full text-left text-base xs:text-[17px] sm:text-lg sm:leading-6 sm:tracking-wide md:leading-8">
          The healthcare industry has never been so advanced, and yet there are
          still so many patients who don&apos;t receive the right care at the
          right time. Infermedica thrives in the face of this global challenge
          by focusing on leading-edge technology to create patient-oriented
          solutions, including reliable symptom assessment, which significantly
          improves patient flow and enhances patient satisfaction.
        </p>
        <h3
          aria-label="CEO of Almuda Company"
          title="Oisha Rakhimova"
          className="text-xl font-bold tracking-wide text-secondary sm:text-2xl sm:leading-9 md:mx-0"
        >
          Oisha Rakhimova
        </h3>
        <p
          aria-label="Almuda CEO"
          title="Almuda CEO"
          className="text-muted text-left text-[17px] leading-6 tracking-wide sm:text-lg sm:leading-8 md:mx-0"
        >
          Almuda CEO
        </p>
      </div>
    </div>
  );
};
