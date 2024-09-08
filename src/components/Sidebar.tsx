import NavigationSidebar from "./NavigationSidebar";
import Menu from "../assets/icons/menu.svg";

const Sidebar = () => {
  return (
    <div className="w-16 h-full border-[1px] border-stone-300/70 md:block hidden fixed">
      <div className="h-16 relative flex justify-center items-center ml-2 border-b-[1px] border-stone-300/70 group">
        <button className="group hover:bg-[#F5F5F5] p-2 rounded-full">
          <Menu />
        </button>
        <div className="absolute inset-0 left-3 top-20 hidden w-[112px] py-[13px] bg-[#757575] border font-semibold shadow-lg group-hover:flex rounded-md text-[11px] justify-center items-center text-white before:bg-[#757575] before:h-3 before:w-3 before:absolute before:inset-0 before:left-4 before:top-[-4px] before:-rotate-45 tracking-wide z-40">
          Open Left Drawer
        </div>
      </div>

      <NavigationSidebar />
    </div>
  );
};

export default Sidebar;
