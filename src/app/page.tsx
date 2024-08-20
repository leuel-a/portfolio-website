import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="grid place-items-center lg:grid-cols-2 mt-4">
      <div className="flex max-w-[60ch] flex-col gap-12 text-center lg:text-left">
        <div className="space-y-2">
          <h1 className="font-sans-cond text-lg font-semibold uppercase tracking-[4.75px] text-accent">
            So do you want quality software?
            <span className="mt-2 block font-serif text-5xl font-bold tracking-normal text-white">
              Leuel Asfaw
            </span>
          </h1>
          <p className="px-4 text-[1rem] md:text-lg font-semibold text-accent lg:px-0">
            Looking for top-notch software? I bring ideas to life with precision
            and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 justify-center w-full gap-2">
          <Button>Hire Me</Button>
          <Button className="bg-dark-blue text-white border border-white">Download Resume</Button>
        </div>
      </div>
      <div></div>
    </main>
  );
}
