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
        title: "Educator name",
        placeholder: "e.g: Sunil Kumar",
        constraints: { minLength: 5 }
      },
      {
        name: "isAcademy",
        title: "Is this an academy with multiple educators?",
        type: "checkbox",
        optional: true,
      },
      {
        name: "email",
        title: "Email address for verificiation!",
        placeholder:"Email address for verification",
        type: "email"

      },
      {
        name: "mobile",
        title: "Phone number",
        placeholder: "Mobile number for first point of contact",
        constraints: { pattern: `^(0|91)?[6-9][0-9]{9}$` }
      },
    ],
  },
  {
    title: "Authentication",
    inputs: [
      {
        name: "verification",
        placeholder: "e.g: 123456",
        type:"number",
        title: "Enter the verification code you received from us!",
        constraints: { min: 100000, max: 999999},
        optional: true,
      },
    ],
  },
  {
    title: "Additional Info",
    inputs: [
      {
        name: "profile-pic",
        title: "Profile picture",
        type:"file",
        optional:false
      },
      {
        name: "experience",
        title: "How many years of experience do you have ?",
        type:"number",
        constraints: { min: 0, max: 100 },
      },
      {
        name: "degree",
        title: "Upload your degree!",
        type: "file",
      },
      {
        name: "affliation",
        title: "Affiliation to any institute?",
      },

    ],
  },
  {
    title: "Academy Details",
    inputs: [
      {
        name: "name",
        title: "Name of the academy",
        placeholder : "e.g: Eras Dance Academy",
        constraints: { minLength: 5 },
      },
      {
        name: "Address Line 1",
        title: "Address Line 1",
        placeholder : "e.g: 123, 4th Cross, 5th Main",
        constraints: { minLength: 5 },
      },
      {
        name: "Address Line 2",
        title: "Address Line 2",
        placeholder : "e.g: 123, 4th Cross, 5th Main",
        constraints: { minLength: 5 },
      },
      {
        name: "City",
        title: "City",
        placeholder : "e.g: Bangalore",
        constraints: { minLength: 5 },
      },
      {
        name: "State",
        title: "State",
        placeholder : "e.g: Karnataka",
        constraints: { minLength: 5 },
      },
      {
        name: "Country",
        title: "Country",
        placeholder : "e.g: India",
        constraints: { minLength: 5 },
      },
      {
        name: "Pincode",
        title: "Pincode",
        placeholder : "e.g: 560001",
        constraints: { minLength: 5 },
      },
    ],
  },
];

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<object>({});
  const [errorCheckFlag, setErrorCheckFlag] = useState(false);
  const [profilePic, setProfilePic] = useState<File | null>(null);

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
      <div className="flex relative justify-between w-full mobile:flex-col">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1 w-full bg-front bg-opacity-10 -z-1 mobile:flex-col" />
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
            <div className="bg-background p-5 flex gap-x-3 items-center mobile:flex-col">
              {state === -1 ? (
                <MaterialIcon
                  codepoint="e876"
                  className="text-xl w-10 h-10 bg-secondary text-back rounded-full flex justify-center items-center font-bold mobile:text-sm"
                />
              ) : (
                <div
                  className={twMerge(
                    "text-xl aspect-square w-10 h-10 flex items-center justify-center rounded-full mobile:text-sm",
                    state === 0 && "bg-primary text-back",
                    state === 1 && "bg-foreground bg-opacity-25 text-back "
                  )}
                >
                  {i + 1}
                </div>
              )}
              <p
                className={twMerge(
                  "text-lg font-medium mobile:text-sm mobile:text-center",
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
        {formSteps[currentStep].inputs.map((input, i) => {
          if (input.name === "profile-pic") {
            return (
              <div key={i} className="flex flex-col items-center">
                {profilePic ? (
                  <img
                    src={URL.createObjectURL(profilePic)}
                    alt="Profile Picture"
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-300 rounded-full mb-4" />
                )}
                <RegistrationInput
                  errorCheckFlag={errorCheckFlag}
                  value={(formData as any)[input.name]}
                  {...input}
                  onChange={(event) => {
                    setProfilePic(event.target.files?.[0] || null);
                    setFormData((prev) => ({
                      ...prev,
                      [input.name]: event.target.value,
                    }));
                  }}
                />
              </div>
            );
          }
          return (
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
          );
        })}
      </form>

      <div className="flex justify-between p-5">
        {currentStep !== 0 && (
          <button
            type="button"
            onClick={() => setCurrentStep((step) => (step > 1 ? step - 1 : 0))}
            className="flex items-center gap-x-2 "
          >
            <MaterialIcon codepoint="e5c8" className="inline rotate-180" />
            Back 
          </button>
        )}
        <div className="flex-1" />
        <button type="button" onClick={nextStepHandler} className="flex items-center gap-x-2">
          Next
          <MaterialIcon codepoint="e5c8" className="inline" />
        </button>
      </div>
    </form>
  );
}
