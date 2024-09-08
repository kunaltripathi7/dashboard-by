export interface Props {
  content: string;
}

const TooltipLeft = ({ content }: Props) => {
  //transition can be applied on opacity
  return (
    <div className="absolute invisible group-hover:visible left-[75px] top-4 text-nowrap bg-[#757575] shadow-lg opacity-0 transition-opacity group-hover:opacity-100 duration-300 px-2 py-1 text-white before:bg-[#757575] font-semibold text-xs before:h-3 before:w-3 before:absolute before:inset-0 before:left-[-4px] before:top-[6px] before:-rotate-45 tracking-wide text-[11px] rounded-md before:z-[-1] z-10">
      {content}
    </div>
  );
};

export default TooltipLeft;
