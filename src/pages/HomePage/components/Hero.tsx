export default function Hero() {
  return (
    <section className="flex p-page widescreen:flex-col-reverse widescreen:justify-center widescreen:items-center">
      <div className="basis-1/2 flex flex-col justify-center items-center gap-y-16 widscreen:basis-1">
        <h1 className="text-7xl leading-tight font-raleway widescreen:text-5xl widescreen:mt-20">
          Online{" "}
          <span className="font-medium font-poppins">
            classes <br /> made fun for
          </span>
          <br /> educators
        </h1>

        <div className="w-1/2 widescreen:w-11/12">
          <h3 className="font-serif font-semibold mb-3">Introduction</h3>
          <p className="text-lg font-light">
            Get rid of the routine feel from your teaching process. Join Karrom
            and replace lame methods with fun and engaging ones.
          </p>
        </div>

        {/* <div className="absolute mt-96 before:content-visible before:bg-opacity-50 before:h-full before:left-1/2 before:top-0 before:-translate-x-1/2 before:bg-primary before:absolute before:-z-1 before:blur-3xl before:aspect-square">
        </div> */}
        <div className="absolute h-36 w-36 bg-primary -z-1 mt-72 blur-3xl opacity-50">

        </div>
        <form action="/register" className="flex w-full justify-center">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="bg-transparent border-b border-front p-5 w-3/5"
          />
          <button
            type="submit"
            className="text-sm font-medium bg-foreground text-back px-8 border border-foreground duration-300 hover:bg-transparent hover:text-front"
          >
            Sign up
          </button>
        </form>
      </div>

      <div className="basis-1/2 widescreen:basis-1 widescreen:w-96 widescreen:h-96 widescreen:mt-16 widescreen:flex widescreen:items-center widescreen:justify-center">
        <img
          className="object-contain h-inherit"
          src="/images/illustrations/home-hero.png"
          alt="homepage educator illustration"
          draggable={false}
        />
      </div>
    </section>
  );
}
