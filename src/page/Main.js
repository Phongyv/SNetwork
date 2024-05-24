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
        <h2>SNetwork là một nền tảng mạng xã hội phi tập trung nhằm mục đích cung cấp cho người dùng quyền kiểm soát dữ liệu và quyền riêng tư của họ</h2>
        <h3>SNetwork cho phép người dùng kết nối an toàn với người khác, chia sẻ nội dung và tham gia vào các cuộc trò chuyện mà không sợ bên thứ ba vi phạm hoặc thao túng dữ liệu. Với sự tập trung mạnh mẽ vào bảo mật và tính minh bạch, SNetwork tìm cách cách mạng hóa cách thức hoạt động của mạng xã hội, trao lại quyền lực cho người dùng.</h3>
    </div>
    </div>
    <div className='register'>
    <Link className='register-button' to="/login">Đăng Nhập</Link>
    <Link className='register-button' to="/register">Đăng Ký</Link>    
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
