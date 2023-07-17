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
    <section className="flex p-page py-36 items-center">
      <div className="basis-1/2">
        <h1 className="text-6xl font-medium">
          How do I know
          <br />
          if I'm a good fit
          <br />
          for <span className="text-primary">Karrom</span>?
        </h1>
        <ul className="my-8 flex flex-col gap-y-3">
          {checkpoints.map((point, i) => (
            <li
              key={i}
              className="flex items-center text-lg font-light tracking-tight whitespace-nowrap"
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

      <div className="basis-1/2 h-inherit">
        <img
          src="/images/illustrations/good-teacher.png"
          alt="good fit teacher violin"
          className="h-inherit"
        />
      </div>
    </section>
  );
}
