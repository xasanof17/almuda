import { Features, Hero, Partner, Pricing } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="pointer-events-none absolute -left-[10%] -top-[10%] -z-10 h-[768px] w-full max-w-3xl select-none rounded-full bg-secondary opacity-5 blur-[75px]" />
      <Hero />
      <Features />
      <Partner />
      <Pricing />
    </main>
  );
}
