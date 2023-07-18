export default function Hero() {
  return (
    <section className=" py-16 bg-secondary flex mobile:flex-col-reverse">
      <div className="basis-1/2 text-back flex flex-col items-center text-center gap-y-10 text-lg font-medium mobile:mt-12" >
        <h1 className="text-2xl tracking-tight font-semibold">
          Want to take your teaching experience online?
        </h1>
        <h2>made easier than ever before with</h2>
        <p className="text-3xl">
          Karr<span className="text-primary">o</span>m
        </p>
        <p>Register yourself now!</p>
      </div>
      <div className="flex-1 flex justify-center self-stretch h-inherit mobile:m-12">
        <img
          src="/images/illustrations/educator-online-lecture.png"
          alt="online lecture"
          className="pl-10 w-2/3 widescreen:pl-2 widescreen:w-full "
          draggable={false}
        />
      </div>
    </section>
  );
}
