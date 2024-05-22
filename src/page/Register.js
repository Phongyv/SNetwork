import "../css/Register.css"

function Register(){
    return (
        <>
     <div className="main-register">
        <div className="register-title">Register</div>
        <div className="register-form">
            <label >Email</label>
            <input className="register-email" type="email" placeholder="Email" />
            <label>Password</label>
            <input className="register-password" type="password" placeholder="Password" />
        </div>
        <div className="register-submit"></div>
     </div>
        </>
    )
}

export default Register
