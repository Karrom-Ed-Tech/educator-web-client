import { FormEventHandler, ReactNode, useRef, useState } from "react";
import RegistrationInput, {
  RegistrationInputProps,
} from "../RegisterPage/components/RegistrationInput";
import MaterialIcon from "../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";
import AddTeacherSchedule from "./components/AddTeacherSchedule";
import EducatorPage from "./components/EducatorPage";
const formSteps: {
  title: string;
  content: {
    heading?: string | null;
    inputs?: RegistrationInputProps[];
    component?: any;
  }[];
}[] = [
  {
    title: "Center Details",
    content: [
      {
        heading: "Company Registration Details",
        inputs: [
          {
            name: "status",
            type: "dropdown",
            title: "Establishment status",
            placeholder: "Select from the below dropdown",
            dropdown: [
              "Private Limited Company",
              "Public Limited Comapny",
              "Partnerships",
              "Sole proprietorship",
              "LLP",
              "One Person Company",
              "Section 8 Company",
              "Not-registered",
            ],
          },
          {
            name: "name",
            title: "BRegistered Company Name",
            type: "text",
          },
          {
            name: "Address1",
            title: "Registered Address Line 1",
            type: "text",
          },
          {
            name: "Address2",
            title: "Address Line 2",
            type: "text",
          },
          {
            name: "area",
            title: "Area",
            type: "text",
          },
          {
            name: "city",
            title: "City",
            type: "text",
          },
          {
            name: "pincode",
            title: "Pincode",
            type: "text",
            constraints: { accept: "^[0-9]+$" },
          },
          {
            name: "state",
            title: "state",
            type: "text",
          },
        ],
      },
      {
        heading: "Ownership details",
        inputs: [
          {
            name: "saluation",
            title: "Saluation",
            type: "text",
          },
          {
            name: "firstname",
            title: "First Name",
            type: "text",
          },
          {
            name: "lastname",
            title: "Last Name",
            type: "text",
          },
          {
            name: "identification",
            title: "Identification document",
            type: "file",
            constraints: { accept: "jpeg/pdf" },
          },
          {
            name: "mobile",
            title: "Mobile No",
            constraints: { pattern: `^(0|91)?[6-9][0-9]{9}$` },
          },
          {
            name: "alternate",
            title: "Alternate Mobile No",
            constraints: { pattern: `^(0|91)?[6-9][0-9]{9}$` },
          },
          {
            name: "email",
            title: "Email Address",
            constraints: {
              accept: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
            },
          },
        ],
      },
      {
        heading: "GSTN Details",
        inputs: [
          {
            name: "gstnRegistered",
            title: "GST registered",
            type: "checkbox",
            optional: true,
          },
          {
            name: "gstnRegistered",
            title: "GST Number",
            type: "text",
          },
        ],
      },
      {
        heading: "Bank Details",
        inputs: [
          {
            name: "cancelledCheque",
            title: "Cancelled cheque",
            type: "file",
          },
          {
            name: "accountNumber",
            title: "Bank A/C No.",
            type: "text",
            constraints: { accept: "^[0-9]+$" },
          },
          {
            name: "payeeName",
            title: "Payee Name",
            type: "text",
          },
          {
            name: "ifscCode",
            title: "IFSC Code",
            type: "text",
          },
          {
            name: "Branch",
            title: "Branch",
            type: "text",
          },
        ],
      },
    ],
  },
  {
    title: "Educator page view",
    content : [
      {
        component : <EducatorPage/>
      }
    ]
  },

  {
    title: "Educator Details",
    content: [
      {
        heading: "Educator name",
        inputs: [
          {
            name: "salutation",
            title: "Salutation",
            placeholder: "John",
            type: "dropdown",
            lengthDivide : 4,
            dropdown: [
              "Mr.",
              "Mrs.",
              "Ms.",
              "other"
            ],
          },
          {
            name: "firstName",
            title: "First Name",
            placeholder: "John",
            type: "text",
            lengthDivide : 4
          },
          {
            name: "lastName",
            title: "Last Name",
            placeholder: "Doe",
            type: "text",
            lengthDivide : 3
          },
          {
            name: "educatorProfilePic",
            title: "Educator Profile Photo",
            type: "file",
          },
          {
            name: "activitiesTaught",
            title: "Activities Taught",
            type: "dropdown",
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
          {
            name: "QualificationOrCertification",
            title: "Qualification/Certification",
            placeholder: "Qualifications or certificates teacher has",
          },
          // {
          //   name: "QualificationDoc",
          //   title: "Upload qualification of the teacher",
          //   type: "file",
          // },
          {
            name: "No. of years of teaching experience",
            title: "No. of years of teaching experience",
            type: "number",
            constraints: { min: 0, max: 80 },
          },
          {
            name: "studentsTaught",
            title: "No. of students taught",
            type: "number",
            constraints: { min: 0 },
          },
          {
            name: "awards",
            title: "Awards & Accolades",
          },
        ],
      },
    ],
  },
  {
    title: "Images/Videos",
    content: [
      {
        heading: null,
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
            name: "academyImages",
            title: "Image of your academy",
            type: "",
          },
        ],
      },
    ],
  },
];

