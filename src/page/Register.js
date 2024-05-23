import "../css/Register.css"
import { Link } from "react-router-dom"
import { registerSubmit } from "../firebase"
function Register(){
    return (
        <>
     <div className="main-register">
        <div className="register-title">Register</div>
        <div className="register-form">
            <label >Email</label>
            <input className="register-email" id="register-email" type="email" placeholder="Email" />
            <label>Password</label>
            <input className="register-password" id="register-password" type="password" placeholder="Password" />
        </div>
        <div className="register-submit">
        <Link className="register-submit-button" to={""} onClick={()=>{registerSubmit()}}>Register</Link>
            <Link className="register-login-button" to={"/login"}>Login</Link>
        </div>
     </div>
        </>
    )
}

export default Register
