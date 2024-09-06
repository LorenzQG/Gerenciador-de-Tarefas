import Home from "./Home";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  function onLogin(token) {
    setCookie("token", token, {
      path: "/", 
      maxAge: 28800,
      sameSite: "none",
    });
  }
  return (
    <>
      <CookiesProvider>
        <Router>
          <Routes>
            {cookies.token ? <Route path="/" element={<Home token={cookies.token} removeCookie={removeCookie}/>} /> : <Route path="/" element={<Login onLogin={onLogin} />} />}
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </Router>
      </CookiesProvider>
    </>
  );
}
