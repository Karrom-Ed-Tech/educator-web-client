import { useState } from "react";
import EducatorRequests from "./components/EducatorRequests";
import ViewEducators from "./components/ViewEducators";
import Logs from "./components/Logs";
import MaterialIcon from "../../common/MaterialIcon";

interface SideNavItem {
  icon: string;
  title: string;
}
const sideNavItems: Array<SideNavItem> = [
  {
    icon: "e7f0",
    title: "Verify Educators",
  },
  {
    icon: "e8ef",
    title: "View Educators",
  },
  {
    icon: "ef6e",
    title: "Logs",
  },
];

export default function AdminPage() {
  const [selectedItem, setSelectedItem] = useState<Number>(0);
  return (
    <div className="flex min-h-screen mb-32">
      <div className="flex flex-col h-full justify-start p-3 bg-white w-full basis-1/4 p-page">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl underline decoration-secondary">Admin</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {sideNavItems.map((item: SideNavItem, index: number) => {
                return (
                  <li
                    className={`rounded-sm ${
                      index === selectedItem
                        ? "bg-secondary text-white px-3 py-2 rounded-xl"
                        : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="flex items-center p-2 pl-0 space-x-3 rounded-md"
                      onClick={() => setSelectedItem(index)}
                    >
                      <span className="w-6 h-6">
                        <MaterialIcon
                          codepoint={item.icon}
                          className="text-primary"
                        />
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {selectedItem == 0 ? (
        <EducatorRequests />
      ) : selectedItem == 1 ? (
        <ViewEducators />
      ) : (
        <Logs />
      )}
    </div>
  );
}
