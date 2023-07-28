import { FormEventHandler, ReactNode, useRef, useState } from "react";
import RegistrationInput, {
  RegistrationInputProps,
} from "../RegisterPage/components/RegistrationInput";
import MaterialIcon from "../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";
const formSteps: { title: string; inputs: RegistrationInputProps[] }[] = [
  {
    title: "Enter Details",
    inputs: [
      {
        name: "name",
        title: "Brand Name of the Company",
        type: "text",
      },
      {
        name: "name",
        title: "Registered Company Name",
        type: "text",
      },
      {
        name: "location",
        title: "Enter the location of the company",
      },
      {
        name: "mobile",
        title: "Phone number",
        constraints: { pattern: `^(0|91)?[6-9][0-9]{9}$` },
      },
      {
        name: "name",
        title: "Academy owner name",
      },
      {
        name: "id",
        title: "Owner ID",
        type: "number",
      },
      {
        name: "gstn",
        title: "Company GSTN",
      },
      {
        name: "name",
        title: "Name of the Bank of company",
      },
      {
        name: "number",
        title: "Account Number",
      },
      {
        name: "status",
        type: "dropdown",
        title: "Estalblishment status",
        placeholder: "Select from the below dropdown",
        dropdown: ["SP", "LLC", "Not-registered"],
      },
      {
        name: "ownerId",
        title: "Identity proof : Adhaar card/ Pan card / VoterId",
        type: "file",
        constraints: {
          accept:
            "image/jpeg,image/png,application/pdf,application/msword,image/x-eps",
        },
      },
      {
        name: "social",
        type: "dropdown",
        title: "Social Media handle",
        placeholder: "Select from the below dropdown",
        dropdown: ["Instagram", "Discord", "Facebook", "LinkedIn"],
      },
      {
        name: "teachers",
        type: "number",
        title: "Enter Number of Teachers",
      },
    ],
  },
  {
    title: "Contact details",
    inputs: [
      {
        name: "ownerContact",
        title: "Owner contact number",
        placeholder: "Mobile number of owner",
        constraints: { pattern: `^(0|91|\\+91)?[6-9][0-9]{9}$` },
      },
      {
        name: "centerContact",
        title: "Center contact number",
        placeholder: "Mobile number of center",
        constraints: { pattern: `^(0|91|\\+91)?[6-9][0-9]{9}$` },
      },
      {
        name: "alternateContact",
        title: "Alternate contact number",
        placeholder: "Any alternate contact number ?",
        constraints: { pattern: `^(0|91|\\+91)?[6-9][0-9]{9}$` },
        optional: true,
      },
    ],
  },

  {
    title: "Teacher's Profile",
    inputs: [
      {
        name: "name",
        title: "Teacher Name",
        placeholder: "Enter name with salutation",
      },
      {
        name: "Qualification",
        title: "Enter qualification of the teacher",
        placeholder: "You'all have to attach the document",
      },
      {
        name: "QualificationDoc",
        title: "Upload qualification of the teacher",
        type: "file",
      },
      {
        name: "experience",
        title: "How many years of experience does teacher has?",
        type: "number",
        constraints: { min: 0, max: 80 },
      },
      {
        name: "awards",
        title: "Awards & Accolades",
      },
      {
        name: "activities",
        title: "Activities taught by teacher at centre",
        type: "dropdown",
        placeholder: "Select multiple options from the dropdown",
        dropdown: [
          "Swimming",
          "Basketball",
          "Handball",
          "Cricket",
          "Baseball",
          "Badminton",
        ],
        multiple: true,
      },
    ],
  },
  {
    title: "Images/Videos",
    inputs: [
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
        name:"academyImages",
        title:"Image of your academy",
        type:""
      }
    ]
  }
];

export default function OnboardPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<object>({});
  const [errorCheckFlag, setErrorCheckFlag] = useState(false);
  const [teacherDetailsCount, setTeacherDetailsCount] = useState<number>(1);

  function addTeacherHandler() {
    setTeacherDetailsCount((count) => count + 1);
  }

  const currentFormRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  function nextStepHandler() {
    console.log(formData)
    // const isFormValid = currentFormRef.current.checkValidity();
    const isFormValid = true;
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
        className="flex-1 flex flex-col items-stretch px-[6vw] gap-y-8 py-8"
      >
        {currentStep == 2
          ? Array.from({ length: teacherDetailsCount }).map((_, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-4">
                  Teacher {index+1}
                </h3>
                {formSteps[2].inputs.map((input, i) => (
                  <RegistrationInput
                    key={i}
                    errorCheckFlag={errorCheckFlag}
                    value={(formData as any)[`${input.name}_${index}`]}
                    {...input}
                    onChange={(event) => {
                      setFormData((prev) => ({
                        ...prev,
                        [`${input.name}_${index}`]: event.target.value,
                      }));
                    }}
                  />
                ))}
              </div>
            ))
          : formSteps[currentStep].inputs.map((input, i) => (
              <RegistrationInput
                key={i}
                multipleImages = {input.name=="academyImages"}
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
      {
        currentStep == 2 &&
        <button type="button" onClick={addTeacherHandler} className="flex items-center justify-center">
          <MaterialIcon codepoint="e145" className="p-2 border-rounded bg-black text-white mr-5"/> Add Teacher
        </button>
      }
      <div className="flex justify-end p-5">
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
