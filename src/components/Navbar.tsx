import { ChevronDown } from "lucide-react";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  return (
    <div className="border-stone-300/70 border-b-[1px] flex shadow-md fixed bg-white md:w-[calc(100%-64px)] left-16">
      <div className="w-[500px] mx-5 leading-none">
        <h1 className="text-[1.5rem] font-[500]">Chatbot Mind Map</h1>
        <p className="text-[0.79rem] leading-[1.21rem] mt-[2px]">
          This is the brain and the memory of the chatbot. You can add, edit and
          analyse the source data being used to answer user queries from here
        </p>
      </div>
      <div className="ml-auto flex items-center gap-x-8">
        <button className="px-4 py-[7px] border-[#2885FB] border-[1px] text-[#2872FA] rounded-[5px] hover:bg-[#F7F9FF] uppercase font-[500]">
          Guided Tour
        </button>
        <button className="uppercase text-lg flex items-center gap-2">
          Select Org{" "}
          <ChevronDown className="text-[#2872FA] h-[20px] w-[20px]" />
        </button>
        <div className="mr-4">
          <UserAvatar src="https://api.dicebear.com/5.x/micah/svg?seed=beyondchat@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
