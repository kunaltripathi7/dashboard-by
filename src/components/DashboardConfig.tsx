import { History, Plus } from "lucide-react";
import Messages from "../assets/icons/Messages";
import SearchForm from "./SearchForm";

const buttonClasses =
  "uppercase flex items-center px-3 gap-x-3 text-xs rounded-md shadow-md text-nowrap sm:text-[16px] font-[500] h-10";

const DashboardConfig = () => {
  return (
    <div className="flex flex-col items-center max-w-[960px] gap-4 mt-20 sm:mt-0 ">
      <div className="flex text-white mt-4 justify-center gap-2 flex-wrap">
        <button className={`${buttonClasses} bg-[#2872FA] hover:bg-[#333BC7]`}>
          <Plus className="w-[18px] h-[18px]" />
          <span>Add Data</span>
        </button>
        <button className={`${buttonClasses} bg-[#FA2871] hover:bg-[#98004C]`}>
          <History className="w-[18px] h-[18px]" />
          <span>Data Training Status</span>
        </button>
        <button
          className={`${buttonClasses}
            text-[#FA2871] border-[1px] border-[#FA2871] hover:bg-[#FFF7F9]`}
        >
          <Messages fill="#FA2871" />
          <span>Ground Truths</span>
        </button>
      </div>
      <div className="h-[2px] w-10/12 sm:w-full bg-[#808080]" />
      <SearchForm />
    </div>
  );
};

export default DashboardConfig;
