import Image from "next/image";
import { Banner } from "..";
import WhatCanWeDo from "../WhatCanWeDo";

const Careers = () => {
  return (
    <>
      <Banner
        title="Careers"
        text="Be a part of the ever growing Almuda Company and watch your career thrive."
      />
      <section className="flex w-full max-w-[750px] flex-col py-20 lg:py-40">
        <div className="mb-6 flex items-center justify-start border-l-4 border-bright p-3 md:mb-10">
          <h2 className="text-start text-2xl font-semibold leading-9 text-primary">
            About Careers
          </h2>
        </div>
        <div className="flex flex-col">
          <p className="mb-4 text-start text-base text-primary/80 sm:text-[17px] xl:text-lg">
            Mainland is the area outside of the free zones with the Department
            of Economic Development (DED) being the regulatory authority for the
            issuance of mainland licenses. Mainland companies are allowed to
            carry out business without restrictions throughout the UAE and
            internationally.
          </p>
          <p className="mb-4 text-start text-base text-primary/80 sm:text-[17px] xl:text-lg">
            A local sponsor is no longer needed to get a Dubai mainland license
            for around 1000 commercial and industrial activities.
          </p>
        </div>
        <div className="relative mb-7 h-[300px] w-full sm:h-[350px] md:h-[410px]">
          <Image
            src="https://www.decisivezone.ae/wp-content/uploads/2022/08/Mainland_Supporting_Image.png"
            alt="dubai"
            fill
          />
        </div>
        <WhatCanWeDo list />
      </section>
    </>
  );
};

export default Careers;
