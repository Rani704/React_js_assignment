import MyProject from "./MyProject";
import Orchestrator from "./Orchestrator";
import Admin from "./Admin";

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-white border-r border-gray-200 px-4 py-4 overflow-y-auto">
      <MyProject />
      <Orchestrator />
      <Admin />
    </div>
  );
};

export default Sidebar;