export default function Hero() {
  return (
    <section className="flex p-page h-[90vh]">
      <div className="basis-1/2 flex flex-col justify-center items-center gap-y-16">
        <h1 className="text-7xl leading-tight font-raleway">
          online{" "}
          <span className="font-medium font-poppins">
            classes <br /> made fun for
          </span>
          <br /> educators
        </h1>

        <div className="w-1/2 before:content-visible before:bg-opacity-50 before:h-full relative before:left-1/2 before:top-0 before:-translate-x-1/2 before:bg-primary before:absolute before:-z-1 before:blur-3xl before:aspect-square">
          <h3 className="font-serif font-semibold mb-3">Introduction</h3>
          <p className="text-lg font-light">
            Get rid of the routine feel from your teaching process. Join Karrom
            and replace lame methods with fun and engaging ones.
          </p>
        </div>

        <div className="flex w-full justify-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent border-b border-front p-5 w-3/5"
          />
          <button className="text-sm font-medium bg-foreground text-back px-8">
            Sign up
          </button>
        </div>
      </div>

      <div className="basis-1/2 h-full">
        <img
          className="object-contain h-inherit p-10"
          src="/images/illustrations/home-hero.png"
          alt="homepage educator illustration"
        />
      </div>
    </section>
  );
}
