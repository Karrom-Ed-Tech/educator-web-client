import { useEffect, useState } from "react";
import MaterialIcon from "./MaterialIcon";
import { twMerge } from "tailwind-merge";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  function setVisibilityByScrollPosition() {
    setVisible(window.scrollY > window.innerHeight);
  }

  useEffect(() => {
    setVisibilityByScrollPosition();
    window.addEventListener("scroll", setVisibilityByScrollPosition);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 p-10">
      <button
        className={twMerge(
          "bg-primary w-12 h-12 shadow-lg z-[99] rounded-full aspect-square duration-300",
          visible ? "scale-100" : "scale-0 pointer-events-none"
        )}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <MaterialIcon codepoint="e5ce" className="text-4xl text-back" />
      </button>
    </div>
  );
}
