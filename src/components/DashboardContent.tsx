import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

interface Props {
  data: { created: string; type: string; content: string }[];
}

const DashboardContent = ({ data }: Props) => {
  return (
    <div className="mx-2">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-[1px] cursor-pointer">
              <th className="px-3 py-5 text-left font-medium">Data</th>
              <th className="px-6 py-3 text-left font-medium">Source</th>
              <th className="px-6 py-3 text-left font-medium">Type</th>
              <th className="px-6 py-3 text-left font-medium">Created</th>
              <th className="px-6 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="border-[1px] hover:bg-gray-100 ">
                <td className="px-6 py-4 whitespace-nowrap text-wrap">
                  {item.content}
                  {item.content.split(" ").length > 20 && (
                    <span>show more</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">--</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="border-[1px] px-[7px] py-[1px] font-[500] rounded-xl text-xs text-blue-500 border-blue-500 ">
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="font-[500] text-xs">{item.created}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center flex">
                  <button className="hover:bg-gray-200 rounded-full px-2 py-2">
                    <Edit />
                  </button>
                  <button className="hover:bg-gray-200/50 rounded-full px-2 py-2">
                    <Delete />
                  </button>
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
