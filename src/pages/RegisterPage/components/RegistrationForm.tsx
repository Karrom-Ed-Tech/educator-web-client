import { FormEventHandler, ReactNode, useState } from "react";
import RegistrationInput from "./RegistrationInput";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";

const formSteps: { title: string; element: ReactNode }[] = [
  {
    title: "Basic Details",
    element: <div />,
  },
  {
    title: "Authentication",
    element: <div />,
  },
  {
    title: "Additional Info",
    element: <div />,
  },
  {
    title: "Academy Details",
    element: <div />,
  },
];

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <form className="min-h-[50vh] flex flex-col p-page py-12">
      <div className="flex relative justify-between w-full">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1 w-full bg-front bg-opacity-10 -z-1" />
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 h-1 w-full bg-front bg-opacity-40 -z-1"
          style={{
            clipPath: `polygon(0% 0%, 0% 100%, ${
              10 + (100 / formSteps.length) * currentStep
            }% 100%, ${10 + (100 / formSteps.length) * currentStep}% 0%)`,
          }}
        />

        {formSteps.map((step, i) => {
          let state = 0; // -1 -> completed ; 0 -> ongoing ; 1 -> upcoming
          if (i < currentStep) {
            state = -1;
          }
          if (i > currentStep) {
            state = 1;
          }

          return (
            <div className="bg-background p-5 flex gap-x-3 items-center">
              {state === -1 ? (
                <MaterialIcon
                  codepoint="e876"
                  className="text-xl w-10 h-10 bg-secondary text-back rounded-full flex justify-center items-center font-bold"
                />
              ) : (
                <div
                  className={twMerge(
                    "text-xl aspect-square w-10 h-10 flex items-center justify-center rounded-full",
                    state === 0 && "bg-primary text-back",
                    state === 1 && "bg-foreground bg-opacity-25 text-back"
                  )}
                >
                  {i + 1}
                </div>
              )}
              <p
                className={twMerge(
                  "text-lg font-medium",
                  state === -1 && "text-secondary",
                  state === 0 && "text-primary",
                  state === 1 && "text-front text-opacity-25"
                )}
              >
                {step.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex-1"></div>

      <div className="flex justify-between p-5">
        <button
          type="button"
          onClick={() => setCurrentStep((step) => (step > 1 ? step - 1 : 0))}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() =>
            setCurrentStep((step) =>
              step < formSteps.length - 1 ? step + 1 : formSteps.length - 1
            )
          }
        >
          Next
        </button>
      </div>
    </form>
  );
}
