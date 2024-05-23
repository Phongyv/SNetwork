import "../css/Login.css"
import { Link } from "react-router-dom"
import { loginSubmit } from "../firebase"

function Login(){
    return (
        <>
     <div className="main-login">
        <div className="login-title">Login</div>
        <div className="login-form">
        <label>Email</label>
            <input className="login-email" type="email" placeholder="Email" />
            <label>Password</label>
            <input className="login-password" type="password" placeholder="Password" />
        </div>
        <div className="login-submit">
            <Link className="login-submit-button" id="login-email" onClick={()=>{loginSubmit()}}>Login</Link>
            <Link className="login-register-button" id="login-password" to={"/register"}>Register</Link>
        </div>
     </div>
        </>
    )
}

export default Login
