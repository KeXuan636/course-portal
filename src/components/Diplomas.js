import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";
import { useState } from "react";

export default function Diplomas() {
  const diplomas = getDiplomas();
  const [search, setSearch] = useState("");

  const filteredDiplomas = diplomas.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Schools</h1>

      <input
        type="text"
        placeholder="Search diploma..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul className="diplomas">
        {filteredDiplomas.map(diploma => (
          <li key={diploma.id}>
            <NavLink to={diploma.id}>
              {diploma.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
