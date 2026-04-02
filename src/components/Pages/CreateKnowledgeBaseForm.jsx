/* eslint-disable react/prop-types */
const CreateKnowledgeBaseForm = ({ onClose }) => {
  return (
    <div className="h-full  bg-white relative">
      
      {/* Header */}
      <div className="flex items-start justify-between px-6 py-4 border-b">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Create New Knowledge Base
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Best for questions from documents, websites and text files.
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>
      </div>

      {/* Form */}
      <div className=" px-6 py-1 space-y-2">
        
        {/* Name */}
        <div className="space-y-1 ">
          <label className="text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <p className="text-xs text-gray-400">
            Cannot be edited later
          </p>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows={3}
            placeholder="Enter description"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          />
        </div>

        {/* Vector Store */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Vector Store <span className="text-red-500">*</span>
          </label>
          <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Qdrant</option>
          </select>
        </div>

        {/* Embedding Model */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            LLM Embedding Model <span className="text-red-500">*</span>
          </label>
          <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>text-embedding-ada-002</option>
          </select>
        </div>

      </div>

      {/* Footer */}

    <div className="absolute bottom-6 right-2 bg-white">
  <button className=" bg-[#4F46E5] hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm">
    Create
  </button>
</div>
    </div>
  );
};

export default CreateKnowledgeBaseForm;