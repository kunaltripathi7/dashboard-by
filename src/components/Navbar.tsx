import { ChevronDown, Menu } from "lucide-react";
import UserAvatar from "./UserAvatar";
import Info from "../assets/icons/Info";

const Navbar = () => {
  return (
    <div className="border-stone-300/70 border-b-[1px] flex shadow-md fixed bg-white md:w-[calc(100%-64px)] md:left-16 w-full py-2 sm:py-0">
      <div className="md:w-[500px] mx-5 leading-none flex sm:flex-col items-center sm:items-start gap-10 sm:gap-0">
        <Menu className="sm:hidden block" />
        <div className="flex items-center gap-3">
          <h1 className="sm:text-[1.5rem] font-[500] text-base py-2 sm:py-0">
            Chatbot Mind Map
          </h1>
          <span className="block sm:hidden">
            <Info fill="#2872FA" />
          </span>
        </div>
        <p className="text-[0.79rem] leading-[1.21rem] mt-[2px] hidden md:block">
          This is the brain and the memory of the chatbot. You can add, edit and
          analyse the source data being used to answer user queries from here
        </p>
      </div>
      <div className="ml-auto flex items-center gap-x-6 mr-2">
        <button className="px-4 py-[7px] border-[#2885FB] border-[1px] text-[#2872FA] rounded-[5px] hover:bg-[#F7F9FF] uppercase font-[500] hidden sm:block">
          Guided Tour
        </button>
        <button className="uppercase sm:text-lg flex items-center gap-2 text-xs">
          Select Org
          <ChevronDown className="text-[#2872FA] sm:h-[20px] sm:w-[20px] h-4 w-4" />
        </button>
        <div className="mr-4 hidden sm:block">
          <UserAvatar src="https://api.dicebear.com/5.x/micah/svg?seed=beyondchat@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
