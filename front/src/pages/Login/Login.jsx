import "./Login.css";
import "./LoginMedia.css";
import "../../reset.css";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useRef } from "react";
export default function Login({onLogin}) {
  const emailInput = useRef();
  const passwordInput = useRef();

  async function login(e) {
    e.preventDefault();
    const response = await api.post("/users/login", {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })

    onLogin(response.data.token);
  }

  return (
    <main className="login-principal">
      <div className="login-main">
        <h1 className="login-logo">Login</h1>
        <form className="login-form" onSubmit={login}>
          <input type="text" placeholder="Email" ref={emailInput} />
          <input type="password" placeholder="Password" ref={passwordInput} />
          <button type="submit" className="btn-enter">
            Login
          </button>
        </form>
        <span className="span">
          Ainda não tem uma conta?
          <Link to="/registro" className="link">
            Clique Aqui
          </Link>
        </span>
      </div>
    </main>
  );
}
