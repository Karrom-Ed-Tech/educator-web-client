import { Link } from "react-router-dom";

const navItems = [
  { title: "Pricing", to: "/pricing" },
  { title: "Features", to: "/features" },
  { title: "Learning Platform", to: "/app/download" },
];

function Navbar() {
  return (
    <nav className="flex justify-center py-8 p-page items-center bg-white shadow-black-500/100">
      <div className="text-3xl font-bold">Karrom</div>

      <div className="flex-1 flex justify-center gap-x-12">
        {navItems.map((item, i) => (
          <Link key={i} to={item.to} className="text-sm tracking-tight">
            {item.title}
          </Link>
        ))}
      </div>

      <div>
        <button className="p-3 px-5 border text-sm font-medium border-black">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
