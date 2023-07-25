import { useEffect, useRef, useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";

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
  };
  errorCheckFlag?: boolean;
  value?: any;
}

export default function RegistrationInput(props: RegistrationInputProps) {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [selectedOnce, setSelectedOnce] = useState(false);
  const [shake, setShake] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const selectedOptionRef = useRef<HTMLDivElement>(null);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
    }
  }, []);

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

  return (
    <div
      className={twMerge(
        "relative flex items-center py-4 px-6 border-2 border-front border-opacity-20",
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
            "flex-1 outline-none selection:outline-none px-6",
            props.type === "checkbox" && "flex-none ml-5 w-5 h-5"
          )}
          style={{ "--title-text": `"${props.title}"` } as React.CSSProperties}
          onChange={props.onChange}
          required={!props.optional}
          {...props.constraints}
          onBlur={() => {
            inputRef.current.value.length && setSelectedOnce(true);
          }}
        />
      )}

      {props.dropdown && (
        <div
          className="ml-5 h-5 w-5 flex-1 px-6 flex items-center hover:cursor-pointer relative"
          onClick={() => {
            setShowDropdown(true);
          }}
          ref={dropdownRef}
        >
          {" "}
          <div className="text-secondary">
            {props.multiple && selectedOptions.length > 0
              ? selectedOptions.join(", ")
              : selectedOptions.length === 1
              ? selectedOptions[0]
              : props.placeholder}
          </div>
          <MaterialIcon codepoint="e5cf" className="text-secondary text-2xl" />
          <div
            className={`flex flex-col absolute top-10 left-6 z-10 bg-secondary w-max text-back pl-4 pt-2 pb-3 min-w-[30%] rounded-xl backdrop-blur-xl ${
              showDropdown ? "" : "hidden"
            }`}
          >
            {props.dropdown?.map((item, i) => (
              <div
                onClick={() => handleDropdownClick(item)}
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
        ((inputRef.current.checkValidity() || props.type == "dropdown") ? (
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
  );
}
