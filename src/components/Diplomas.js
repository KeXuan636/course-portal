import { Outlet, Link, NavLink} from "react-router-dom";
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
              className={({ isActive }) => 
                isActive ? "diploma-active" : null
              }
              to={diploma.id}
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
