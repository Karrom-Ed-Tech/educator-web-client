import { FormEventHandler, ReactNode, useRef, useState } from "react";
import RegistrationInput, { RegistrationInputProps } from "./RegistrationInput";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";

const formSteps: { title: string; inputs: RegistrationInputProps[] }[] = [
  {
    title: "Basic Details",
    inputs: [
      {
        name: "name",
        title: "Educator / Academy name",
        placeholder: "e.g: Eras Dance Academy / Sunil Kumar",
        constraints: { minLength: 5 },
      },
      {
        name: "isAcademy",
        title: "Is this an academy with multiple educators?",
        type: "checkbox",
        optional: true,
      },
      {
        name: "mobile",
        title: "Phone number",
        placeholder: "Mobile number for first point of contact",
        constraints: { pattern: `^(0|91)?[6-9][0-9]{9}$` },
      },
    ],
  },
  {
    title: "Authentication",
    inputs: [
      {
        name: "namadse",
        title: "Educator / Academy name",
      },
    ],
  },
  {
    title: "Additional Info",
    inputs: [
      {
        name: "naasdme",
        title: "Educator / Academy name",
      },
    ],
  },
  {
    title: "Academy Details",
    inputs: [
      {
        name: "namdadsade",
        title: "Educator / Academy name",
      },
    ],
  },
];

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<object>({});
  const [errorCheckFlag, setErrorCheckFlag] = useState(false);

  const currentFormRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  function nextStepHandler() {
    const isFormValid = currentFormRef.current.checkValidity();

    if (isFormValid) {
      setCurrentStep((step) =>
        step < formSteps.length - 1 ? step + 1 : formSteps.length - 1
      );
    } else {
      setErrorCheckFlag((f) => !f);
      // Do something when the form is not valid
      setTimeout(() => {
        setErrorCheckFlag((f) => !f);
      }, 1);
    }
  }

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

      <form
        ref={currentFormRef}
        className="flex-1 flex flex-col items-stretch px-[6vw] gap-y-8 py-16"
      >
        {formSteps[currentStep].inputs.map((input, i) => (
          <RegistrationInput
            key={i}
            errorCheckFlag={errorCheckFlag}
            value={(formData as any)[input.name]}
            {...input}
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                [input.name]: event.target.value,
              }));
            }}
          />
        ))}
      </form>

      <div className="flex justify-between p-5">
        {currentStep !== 0 && (
          <button
            type="button"
            onClick={() => setCurrentStep((step) => (step > 1 ? step - 1 : 0))}
          >
            Back
          </button>
        )}
        <div className="flex-1" />
        <button type="button" onClick={nextStepHandler}>
          Next
        </button>
      </div>
    </form>
  );
}
