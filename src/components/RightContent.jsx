import { useState } from "react";
import { Search } from "lucide-react";
import Card from "./Card";
import Footer from "./Footer";
import CreateButton from "./CreateButton";
import CreateKnowledgeBaseForm from "./Pages/CreateKnowledgeBaseForm";

const RightContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full px-3 sm:px-4 relative flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 my-2">
        
        <h2 className="font-bold text-lg sm:text-xl text-gray-800">
          Knowledge Base
        </h2>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              placeholder="Search..."
              className="w-full bg-gray-100 px-3 py-2 pl-9 rounded-md text-sm border border-gray-200 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <CreateButton onClick={() => setIsOpen(true)} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 border border-gray-200 rounded-md p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className=" shrink-0 mt-2">
        <Footer />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full 
        w-full sm:w-[380px] md:w-[400px] lg:w-[420px]
        bg-white shadow-2xl border-l z-50 
        transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CreateKnowledgeBaseForm onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default RightContent;