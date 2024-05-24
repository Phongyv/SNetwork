import "../css/Register.css"
import { Link } from "react-router-dom"
import { registerSubmit } from "../firebase"
function Register(){
    return (
        <>
     <div className="main-register">
        <div className="register-title">Đăng Ký</div>
        <div className="register-form">
            <label >Email</label>
            <input className="register-email" id="register-email" type="email" placeholder="Email" />
            <label>Mật Khẩu</label>
            <input className="register-password" id="register-password" type="password" placeholder="Password" />
        </div>
        <div className="register-submit">
        <Link className="register-submit-button" to={""} onClick={()=>{registerSubmit()}}>Đăng Ký</Link>
            <Link className="register-login-button" to={"/login"}>Đăng Nhập</Link>
        </div>
     </div>
        </>
    )
}

export default Register
