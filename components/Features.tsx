import { features } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <section className="container my-28">
      <div className="mx-auto mb-12 flex w-full max-w-lg flex-col">
        <h2
          title="Our special features"
          className="mb-4 text-center text-2xl font-semibold text-primary sm:text-4xl xl:text-5xl"
        >
          Our Special Features
        </h2>
        <p className="w-full text-center text-base font-medium text-primary sm:text-lg">
          We are familiar with offline speed dating flow so we designed out
          online platform considering all the requirements
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[80px] sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ src, title, text, href }, i) => (
          <div className="flex flex-col" key={i}>
            <div className="relative mb-7 h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]">
              <Image src={src} alt="icon" fill />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-primary sm:text-2xl">
              {title}
            </h3>
            <p className="mb-7 text-base font-normal text-primary">{text}</p>
            <Link
              href={href}
              className="inline-block text-xl font-semibold text-primary transition-colors duration-300 hover:text-bright"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
