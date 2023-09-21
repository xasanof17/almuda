import { AlmudaBanner } from "@/assets/img";
import Image from "next/image";

const CompanyMission = () => {
  return (
    <div className="my-10 flex grid-cols-2 flex-col sm:my-20 lg:grid">
      <div className="relative h-[360px] w-full sm:h-[400px] xl:h-[450px]">
        <Image
          src={AlmudaBanner}
          alt="image"
          fill
          className="object-contain"
        />
      </div>
      <div className="mt-10 flex flex-col sm:mt-0 md:pl-10 md:pt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Company Mission
        </h2>
        <p className="text-start text-base tracking-wide text-primary/80 sm:text-[17px] xl:text-lg">
          Designed to cater to individuals, startups, and small to medium-sized
          companies, Almuda is committed to providing bespoke business set-up
          advice and delivering fantastic customer service, as well as
          developing trusted, long-term relationships with all its clients - by
          not only managing the process of company formation from start to
          finish, but also by providing a supportive ecosystem for those
          companies to flourish.
        </p>
      </div>
    </div>
  );
};

export default CompanyMission;
