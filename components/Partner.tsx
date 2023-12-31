"use client";
import {
  AdliyaLogo,
  AloqaBankLogo,
  AnorBankLogo,
  DavrBankLogo,
  HamkorBankLogo,
  IpakBankLogo,
  ItParkLogo,
  MinistryofForeign,
  MyGovLogo,
  SoliqLogo,
} from "@/public/assets/img";
import Image from "next/image";

const Partner = () => {
  const partners = [
    AdliyaLogo,
    AloqaBankLogo,
    MyGovLogo,
    SoliqLogo,
    MinistryofForeign,
    ItParkLogo,
    AnorBankLogo,
    IpakBankLogo,
    HamkorBankLogo,
    DavrBankLogo,
  ];
  return (
    <section id="partner" className="my-32 md:my-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 title="Our Partners" className="title">
            Our Partners
          </h2>
          <p
            title="You can believe us. We will improve your business skills."
            className="txt"
          >
            You can believe us. We will improve your business skills.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-2 xs:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {partners.map((item, i) => (
            <div
              className="flex items-center justify-center rounded-xl border border-slate-100 bg-white p-2 px-3 hover:border-transparent hover:shadow-lg sm:px-3 sm:py-4 md:px-2"
              key={i}
            >
              <div className="relative h-10 w-full xs:h-12 md:h-20 md:w-2/3">
                <Image
                  src={item}
                  alt="partner-logo"
                  fill
                  className="select-none object-contain grayscale transition-all duration-300 hover:cursor-pointer hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
