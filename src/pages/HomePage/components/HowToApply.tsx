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

      <div className="py-12 flex relative justify-center w-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
        <img
          src="https://i.pinimg.com/originals/10/f4/c2/10f4c29e4f0c7a53cc7b7ca4822e82d9.png"
          alt="question mark"
          className="absolute bottom-0 opacity-40 left-0 w-20 rotate-[18deg] selection:hidden mobile:bottom-100"
          draggable={false}
        />
        {steps.map((step, index) => (
          <>
            <div
              key={index}
              // style={{ maxWidth: `${60 / steps.length}%` }}
              className="flex flex-col gap-y-4 items-center max-w-1/5 mobile:max-w-full"
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
            {steps.indexOf(step) < steps.length - 1 && (
              <div
                className="border-2 border-dashed h-0 border-front relative self-center mobile:rotate-90 mobile:my-16"
                style={{ width: `${50 / (steps.length + 1)}%` }}
              >
                <MaterialIcon
                  codepoint="e5e1"
                  className="absolute right-0 translate-x-full top-1/2 -translate-y-1/2"
                />
              </div>
            )}
          </>
        ))}
      </div>

      <p className="mt-16 shadow-md p-5 rounded-full text-primary brightness-75">
        Your application will be verified by our admins
      </p>
    </section>
  );
}
