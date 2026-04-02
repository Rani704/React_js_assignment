import { NavLink } from "react-router-dom";
import {admin} from "../config/sidebarConfig"

const Admin = () => {
  return (
    <div>
        <p className="text-s text-gray-400  mt-1 mb-2 ">ADMIN</p>
        <div className="pl-5">
        {admin.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 text-sm cursor-pointer ${
                isActive
                  ? "text-purple-600 font-semibold bg-purple-100 rounded-md "
                  : "text-gray-600 hover:text-black"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>
      </div>
  )
}

export default Admin