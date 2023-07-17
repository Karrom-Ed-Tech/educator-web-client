import MaterialIcon from "../../../common/MaterialIcon";

const steps = [
  {
    icon: "e069",
    content: "Complete the online application.",
  },
  {
    icon: "e873",
    content: "Upload supporting documents.",
  },
  {
    icon: "e064",
    content: "Start uploading your video lectures.",
  },
];

export default function HowToApply() {
  return (
    <section className="py-16 p-page flex flex-col items-center text-center bg-primary bg-opacity-10">
      <h1 className="font-semibold text-front text-opacity-80 text-3xl">
        How to Apply
      </h1>
      <h2 className="my-3 text-xl text-front text-opacity-70">
        Follow these 3 simple steps
      </h2>

      <div className="py-12 flex relative justify-evenly w-full">
        <img
          src="https://i.pinimg.com/originals/10/f4/c2/10f4c29e4f0c7a53cc7b7ca4822e82d9.png"
          alt="question mark"
          className="absolute bottom-0 left-0 w-20 rotate-[18deg] selection:hidden"
          draggable={false}
        />
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-4 items-center"
            style={{ maxWidth: `${60 / steps.length}%` }}
          >
            <h5 className="text-lg font-medium text-secondary">
              Step {index + 1}
            </h5>
            <MaterialIcon
              className="bg-primary text-back aspect-square text-5xl p-4 rounded-full"
              codepoint={step.icon}
            />
            <p className="text-xl font-light">{step.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}