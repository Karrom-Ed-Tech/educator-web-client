export default function Hero() {
  return (
    <section className="p-page py-16 bg-secondary flex">
      <div className="basis-1/2 text-back flex flex-col items-center text-center gap-y-10 text-lg font-medium">
        <h1 className="text-2xl tracking-tight font-semibold">
          Want to take your teaching experience online?
        </h1>
        <h2>made easier than ever before with</h2>
        <p className="text-3xl">
          Karr<span className="text-primary">o</span>m
        </p>
        <p>Register yourself now!</p>
      </div>
      <div className="flex-1 flex justify-center self-stretch h-inherit">
        <img
          src="/images/illustrations/educator-online-lecture.png"
          alt="online lecture"
          className="pl-10 w-2/3"
          draggable={false}
        />
      </div>
    </section>
  );
}
