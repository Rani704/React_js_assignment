import { MoreVertical } from "lucide-react";

const Card = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition h-50 ">
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-[#1E1B4B]">Test</h3>
        <MoreVertical size={16} className="text-gray-400" />
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum is simply dummy text of the printing industry.
      </p>

      <div className="border-t border-gray-200 mt-10 pt-3">
        <p className="text-xs text-gray-400 ">Created On: 14/07/2025</p>
      </div>
    </div>
  );
};

export default Card;
