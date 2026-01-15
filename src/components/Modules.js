import { useParams, NavLink, Outlet } from "react-router-dom";
import { getModules } from "../api";

export default function Modules() {
  const { diplomaId } = useParams();
  const modules = getModules(diplomaId);

  return (
    <>
      <h2>{modules.name} Diploma</h2>

      <ul className="module-list"> 
        {modules?.modules.map( module=> (
          <li key={module.id} className="module-item">
            <NavLink
              to={module.id}
              className={({ isActive }) =>
                isActive ? "module-active" : ""
              }
            >
              <p className="module-name">{module.name}</p>
              <p>{module.speaker.name} | {module.speaker.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
