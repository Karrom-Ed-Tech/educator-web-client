import Navbar from "../../common/Navbar";
import Hero from "./components/Hero";

export default function HomePage() {
  return <>
    <Hero/>
    <div className="h-72 w-72 absolute bg-secondary right-5 top-60 -z-1 blur-3xl mobileSmall:h-60 mobileSmall:w-60"></div>
  </>;
}