interface FormDataInterface {
  cancelledCheque?: boolean;
  accountNumber?: string;
  ifscCode?: string;
  payeeName?: string;
  branch?: string;
  [key: string]: any;
}

export default function OnboardPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormDataInterface>({});
  const [errorCheckFlag, setErrorCheckFlag] = useState(false);
  const [teacherDetailsCount, setTeacherDetailsCount] = useState<number>(1);
  const [bankError, setBankError] = useState<Boolean>(false);

  function addTeacherHandler() {
    setTeacherDetailsCount((count) => count + 1);
  }

  const currentFormRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  function nextStepHandler() {
    console.log(formData);
    // const isFormValid = currentFormRef.current.checkValidity();
    const isFormValid = true;
    if (currentStep == 0) {
      if (
        !formData.cancelledCheque &&
        !formData.accountNumber &&
        !formData.ifscCode &&
        !formData.payeeName &&
        !formData.branch
      ) {
        setBankError(true);
        setTimeout(() => {
          setBankError(false);
        }, 4000);
        return;
      }
    }
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
        {currentStep === 1 ? (
          <EducatorPage />
        ) : currentStep === 2 ? (
          Array.from({ length: teacherDetailsCount }).map((_, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-4">Educator {index + 1}</h3>
              <div className="flex w-full flex-wrap justify-between gap-x-5">
              {formSteps[2].content[0].inputs &&
                formSteps[2]?.content[0].inputs.map((input, i) => (
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
                  lengthDivide={input?.lengthDivide}
                  />
                  ))}
              <AddTeacherSchedule />
                </div>
            </div>
          ))
        ) : (
          formSteps[currentStep].content.map((item, index) => (
            <div key={index}>
              <h2 className="my-5 font-bold">{item.heading}</h2>
              {item.inputs?.map((input, i) => (
                <RegistrationInput
                  key={i}
                  multipleImages={input.name === "academyImages"}
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
            </div>
          ))
        )}
      </form>
      {currentStep == 2 && (
        <button
          type="button"
          onClick={addTeacherHandler}
          className="flex items-center justify-center"
        >
          <MaterialIcon
            codepoint="e145"
            className="p-2 border-rounded bg-black text-white mr-5"
          />{" "}
          Add Teacher
        </button>
      )}
      <div className="flex justify-end p-5">
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
        {bankError && (
          <p className="text-red-400">
            *Either upload cancelled cheque or bank details.
          </p>
        )}
        <button
          type="button"
          onClick={nextStepHandler}
          className="flex items-center gap-x-2 ml-10"
        >
          Next
          <MaterialIcon codepoint="e5c8" className="inline" />
        </button>
      </div>
    </form>
  );
}
