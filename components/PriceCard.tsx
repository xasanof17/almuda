import { PriceList } from "@/types";
import { Button } from "./Button";

const PriceCard = ({ popular, title, price, list }: PriceList) => {
  return (
    <div
      className={`group flex w-full flex-col items-center rounded-xl border md:border-2 ${
        popular ? "border-secondary" : "border-slate-200"
      } px-4 py-5 transition-all duration-200 ease-out md:px-5 md:py-7 ${
        popular
          ? "shadow-md hover:border-bright hover:bg-transparent"
          : "shadow hover:border-bright"
      }`}
    >
      {popular ? (
        <span className="text-normal mb-3 rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-400">
          Most Popular
        </span>
      ) : null}
      <h3
        title={title}
        className="mb-2 text-lg font-medium text-primary/70 sm:text-xl md:text-2xl"
      >
        {title}
      </h3>
      <span
        title={`$${price}`}
        className="text-4xl font-bold text-primary md:text-5xl"
      >
        ${price}
      </span>

      <Button
        type="button"
        title="Get Started"
        className="group-hover:btn-secondary my-6 w-full rounded-lg !border-2 bg-slate-600 !py-2 text-center text-base font-medium !normal-case text-white md:!text-lg"
        text="Get Started"
      />

      <ul className="flex w-full flex-col space-y-3">
        {list.map(({ Icon, text, not }, i) => (
          <div title={text} key={i} className="flex items-start space-x-2">
            <Icon
              fontSize={20}
              className={`block ${not ? "muted" : "text-primary"}`}
            />
            <p
              className={`inline text-base font-normal ${
                not ? "muted line-through" : "text-primary"
              }`}
            >
              {text}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
