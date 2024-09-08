import { ChevronDown } from "lucide-react";
import Delete from "../assets/icons/Delete";
import Edit from "../assets/icons/Edit";

interface Props {
  data: { created: string; type: string; content: string }[];
}

const DashboardContent = ({ data }: Props) => {
  return (
    <div className="mx-2">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="hidden sm:table-header-group">
            <tr className="border-[1px] cursor-pointer">
              <th className="px-3 py-3 text-left font-medium">Data</th>
              <th className="px-6 py-3 text-left font-medium">Source</th>
              <th className="px-6 py-3 text-left font-medium">Type</th>
              <th className="px-6 py-3 text-left font-medium">Created</th>
              <th className="px-6 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-[1px] gap-y-1 hover:bg-gray-100 flex flex-col sm:table-row items-start p-3 sm:p-0"
              >
                <td className="sm:px-6 sm:py-4 whitespace-nowrap text-wrap">
                  {item.content.split(" ").length > 30
                    ? item.content.split(" ").slice(0, 30).join(" ") + "...."
                    : item.content}
                  {item.content.split(" ").length > 30 && (
                    <span className="text-blue-600 text-xs sm:text-sm flex sm:flex-none gap-1 items-center cursor-pointer">
                      Show more
                      <ChevronDown className="h-3 w-3" />
                    </span>
                  )}
                </td>
                <td className="sm:px-6 sm:py-4 whitespace-nowrap text-center hidden sm:table-cell">
                  --
                </td>
                <td className="sm:px-6 sm:py-4 whitespace-nowrap text-center">
                  <span className="border-[1px] px-[7px] py-[1px] font-[500] rounded-xl text-xs sm:text-blue-500 bg-gray-200 sm:bg-white  sm:border-blue-500  ">
                    {item.type}
                  </span>
                </td>
                <td className="sm:px-6 sm:py-4 whitespace-nowrap text-center hidden sm:table-cell">
                  <span className="font-[500] text-xs">{item.created}</span>
                </td>
                <td className="sm:px-6 sm:py-4 whitespace-nowrap flex sm:table-cell self-end mt-2 sm:mt-0 ">
                  <div className="w-full flex gap-[160px]">
                    <div className="mr-auto sm:hidden">
                      <h6 className="text-xs underline mb-2">View Source</h6>
                      <p className="text-gray-600 text-xs">
                        1,722,643,200 days ago
                      </p>
                    </div>
                    <div>
                      <button className="hover:bg-gray-200 rounded-full px-2 py-2">
                        <Edit className="h-5 w-5 sm:h-full sm:w-full" />
                      </button>
                      <button className="hover:bg-gray-200/50 rounded-full px-2 py-2">
                        <Delete className="h-5 w-5 sm:h-full sm:w-full" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;
