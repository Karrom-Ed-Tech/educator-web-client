import { FormEventHandler, ReactNode, useRef, useState } from "react";
import RegistrationInput, { RegistrationInputProps } from "./RegistrationInput";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";
const formSteps: { title: string; inputs: RegistrationInputProps[] }[] = [
  {
    title: "Register Today",
    inputs: [
      {
        name: "name",
        title: "Educator / Academy name",
        placeholder: "e.g: Eras Dance Academy / Sunil Kumar",
        constraints: { minLength: 5 },
      },
      {
        name: "email",
        title: "Email Address",
        placeholder: "e.g: educator@eras.ac.in",
      },
      {
        name: "mobile",
        title: "Phone number",
        placeholder: "Mobile number for first point of contact",
        constraints: { pattern: `^(0|91)?[6-9][0-9]{9}$` },
      },
      {
        name: "address",
        title: "Address",
        placeholder: "e.g: G-017 Mayuresh Park, Lake view road, Bhandup",
      },
    ],
  },
];

export default function NewRegistrationForm() {
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
              {state === 0 ? (
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

      <div className="p-page text-center py-8">
        We kindly request you to fill out the form provided. Once you submit the
        form, we will promptly get in touch with you to move forward with your
        inquiry. We're eager to assist you and address any questions or
        requirements you may have
      </div>

      <form
        ref={currentFormRef}
        className="flex-1 flex flex-col items-stretch px-[6vw] gap-y-8 py-8"
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

      <div className="flex justify-end p-5">
        <button
          type="button"
          className="bg-secondary text-back px-4 py-2 rounded-md"
          onClick={nextStepHandler}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
