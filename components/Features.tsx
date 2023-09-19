import { features } from "@/constants";
import Image from "next/image";
import { BiSolidCheckCircle } from "react-icons/bi";

const data = [
  [
    "In a day,set up your business",
    "Find and set up a new office as soon as possible",
    "Swiftly assemble and reinforce squads",
  ],
  [
    "In a day,set up your business",
    "Find and set up a new office as soon as possible",
    "Swiftly assemble and reinforce squads",
  ],
  [
    "In a day,set up your business",
    "Find and set up a new office as soon as possible",
    "Swiftly assemble and reinforce squads",
  ],
];

const Item = ({ item, key }: { item: string; key: number }) => {
  return (
    <li className="flex items-start space-x-2" key={key}>
      <BiSolidCheckCircle className="block text-[20px] text-primary" />
      <span className="inline-block text-base text-primary">{item}</span>
    </li>
  );
};

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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-[60px]">
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
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-3 md:gap-12 lg:grid-cols-3 xl:gap-6">
        <div className="rounded-lg border bg-slate-100 p-2 xl:p-5">
          <ul className="flex flex-col space-y-2">
            {[
              "In a day,set up your business",
              "Find and set up a new office as soon as possible",
              "Swiftly assemble and reinforce squads",
            ].map((item, i) => (
              <Item item={item} key={i} />
            ))}
          </ul>
        </div>
        <div className="rounded-lg border bg-slate-100 p-2 xl:p-5">
          <ul className="flex flex-col space-y-2">
            {[
              "Strong ties to governmental institutions",
              "Secure paperwork and documentation.",
              "We promise a quick hassle free process",
            ].map((item, i) => (
              <Item item={item} key={i} />
            ))}
          </ul>
        </div>
        <div className="rounded-lg border bg-slate-100 p-2 xl:p-5">
          <ul className="flex flex-col space-y-2">
            {[
              "Sustainability of the business and optimum ROI.",
              "Customised services that meet your precise needs.",
            ].map((item, i) => (
              <Item item={item} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
const item1 = ["", "", ""];

export default Features;
