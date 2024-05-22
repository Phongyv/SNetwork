import "../css/Login.css"

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
        
        </div>
     </div>
        </>
    )
}

export default Login
