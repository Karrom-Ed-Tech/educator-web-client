const formData = [
    {
        heading:"Company/Brand Details",
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
                constraints : {accept : "^[0-9]+$"}
              },
              {
                name: "state",
                title: "state",
                type: "text",
              },
              {
                name: "social",
                type: "dropdown",
                title: "Social Media handle",
                placeholder: "Select from the below dropdown",
                dropdown: ["Instagram", "Discord", "Facebook", "LinkedIn"],
              },
        ]
    }
]

export default function EducatorPage(){
    return (
        <div>

        </div>
    )
}