import { AlmudaBanner, AlmudaProvidesImg } from "@/assets/img";
import { Features, Hero, Partner, Pricing } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <section className="py-20 lg:py-40">
        <div className="container">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="title text-start">Running a business</h2>
              <p className="text-base text-primary/80 sm:text-[17px] lg:text-lg">
                Depending on the nature of your business, you can establish your
                legal presence by setting up a local subsidiary, a branch-type
                presence, by entering into a joint venture, or by maintaining a
                representative office for marketing and client support purposes.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[360px] w-full sm:h-[400px] xl:h-[450px]">
                <Image src={AlmudaBanner} alt="banner of almuda" fill />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partner />
      <section className="py-20 lg:py-40">
        <div className="container">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full sm:h-[480px] lg:h-[400px] xl:h-[450px]">
                <Image src={AlmudaProvidesImg} alt="banner of almuda" fill />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="title text-start">Types of companies</h2>
              <p className="text-base text-primary/80 sm:text-[17px] lg:text-lg">
                If you would like to establish a subsidiary or a joint-venture
                company, there are a number of company-type choices. The most
                commonly used forms by foreign businesses are Joint Stock
                Companies (JSC - "Aksiyadorlik Jamiyati") and Limited Liability
                Companies (LLC - "Mas&apos;uliyati Cheklangan Jamiyat").
              </p>
              <p className="text-base text-primary/80 sm:text-[17px] lg:text-lg">
                Either type of company can be wholly owned by a foreign investor
                (except for certain reserved business areas, such as media),
                irrespective of the country of origin. In the following table
                you can see the key differences between the types of companies.
              </p>
              <p className="text-base text-primary/80 sm:text-[17px] lg:text-lg">
                A Limited Liability Company (LLC) is the most popular type of
                company due to the relative simplicity of its formation and
                flexible rules on corporate governance, raising capital and
                other matters. A joint-stock company (JSC) is generally
                recommended as a legal form only in cases where you are planning
                a public offering of the company&apos;s shares.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Pricing />
    </main>
  );
}
