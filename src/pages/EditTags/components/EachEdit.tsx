import { useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";

interface EachEditProps {
  heading: string;
  title: string;
  availableTags: string[];
  onTagChange: (updatedTags: string[]) => void;
}

export default function EachEdit(props: EachEditProps) {
  const [tags, setTags] = useState(props.availableTags);
  const [val, setVal] = useState("");
  const [exist , setExist] = useState<Boolean>(false);

  const handleRemoveTag = (index: number) => {
    const updatedTags = tags.filter((_, i) => i != index);
    setTags(updatedTags);
    props.onTagChange(updatedTags);
  };

  const handleAddTag = () => {
    const lowerCaseVal = val.toLowerCase();
    if (lowerCaseVal=="" || tags.some((tag) => tag.toLowerCase() === lowerCaseVal)) {
      setExist(true);
      return;
    }
    const updatedTags = [...tags, val];
    setTags(updatedTags);
    props.onTagChange(updatedTags);
  };
  return (
    <div className="mb-10 flex flex-col justify-center">
      <div className="text-l font-bold mb-5">{props.heading}</div>
      <div className="flex justify-between">
        <div className="text-md mb-5 basis-1/2">{props.title}</div>
        <div className="flex flex-col gap-y-5 basis-1/2">
          <div>
            <input
              className="border py-2 px-3 rounded-md"
              placeholder="Enter new tags!"
              onChange={(e) => {
                setExist(false)
                setVal((e.target as HTMLInputElement).value);
              }}
            />
            <span
              className="bg-primary text-back py-2 px-3 rounded-md cursor-pointer"
              onClick={handleAddTag}
            >
              Add
            </span>
          </div>
          {
            exist && 
            <span className="text-red-500">
                *{val} already exists.
            </span>
          }
          <div className="flex flex-wrap gap-5 my-10 py-5 px-3 bg-gray-200 rounded-lg h-48 max-h-30 overflow-y-scroll">
            {tags?.map((item, index) => {
              return (
                <div className="bg-gray-300 p-2 rounded-md flex justify-center text-sm max-h-10">
                  {item}
                  <span onClick={() => handleRemoveTag(index)} className="h-">
                    <MaterialIcon
                      codepoint="e5cd"
                      className="ml-5 cursor-pointer"
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
