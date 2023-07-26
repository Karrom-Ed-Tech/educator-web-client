import React, { useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";

interface UserData {
  name: string;
  mobile: string;
  address: string;
  website: string;
  email: string;
  password: string;
  image: string;
  experience: string;
  qualification: string;
  affliation: string;
  teacherCount: string;
  tourVideoUrl: string;
  mainlyTeaches: string;
}
type UserDataKeys = keyof UserData;

const user = {
  name: "Anshu Joshi",
  mobile: "7008513816",
  address: "Near Hazira Police station",
  website: "http://localhost:5173/register",
  email: "levitation@levitation.in",
  password: "levitation",
  image: "C:\\fakepath\\profile.jpg",
  experience: "5",
  qualification: "Btech CSE",
  // degree: "C:\\fakepath\\Screenshot from 2023-07-20 00-31-30.png",
  affliation: "IIIT Gwalior",
  // affliationProof: "C:\\fakepath\\Screenshot from 2023-07-20 23-59-47.png",
  teacherCount: "5",
  tourVideoUrl: "http://localhost:5173/register",
  mainlyTeaches: "Classsical Dance , Singing",
};
export default function EditEducatorDetails() {
  const [imageUrl, setImageUrl] = useState<string>("/images/profile.jpg");
  const [formData, setFormData] = useState<UserData>(user);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    setFormData({ ...formData, image: imageUrl });
  };

  const handleSubmit = async () => {
    console.log(formData);
  };

  return (
    <div className="p-page">
      <div className="flex items-center text-2xl gap-x-3">
        <MaterialIcon codepoint="e745" className="text-primary text-4xl" />
        Edit Educator Details
        <div className="w-3/5 h-0.5 bg-primary"></div>
      </div>
      <div className="my-12 flex flex-col gap-y-5 items-center justify-center">
        <div className="flex relative">
          <img
            src={imageUrl}
            className="w-36 h-36 object-cover border-b-4 border-r-4 border-primary"
            alt="Profile"
          />
          <label
            htmlFor="uploadImage"
            className="text-primary absolute bg-secondary p-0.5 cursor-pointer"
          >
            <MaterialIcon codepoint="e3c9" />
          </label>
          <input
            id="uploadImage"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex flex-col items-center w-full gap-y-4">
          {Object.keys(formData).map((key, idx) => {
            const userDataKey = key as UserDataKeys;
            return (
              <div className="flex w-full justify-center">
                <div className="basis-1/2">{key} :</div>
                <div>
                  <input
                    type="text"
                    className="border-2 border-primary rounded-md p-1"
                    value={formData[userDataKey]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [userDataKey]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-5 border px-2 py-3 hover:bg-secondary hover:text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
