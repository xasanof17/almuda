import { BsStarFill } from "react-icons/bs";

const variants = {
  text: "text-base tracking-wide text-primary/90 lg:text-lg",
  title: "text-lg lg:text-xl my-3 font-medium",
};

const WhatOurClientsSay = () => {
  return (
    <section id="clients_say" className="py-20 lg:py-40">
      <div className="container">
        <h2 className="title mb-10 capitalize">What our clients say?</h2>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          <div className="flex flex-col rounded-md border bg-slate-100 px-5 py-7">
            <p className={variants.text}>
              I was having issues getting my visa approved. I got support from
              Almuda, who also showed me how to fix it. Following this positive
              experience, I used them for a few additional services, the most
              important of which was business setup and license renewal. It
              happened quickly. extremely competent service.
            </p>
            <h3 className={variants.title}>Dr.Ezzaldin Alyousef</h3>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <BsStarFill key={i} className="text-yellow-500" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;
