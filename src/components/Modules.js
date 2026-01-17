import { useParams, NavLink, Outlet } from "react-router-dom";
import { getModules } from "../api";
import { useState } from "react";

export default function Modules() {
  const { diplomaId } = useParams();
  const modules = getModules(diplomaId);
  const [favourites, setFavourites] = useState([]);

  function toggleFavourite(module) {
    setFavourites(prev =>
      prev.includes(module.id)
        ? prev.filter(id => id !== module.id)
        : [...prev, module.id]
    );
  }

  return (
    <>
      <h2>{modules.name} Diploma</h2>

      <ul className="module-list">
        {modules.modules.map(module => (
          <li key={module.id} className="module-item">
            <NavLink to={module.id}>
              <p className="module-name">{module.name}</p>
              <p>{module.speaker.name}</p>
            </NavLink>

            <button onClick={() => toggleFavourite(module)}>
              {favourites.includes(module.id) ? "★ Saved" : "☆ Save"}
            </button>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
