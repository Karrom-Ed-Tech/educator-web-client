import {
  FormEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import RegistrationInput, { RegistrationInputProps } from "./RegistrationInput";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "react-router-dom";

const formSteps: { title: string; inputs: RegistrationInputProps[] }[] = [
  {
    title: "Basic Details",
    inputs: [
      {
        name: "name",
        title: "Educator name",
        placeholder: "e.g: Sunil Kumar",
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
        constraints: { pattern: `^(0|91|\\+91)?[6-9][0-9]{9}$` },
      },
      {
        name: "website",
        title: "Website (if any)",
        placeholder: "Personal website / Academy website",
        type: "url",
      },
      {
        name: "address",
        title: "Full Address",
        placeholder: "Including zipcode, city, street address",
        constraints: {
          minLength: 15,
        },
        type: "string",
      },
    ],
  },
  {
    title: "Authentication",
    inputs: [
      {
        name: "email",
        title: "Email address for verificiation!",
        placeholder: "Email address for verification",
        type: "email",
      },
      {
        name: "password",
        placeholder: "Set a string password",
        type: "password",
        autoComplete: "password",
        title: "Password",
        constraints: { minLength: 6 },
      },
    ],
  },
  {
    title: "Additional Info",
    inputs: [
      {
        name: "image",
        title: "Display Picture",
        type: "file",
        constraints: { accept: "image/*" },
        preview: true,
      },
      {
        name: "experience",
        title: "How many years of experience do you have ?",
        type: "number",
        constraints: { min: 0, max: 80 },
      },
      {
        name: "qualification",
        title: "Your Qualification",
        placeholder: "e.g: BSc Chemistry / BTech CSE",
        type: "string",
      },
      {
        name: "degree",
        title: "Upload proof of qualification (degree / certificate)",
        type: "file",
        constraints: {
          accept:
            "image/jpeg,image/png,application/pdf,application/msword,image/x-eps",
        },
      },
      {
        name: "affliation",
        title: "Specify any institute you are affiliated with [optional]",
        placeholder: "e.g: IIT Delhi, Mumbai University",
        optional: true,
      },
      {
        name: "affliationProof",
        type: "file",
        title: "Upload proof of affiliation (if any)",
        constraints: {
          accept:
            "image/jpeg,image/png,application/pdf,application/msword,image/x-eps",
        },
        optional: true,
      },
    ],
  },
  {
    title: "Final Steps",
    inputs: [
      {
        name: "teacherCount",
        title: "How many teachers work under this academy?",
        placeholder: "leave blank if not an academy",
        type: "number",
        optional: true,
      },
      {
        name: "tourVideoUrl",
        title: "Tour of your institute (YouTube Video)",
        placeholder: "Provide a valid youtube video url",
        type: "url",
        constraints: {
          pattern: `^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})`,
        },
      },
      {
        name: "mainlyTeaches",
        title: "What activities do you mainly teach",
        placeholder: "e.g: skating, piano, violin",
        type: "string",
      },
    ],
  },
];

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<object>({});
  const [errorCheckFlag, setErrorCheckFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(true);

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

  useEffect(() => {
    if (!updateFlag) {
      setTimeout(() => {
        setUpdateFlag(true);
      }, 20);
    }
  }, [updateFlag]);

  useEffect(() => {
    setUpdateFlag(false);
  }, [currentStep]);

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
      {updateFlag && (
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
      )}

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
        <button
          type="button"
          onClick={nextStepHandler}
          className="flex items-center gap-x-2"
        >
          Next
          <MaterialIcon codepoint="e5c8" className="inline" />
        </button>
      </div>
    </form>
  );
}
