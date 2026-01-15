import {Routes, Route } from "react-router-dom"

import Home from "./Home";
import Diplomas from "./Diplomas";
import Modules from "./Modules";
import ModuleDetails from "./ModuleDetails";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Republic Polytechnic"/>} />
        <Route path="diplomas" element={<Diplomas />} >
          <Route path=":diplomaId" element={<Modules />} >
            <Route path=":moduleId" element={<ModuleDetails />} />
          </Route>
          <Route index element={<h3>Select a diploma from above</h3>} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route 
          path="*" 
          element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        "&copy;2024" | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;