import '../css/Main.css'
import { Link } from 'react-router-dom';

function Main(){

return(
<>

<div className="body" >
    <div className='content'>
    <img className="content-img" src="./logonofont.png" alt=""></img>

    <div className='text'>
        <h1>SNetwork</h1>
        <h2>SNetwork is a decentralized social networking platform that aims to provide users with control over their own data and privacy</h2>
        <h3>SNetwork enables users to securely connect with others, share content, and engage in conversations without the fear of data breaches or manipulation by third parties. With a strong focus on security and transparency, SNetwork seeks to revolutionize the way social media operates, putting the power back in the hands of the users.</h3>
    </div>
    </div>
    <div className='register'>
    <Link className='register-button' to="/login">Login</Link>
    <Link className='register-button' to="/register">Register</Link>    
    </div>
       
</div>
<div className="footer" >
<div className="footer-context">
<ul>
    <li>Snetwork</li>
    <li>While using SNetwork, you agree to have read and accepted our terms of use, cookie and privacy policy.</li>
    <li>Copyright 2004-2024 by Refsnes Data.</li>
    <li>All Rights Reserved. SNetwork is Powered by Phongyv</li>
    <li>Contact:phongyv33333@gmail.com</li>
</ul> 
</div>
<div className="footer-image">
    <img className="footer-img" src="./logonofont.png" alt=""></img>
    <div className="footer-link">
        <ul>
            <li>https://snetwork-80dc1.web.app</li>
            <li>https://snetwork-80dc1.firebaseapp.com</li>
        </ul>
    </div>
</div>
</div>
</>

    )
}

export default Main;
