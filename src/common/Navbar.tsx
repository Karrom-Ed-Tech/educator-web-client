import { Link } from "react-router-dom";
import MaterialIcon from "./MaterialIcon";
import { useState } from "react";

const navItems = [
  { title: "Pricing", to: "/pricing" },
  { title: "Features", to: "/features" },
  { title: "Learning Platform", to: "/app/download" },
];

function Navbar() {
  const [open , setOpen] = useState(false)
  const toggleNav = () => {
    setOpen(!open)
  }
  return (
    <nav className="flex justify-between py-8 p-page items-center bg-white shadow-black-500/100">
      <Link to="/" className="text-3xl font-bold">
        Karr
        <span className="text-primary">o</span>m
      </Link>

      <div className={`flex-1 flex justify-center gap-x-12 mobile:${open ? "" : "hidden"} mobile:flex-col mobile:absolute mobile:w-11/12 mobile:top-24 mobile:gap-y-3 mobile:text-3xl mobile:py-10 mobile:px-5 mobile:bg-black mobile:text-white mobile:bg-opacity-80 rounded-bl-md`}>
  {navItems.map((item, i) => (
    <Link key={i} to={item.to} className="text-sm tracking-tight hover:bg-black mobile:py-5 mobile:px-3 ease-in duration-200 rounded-md">
      {item.title}
    </Link>
  ))}
</div>

        <div className="flex items-center">
        <div>
        <Link
          to="/register"
          className="p-3 px-5 border text-sm font-medium border-front duration-300 hover:bg-front hover:text-back widescreen:mr-5"
        >
          Get Started
        </Link>
      </div>

      <div className="mobile-min:hidden cursor-pointer scale-125 " onClick={toggleNav}>
        {
          open ? <MaterialIcon codepoint="e5cd" className="text-2xl" /> :
          <MaterialIcon codepoint="e5d2" className="text-2xl" />
        }
      </div>
        </div>
    </nav>
  );
}

export default Navbar;
