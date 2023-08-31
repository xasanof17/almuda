import { HeroBg, Illustration } from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container md:my-20">
      <div className="py-14 md:py-20 xl:relative">
        <div className="flex flex-col items-center md:items-start">
          <span className="mb-3 text-lg font-semibold text-primary md:text-2xl">
            It{"\u2019"}s time to get decisive!
          </span>
          <h1 className="w-full max-w-[700px] text-center text-3xl font-semibold text-primary md:text-start md:text-5xl lg:text-7xl 2xl:max-w-3xl">
            Start Your Business in the Uzbekistan
          </h1>
          <p className="my-5 text-center text-base font-normal text-primary md:text-start md:text-xl">
            Company setup in Uzbekistan, residency, banking and much more...
          </p>
          <button type="button" className="btn-secondary">Calculate Cost</button>
        </div>
        <div className="hidden md:inline">
          <Image
            className="xl:heroImg pointer-events-none mt-5"
            src={HeroBg}
            alt="hero"
          />
        </div>
        <div className="relative block h-[400px] w-full sm:h-[600px] md:hidden">
          <Image src={Illustration} alt="illustration" fill className="objectContain"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
