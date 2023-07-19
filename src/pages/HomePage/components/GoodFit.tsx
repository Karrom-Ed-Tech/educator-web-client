import MaterialIcon from "../../../common/MaterialIcon";

const checkpoints = [
  "You love inspriring and helping learners",
  "You are creative, energetic and fun",
  "Your work ethics are impeccable",
  "Your are ready for something new",
  "Your explain things in the best possible manner",
  "Learners enjoy their time with you and have a good connection with you",
];

export default function GoodFit() {
  return (
    <section className="flex p-page py-14 items-center mobile:flex-col-reverse mobile:py-12 mobile:justify-center mobile:w-full mobile:w-11/12 ">
      <div className="basis-1/2 mobile:basis-1 mobile:w-11/12 ">
        <h1 className="text-6xl w-9/12 font-medium mobile:text-4xl mobile:w-full">
          How do I know if I'm a good fit for{" "}
          <span className="text-primary">Karrom</span>?
        </h1>
        <ul className="my-8 flex flex-col gap-y-3 mobile:flex-wrap">
          {checkpoints.map((point, i) => (
            <li
              key={i}
              className="flex items-center text-lg font-light tracking-tight whitespace-nowrap mobile:w-full mobile:items-start mobile:whitespace-normal"
            >
              <MaterialIcon
                codepoint="e838"
                className="bg-primary p-1 rounded-full text-back mr-2"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="basis-1/2 mobile:w-11/12 mobile:h-11/12 mobile:basis-1 mobile:flex mobile:items:center mobile:justify-center">
        <img
          src="/images/illustrations/good-teacher.png"
          alt="good fit teacher violin"
          // className="h-inherit"
        />
      </div>
    </section>
  );
}
