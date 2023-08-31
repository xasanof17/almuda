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
} from "@/assets";
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
    <section id="partner" className="my-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="title">Our Partners</h2>
          <p className="txt">
            You can believe us. We will improve your business skills.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {partners.map((item, i) => (
            <div
              className="flex items-center justify-center rounded-xl border border-slate-100 bg-white px-3 md:px-2 py-4 hover:border-transparent hover:shadow-lg"
              key={i}
            >
              <div className="relative h-10 w-full md:w-2/3">
                <Image
                  src={item}
                  alt="partner-logo"
                  fill
                  className="objectContain select-none grayscale transition-all duration-300 hover:cursor-pointer hover:grayscale-0"
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
