/* eslint-disable react/prop-types */
const CreateButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#4F46E5] hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm flex items-center gap-1 whitespace-nowrap"
    >
      <span className="hidden sm:inline">+ Create New</span>
      <span className="sm:hidden text-lg">+</span>
    </button>
  );
};

export default CreateButton;