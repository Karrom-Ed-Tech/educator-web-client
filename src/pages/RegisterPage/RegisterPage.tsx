import { useSearchParams } from "react-router-dom";
import Hero from "./components/Hero";

export default function RegisterPage() {
  const [query] = useSearchParams();

  return (
    <>
      <Hero />
    </>
  );
}
