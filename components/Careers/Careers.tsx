import Image from "next/image";
import { Banner } from "..";
import WhatCanWeDo from "../WhatCanWeDo";

const variants = {
  text: "mb-4 text-start text-base text-primary/80 sm:text-[17px] xl:text-lg",
};

const Careers = () => {
  return (
    <>
      <Banner
        title="Careers"
        text="Be a part of the ever growing Almuda Company and watch your career thrive."
      />
      <div
        role="banner"
        className="flex w-full max-w-[750px] flex-col py-20 lg:py-40"
      >
        <div className="mb-6 flex items-center justify-start border-l-4 border-bright p-3 md:mb-10">
          <h2
            aria-label="About Mainland"
            role="heading"
            className="text-start text-2xl font-semibold leading-9 text-primary"
          >
            About Mainland
          </h2>
        </div>
        <div className="flex flex-col">
          <p role="paragraph" className={variants.text}>
            Mainland is the area outside of the free zones with the Department
            of Economic Development (DED) being the regulatory authority for the
            issuance of mainland licenses. Mainland companies are allowed to
            carry out business without restrictions throughout the UAE and
            internationally.
          </p>
          <p role="paragraph" className={variants.text}>
            A local sponsor is no longer needed to get a Dubai mainland license
            for around 1000 commercial and industrial activities.
          </p>
        </div>
        <div className="relative mb-7 h-[300px] w-full sm:h-[350px] md:h-[410px]">
          <Image
            role="img"
            src="https://www.decisivezone.ae/wp-content/uploads/2022/08/Mainland_Supporting_Image.png"
            alt="dubai"
            fill
            aria-label="Image of Dubai"
          />
        </div>
        <WhatCanWeDo list />
      </div>
    </>
  );
};

export default Careers;
