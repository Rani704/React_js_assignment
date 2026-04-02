import { ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-sm text-gray-600 ">
      
      {/* Left */}
      <p className="font-semibold">6 rows</p>

      {/* Right */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
        
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Rows per page</span>
          <select className="border rounded px-2 py-1 text-sm bg-white">
            <option>10</option>
          </select>
        </div>

        {/* Page Info */}
        <span className="font-medium">Page 1 of 1</span>

        {/* Pagination Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">
            <ChevronsLeft size={16} />
          </button>
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">
            <ChevronLeft size={16} />
          </button>
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">
            <ChevronRight size={16} />
          </button>
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;