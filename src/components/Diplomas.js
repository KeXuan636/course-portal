import { Outlet, NavLink} from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas()
  return (
    <div className="container">
      <h1>Schools</h1>

      <ul className="diplomas">
        {diplomas.map( diploma => (
          <li key={diploma.id}>
            <NavLink 
                to={diploma.id}
                className={({ isActive }) => 
                    isActive ? "diploma-active" : null
                }
            >
              {diploma.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
