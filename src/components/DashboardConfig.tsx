import { History, Plus } from "lucide-react";
import Messages from "../assets/icons/Messages";
import SearchForm from "./SearchForm";

const buttonClasses =
  "uppercase flex items-center px-3 gap-x-3 rounded-md shadow-md text-nowrap text-[16px] font-[500] h-10";

const DashboardConfig = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex text-white mt-4 justify-center gap-x-2">
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
            text-[#FA2871] border-[1px] border-[#FA2871] hover:bg-[#FFF7F9] shadow-none`}
        >
          <Messages fill="#FA2871" />
          <span>Ground Truths</span>
        </button>
      </div>
      <div className="h-[2px] w-[960px] bg-[#808080]" />
      <SearchForm />
    </div>
  );
};

export default DashboardConfig;
