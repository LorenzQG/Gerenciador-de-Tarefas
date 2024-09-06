import "../Login/Login.css";
import "../Login/LoginMedia.css";
import api from "../../services/api";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Registro() {
    const titleInput = useRef();
    const descInput = useRef();
    const passwordInput = useRef();
    const navigate = useNavigate();
    
    async function postUser(e){
        e.preventDefault();
        await api.post("/users", {
            name: titleInput.current.value,
            email: descInput.current.value,
            password: passwordInput.current.value
        })
        navigate("/")
    }


    return(
        <main className="login-principal">
           <div className="login-main">
                <h1 className="login-logo">Registro</h1>
                <form className="login-form">
                    <input type="text" placeholder="Nome" ref={titleInput}/>
                    <input type="text" placeholder="Email" ref={descInput}/>
                    <input type="password" placeholder="Password" ref={passwordInput}/>
                    <button type="submit" className="btn-enter" onClick={postUser}>Registrar</button>
                </form>
                <div>
                   <span className="span">Já possui uma conta? <Link to="/" className="link">Clique aqui</Link></span> 
                </div>
           </div>
        </main>
    )
}