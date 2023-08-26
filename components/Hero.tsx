import { BsChevronDoubleDown } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex flex-col absolute top-1/3 left-5 xl:left-80 z-20">
      <span
        title="It's time to get decisive"
        className="text-white font-medium text-2xl md:text-4xl mb-2"
      >
        It`s time to get decisive!
      </span>
      <h1
        title="Start your business in Uzbekistan"
        className="text-white text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat mb-5 leading-[50px] sm:leading-[70px] md:leading-[90px] max-w-3xl w-full"
      >
        Start Your Business in Uzbekistan
      </h1>
      <p
        title="Company setup in uzbekistan, residency, banking and accounting much more..."
        className="text-lg md:text-xl font-normal text-white"
      >
        Company setup in Uzbekistan, residency, banking and much more...
      </p>
      <div className="flex items-center mt-7 md:mt-14 space-x-6">
        <button className="btn-primary">Calculate Cost</button>
        <button className="btn-secondary">Contact Us</button>
      </div>
    </div>
  );
};

export default Hero;
