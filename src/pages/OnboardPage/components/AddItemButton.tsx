import React from "react";
import MaterialIcon from "../../../common/MaterialIcon";

interface clickFunctionProps {
    onClick : () => void;
}

const AddItemButton = ({ onClick }: clickFunctionProps) => {
  return (
    <button type="button" onClick={onClick} className="flex items-center justify-center">
      <MaterialIcon codepoint="e145" className="p-2 border-rounded bg-black text-white mr-5" /> Add Item
    </button>
  );
};

export default AddItemButton;
