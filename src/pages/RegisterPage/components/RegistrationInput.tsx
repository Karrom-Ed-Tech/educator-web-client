import { useEffect, useRef, useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "react-router-dom";

export interface RegistrationInputProps {
  title: string;
  name: string;
  placeholder?: string;
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
}

export default function RegistrationInput(props: RegistrationInputProps) {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [selectedOnce, setSelectedOnce] = useState(false);
  const [shake, setShake] = useState(false);
  const [query] = useSearchParams();

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

  return (
    <>
      {props.preview && (
        <img
          className="w-[10vw] mx-auto aspect-square object-cover"
          src={getPreviewSrc()}
        />
      )}
      <div
        className={twMerge(
          "relative flex items-center py-4 px-6 border-2 border-front border-opacity-20 mobile:flex-col mobile:items-start animate-[grow-in_300ms]",
          selectedOnce &&
            !inputRef.current.checkValidity() &&
            "border-red-500 border-opacity-75",
          shake && "animate-[error-shake_200ms_infinite]"
        )}
      >
        <p className="font-semibold">{props.title}</p>
        <input
          autoComplete={props.autoComplete}
          ref={inputRef}
          type={props.type || "text"}
          name={props.name}
          placeholder={props.placeholder}
          className={twMerge(
            "flex-1 outline-none selection:outline-none px-6 mobile:ml-0 mobile:mt-5 mobile:px-0 mobile:w-full",
            props.type === "checkbox" && "flex-none ml-5 w-5 h-5 mobile:ml-0"
          )}
          style={{ "--title-text": `"${props.title}"` } as React.CSSProperties}
          onChange={props.onChange}
          required={!props.optional}
          {...props.constraints}
          onBlur={() => {
            inputRef.current.value.length && setSelectedOnce(true);
          }}
        />

        {selectedOnce &&
          (inputRef.current.checkValidity() ? (
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
    </>
  );
}
