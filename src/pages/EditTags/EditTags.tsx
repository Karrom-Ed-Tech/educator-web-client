import { useState } from "react";
import EachEdit from "./components/EachEdit";

const data = [
  {
    heading: "Age Groups",
    title: "Dropdown for activity Suitable for:",
    availableTags: ["5-10", "10-20", "<30", ">30 & <50"],
  },
  {
    heading: "Teacher Activities",
    title: "Dropdown for teacher activity options:",
    availableTags: [
      "Swimming",
      "Running",
      "Dancing",
      "Piano",
      "Piano",
      "Piano",
      "Piano",
      "Piano",
      "Piano",
      "Piano",
    ],
  },
];

export default function EditTags() {
  const [tagData, setTagData] = useState(data);

  const handleTagChange = (index: number, updatedTags: string[]) => {
    setTagData((prevTagData) => {
      const updatedTagData = [...prevTagData];
      updatedTagData[index].availableTags = updatedTags;
      return updatedTagData;
    });
  };

  const handleTagsUpdate = async () => {
    console.log(tagData);
  };
  return (
    <div className="p-page">
      <div className="text-2xl font-bold mb-10">Edit drop downs </div>
      {data.map((item, index) => {
        return (
          <EachEdit
            heading={item.heading}
            title={item.title}
            availableTags={item.availableTags}
            onTagChange={(updatedTags) => handleTagChange(index, updatedTags)}
          />
        );
      })}
      <div className="text-right">
        <button
          className="py-2 px-3 bg-front text-back rounded-md hover:bg-primary"
          onClick={handleTagsUpdate}
        >
          Update tags
        </button>
      </div>
    </div>
  );
}
