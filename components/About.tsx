import { CEO, Quote } from "@/assets";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="title" title="About">
        About
      </h1>
      <p className="txt" title="Welcome to our about page">
        Welcome to our About page
      </p>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1 flex items-center justify-start">
          <div className="relative h-auto w-full">
            <Image src={CEO} alt="CEO of Almuda" fill />
          </div>
          <div className="col-span-2 flex flex-col">
            <Image src={Quote} alt="Quote Icon" width={24} height={24} />
            <p className="text-lg leading-8 tracking-wide my-4 text-left text-grey">
              The healthcare industry has never been so advanced, and yet there
              are still so many patients who don&apos;t receive the right care at the
              right time. Infermedica thrives in the face of this global
              challenge by focusing on leading-edge technology to create
              patient-oriented solutions, including reliable symptom assessment,
              which significantly improves patient flow and enhances patient
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
