import { AlmudaProvidesImg } from "@/assets";
import Image from "next/image";

const AboutProvides = () => {
  return (
    <div className="my-10 flex grid-cols-2 flex-col-reverse gap-7 sm:my-20 lg:grid">
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 text-start text-2xl font-bold text-primary">
          Almuda Provides
        </h2>
        <p className="text-start text-base tracking-wide text-primary/80 sm:text-[17px] xl:text-lg">
          Highly personalised business setup services to corporate clients and
          individuals who are setting up their companies, branches or
          subsidiaries in Uzbekistan. Our team full of passionate professionals
          is dedicated to helping you find the best-suited solutions when
          establishing a company in Uzbekistan: Not only do we advise you on the
          corporate structure and jurisdiction to choose from, but we also make
          sure to cover all technical, administrative and financial aspects of
          Uzbekistan business setup Your business setup journey doesn&apos;t
          stop there, which is why we offer additional services to get your
          business up and running after the establishment. We can help you with
          your company&apos;s accounting, marketing, HR and much more
        </p>
      </div>
      <div className="relative h-[300px] w-full sm:h-[480px] lg:h-[400px] xl:h-[450px]">
        <Image src={AlmudaProvidesImg} alt="image" fill />
      </div>
    </div>
  );
};

export default AboutProvides;
