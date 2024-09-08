import { useState } from "react";
import Chats from "../assets/icons/Chats";
import Leads from "../assets/icons/Leads";
import MindMap from "../assets/icons/Mindmap";
import People from "../assets/icons/People";
import Settings from "../assets/icons/Settings";
import TooltipLeft from "./TooltipLeft";

const NavigationSidebar = () => {
  const navOptions = [
    { component: Chats, description: "Explore Chats" },
    { component: Leads, description: "Business Leads" },
    { component: MindMap, description: "View Mind Map" },
    { component: People, description: "Manage Team" },
    { component: Settings, description: "Configure Chatbot" },
  ];
  const [isSelected, setIsSelected] = useState(3);
  return (
    <div className="flex flex-col items-center py-[10px]">
      {navOptions.map((Option, index) => (
        <button
          className={`w-full flex justify-center py-[14px] relative group ${
            isSelected === index + 1
              ? "bg-sky-100 hover:bg-sky-100/70"
              : "hover:bg-gray-50"
          }`}
          onClick={() => setIsSelected(index + 1)}
          key={index}
        >
          <Option.component
            fill={isSelected === index + 1 ? "#2872FA" : "grey"}
          />
          <TooltipLeft content={Option.description} />
        </button>
      ))}
    </div>
  );
};

export default NavigationSidebar;
