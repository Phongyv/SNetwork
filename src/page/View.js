import '../css/View.css'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import { useState } from "react";

function View(){
const [key,setkey] = useState(localStorage.getItem('itemId'))
console.log(key)
    return(
<>  
<div className="view-container">

<div className='home-navbar'>
        <div className='home-navbar-left'>
            <Link  className='view-navbar-back' to="/home">
            <img className='view-navbar-back-icon' src='https://cdn-icons-png.flaticon.com/128/8022/8022662.png' alt=''/></Link>
            <input type='text' placeholder='Search' className='home-navbar-left-search'></input>
          <img className='home-navbar-left-submit' src="https://cdn-icons-png.flaticon.com/128/10947/10947920.png" alt="" />
        </div>

        <Link className='home-navbar-link' to={'/home'}>
        <img className='home-navbar-center' src="https://cdn-icons-png.flaticon.com/128/9073/9073032.png" alt=""/>
        </Link>

        <div className='home-navbar-right'>
            <Link className='home-navbar-link' to={'/message'}>
            <img className='home-navbar-right-message' src='https://cdn-icons-png.flaticon.com/128/2190/2190552.png' alt='' />
            </Link>
            <Link className='home-navbar-link' >
            <div className='home-navbar-right-user' >
            <img  src='https://cdn-icons-png.flaticon.com/128/149/149071.png' alt='' />
            <span>{localStorage.getItem('email')}</span>
            </div>
            </Link>
        </div>
</div>


<div className="view-body">
<div className='view-body-top'>
    <div className='view-body-left'>
        <video className='view-body-left-video' src=""></video>
        <div className='view-body-left-info'>
            <h1>{}</h1>
            <h2>{}</h2>
            <h3>{}</h3>
        </div>
    </div>
    <div className='view-body-right'></div>
</div>
<div className='view-body-bot'></div>

</div>
</div>
</>
)
}
export default View;
