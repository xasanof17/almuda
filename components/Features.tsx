import { features } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section className="container my-20 md:my-40">
      <div className="mx-auto mb-14 flex w-full max-w-lg flex-col">
        <h2 title="Our special features" className="title">
          Our Special Features
        </h2>
        <p
          className="txt"
          title="We are familiar with offline speed dating flow so we designed out
          online platform considering all the requirements"
        >
          We are familiar with offline speed dating flow so we designed out
          online platform considering all the requirements
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[60px]">
        {features.map(({ src, title, text }, i) => (
          <div className="flex flex-col" key={i}>
            <div className="relative mb-7 h-[50px] w-[50px]">
              <Image
                src={src}
                alt="icon"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h3
              title={title}
              className="mb-3 text-xl font-semibold text-primary sm:text-2xl"
            >
              {title}
            </h3>
            <p
              title={text}
              className="mb-3 text-base font-normal text-primary md:mb-7"
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
