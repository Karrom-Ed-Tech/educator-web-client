import { useState } from "react";
import RegistrationInput from "../../RegisterPage/components/RegistrationInput";
import MaterialIcon from "../../../common/MaterialIcon";

const form = [
  {
    title: "Educator page view",
    content: [
      {
        heading: "Company/Brand Details",
        inputs: [
          {
            name: "centerName",
            title: "Center name",
            type: "text",
          },
          {
            name: "logo",
            title: "Brand logo",
            type: "file",
          },
          {
            name: "isAddressSame",
            title: "Is address same as company address?",
            type: "checkbox",
            optional: true
          },
          {
            name: "premiseAddress1",
            title: "Premise Address line 1",
            type: "text",
          },
          {
            name: "premiseAddress2",
            title: "Premise Address line 2",
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
          {
            name: "social",
            title: "Social Media handle",
            type:"text",
            // type: "dropdown",
            placeholder: "Give your social media handle!",
            // dropdown: ["Instagram", "Discord", "Facebook", "LinkedIn"],
            multipleAdd : true
          },
          {
            name: "Types of courses",
            title: "Types of courses",
            type: "dropdown",
            placeholder: "Select from the below dropdown",
            dropdown: ["Dance", "Singing", "Gymnastics", "Athletics", "fdgwsdfgs"],
            multiple:true,
          },
          {
            name: "Awards",
            type: "text",
            title: "Awards and Accolades",
            placeholder: "your educators awards and accolades"
          },
          {
            name: "Awards",
            type: "file",
            title: "Awards and Accolades",
            placeholder: "Select from the below dropdown",
          },
          {
            name: "mobileNumber",
            title: "Mobile number",
            placeholder: "Mobile number",
            constraints: { pattern: `^(0|91|\\+91)?[6-9][0-9]{9}$` },
          },
          {
            name: "landlineNumber",
            title: "LandLine number",
            placeholder: "Landline number of center",
            constraints: { pattern: `^(0|91|\\+91)?[6-9][0-9]{9}$` },
          },
          {
            name: "email",
            title: "Email address",
            placeholder: "Ex: john@gmail.com",
            constraints: {
              accept: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
            },
          },
        ],
      },
    ],
  },
]

export default function EducatorPage(){
  const [formData, setFormData] = useState<object>({});
  const [errorCheckFlag, setErrorCheckFlag] = useState(false);
  const [educatorDetailsCount , setEducatorDetailsCount] = useState(1);
  const [socialMediaAccountCount , setSocialMediaAccountCount] = useState(1);

  const addEducatorCenter = () => {
    setEducatorDetailsCount(educatorDetailsCount + 1);
  }
    return (
        <div>
          {
            Array.from({ length: educatorDetailsCount }).map((_, index) => (
              <div key={index}>
              <h3 className="text-2xl font-bold my-4">Center {index + 1}</h3>
            {
              form[0].content[0].inputs.map((input, i) => {
                return (
                  // <div className={"mb-5" + (input.lengthHalf ? " basis-1/2" : "")}>
                  <RegistrationInput
                  key={i}
                  // multipleImages={input.name == "academyImages"}
                  errorCheckFlag={errorCheckFlag}
                  value={(formData as any)[input.name]}
                  {...input}
                  onChange={(event) => {
                    setFormData((prev) => ({
                      ...prev,
                      [input.name]: event.target.value,
                    }));
                  }}
                  isVisible={true}
                    />
                  // </div>
                )
              })
            }
            </div>
      ))
      } 
          <button
          type="button"
          onClick={addEducatorCenter}
          className="flex items-center justify-center mt-10"
        >
          <MaterialIcon
            codepoint="e145"
            className="p-2 border-rounded bg-black text-white mr-5"
          />{" "}
          Add Center
        </button>
        </div>
    )
}