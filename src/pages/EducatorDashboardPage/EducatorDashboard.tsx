import MaterialIcon from "../../common/MaterialIcon";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

export default function EducatorDashboard() {
  return (
    <div className="mt-10 mb-32 p-page">
      <div className="flex items-center text-3xl gap-x-5">
        <MaterialIcon codepoint="e88e" className="text-primary" />
        Educator Details
        <div className="w-[65vw] h-0.5 bg-primary"></div>
      </div>
      <Hero />
      <Nav/>
    </div>
  );
}
