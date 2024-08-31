import Home from "./Home";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </>
  );
}
