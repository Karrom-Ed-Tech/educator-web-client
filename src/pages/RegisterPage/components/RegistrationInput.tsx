import { useEffect, useRef, useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "react-router-dom";

export interface RegistrationInputProps {
  title: string;
  name: string;
  placeholder?: string;
  dropdown?: string[];
  multiple?: boolean;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  optional?: boolean;
  constraints?: {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    accept?: string;
  };
  preview?: boolean;
  errorCheckFlag?: boolean;
  value?: any;
  multipleImages?: boolean;
  onSelectionChange?: (selectedItem: string) => void;
  // lengthHalf?: Boolean;
  lengthDivide?:number;
  isVisible?:Boolean
}

export default function RegistrationInput(props: RegistrationInputProps) {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [selectedOnce, setSelectedOnce] = useState(false);
  const [shake, setShake] = useState(false);
  const [query] = useSearchParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const selectedOptionRef = useRef<HTMLDivElement>(null);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleDropdownClick = (item: string) => {
    if (props.multiple) {
      const isSelected = selectedOptions.includes(item);
      if (isSelected) {
        setSelectedOptions(
          selectedOptions.filter((selected) => selected !== item)
        );
      } else {
        setSelectedOptions([...selectedOptions, item]);
      }
    } else {
      setSelectedOptions([item]);
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setShake(false);
    }, 800);
  }, [shake]);

  useEffect(() => {
    if (props.errorCheckFlag) {
      setSelectedOnce(true);
      setShake(!inputRef.current.checkValidity());
    }
  }, [props.errorCheckFlag]);

  useEffect(() => {
    if (props.value) {
      inputRef.current.value = props.value;
      setSelectedOnce(true);
    } else {
      if (props.name === "email") {
        inputRef.current.value = query.get("email") || "";
      }
    }
  }, []);

  function getPreviewSrc() {
    if (inputRef.current && inputRef.current.files) {
      return URL.createObjectURL(inputRef.current.files[0]);
    }
    return "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg";
  }
  function handleImageSelection(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files) {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setSelectedImages((prevImages) => [...prevImages, ...urls]);
      event.target.value = "";
    }
  }

  useEffect(() => {
    const handleClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const filteredOptions = props.dropdown
    ? props.dropdown.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className={`${
      props.lengthDivide
        ? `basis-1/${props.lengthDivide} mb-5 myCommonStyle`
        : `w-full mb-5 ${!props.isVisible ? "hidden": ""}`
    }`}>
      {props.preview && (
        <img
          className="w-[10vw] mx-auto aspect-square object-cover"
          src={getPreviewSrc()}
        />
      )}
      <div
        className={twMerge(
          "relative flex items-center py-4 px-6 border-2 border-front border-opacity-20 mobile:flex-colmobile:items-start animate-[grow-in_300ms]",
          selectedOnce &&
            !inputRef.current.checkValidity() &&
            "border-red-500 border-opacity-75",
          shake && "animate-[error-shake_200ms_infinite]"
        )}
      >
        <p className="font-semibold">{props.title}</p>
        {props.type != "dropdown" && (
          <input
            autoComplete={props.autoComplete}
            ref={inputRef}
            type={props.type || "text"}
            name={props.name}
            placeholder={props.placeholder}
            className={twMerge(
              "flex-1 outline-none selection:outline-none px-6 mobile:ml-0 mobile:mt-5 mobile:px-0 mobile:w-full ",
              props.type === "checkbox" && "flex-none ml-5 w-5 h-5 mobile:ml-0"
            )}
            style={
              { "--title-text": `"${props.title}"` } as React.CSSProperties
            }
            onChange={props.onChange}
            required={!props.optional}
            {...props.constraints}
            onBlur={() => {
              inputRef.current.value.length && setSelectedOnce(true);
            }}
          />
        )}

        {props.multipleImages && (
          <div>
            <div className="flex gap-2 mt-2">
              {selectedImages.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Selected Image ${index + 1}`}
                  className="w-16 h-16 object-cover rounded"
                />
              ))}
            </div>
            <button
              type="button"
              className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.multiple = true;
                input.accept = "image/*";
                input.addEventListener("change", handleImageSelection as any);
                document.body.appendChild(input);
                input.click();
                document.body.removeChild(input);
              }}
            >
              Add More Images
            </button>
          </div>
        )}

        {props.dropdown && (
          <div
            className="ml-5 h-5 w-5 flex-1 px-6 flex items-center hover:cursor-pointer relative"
            onClick={() => {
              setShowDropdown(true);
            }}
            ref={dropdownRef}
          >
            <MaterialIcon
              codepoint="e5cf"
              className="text-secondary text-2xl"
            />
            <div className="text-secondary flex gap-x-3 flex-wrap">
              {/* {props.multiple && selectedOptions.length > 0
                ? selectedOptions.join(", ")
                : selectedOptions.length === 1
                ? selectedOptions[0]
                : props.placeholder} */}
              {props.multiple && selectedOptions.length > 0
                ? selectedOptions.map((item, i) => (
                    <div key={i} className="bg-gray-200 px-2 py-1 rounded-full">
                      {item}
                    </div>
                  ))
                : selectedOptions.length === 1
                ? selectedOptions[0]
                : props.placeholder}
            </div>
            <div
              className={`flex flex-col absolute top-10 left-6 z-10 bg-secondary w-max text-back px-4 pt-2 pb-3 min-w-[30%] rounded-xl backdrop-blur-xl ${
                showDropdown ? "" : "hidden"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="p-2 mb-2 bg-back border border-back rounded-lg text-front focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
              {filteredOptions.map((item, i) => (
                <div
                  onClick={() => {
                    props.onSelectionChange && props.onSelectionChange(item);
                    handleDropdownClick(item);
                  }}
                  key={i}
                  className={`pt-4 border-b border-opacity-40 border-back pb-1 hover:bg-back hover:text-secondary px-2 duration-300 ease-in-out items-center flex gap-x-2`}
                >
                  {props.multiple && (
                    <input
                      type="checkbox"
                      className={`w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:text-secondary dark:focus:text-secondary dark:ring-offset-gray-800 focus:ring-2 dark:text-secondary dark:border-gray-600`}
                      checked={selectedOptions.includes(item)}
                      readOnly
                    />
                  )}
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedOnce &&
          (inputRef.current.checkValidity() || props.type == "dropdown" ? (
            <MaterialIcon
              codepoint="e876"
              className={twMerge(
                "text-primary",
                (false || props.type === "checkbox") && "hidden"
              )}
            />
          ) : (
            <div className="flex flex-col items-center text-red-500 bg-background absolute top-0 left-1 -translate-y-1/2 px-2">
              <p className="text-xs">{inputRef.current.validationMessage}</p>
            </div>
          ))}

        {/* <div className="absolute px-1 top-0 left-2 text-xs text-front -translate-y-1/2 bg-background z-1 peer-focus:text-primary">
        {props.title}
      </div> */}
      </div>
    </div>
  );
}
