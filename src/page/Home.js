import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Home.css'

function Home(){
    const username = localStorage.getItem('email')

    return(
        <>
       <div className='home-navbar'>
        <div className='home-navbar-left'>
            <img className='home-navbar-left-logo' src='logonofont.png' alt=''/>
            <input type='text' placeholder='Search' className='home-navbar-left-search'></input>
          <img className='home-navbar-left-submit' src="arrow.png" alt="" />
        </div>

        <Link className='home-navbar-link' to={'/home'}>
        <img className='home-navbar-center' src="home.png" alt=""/>
        </Link>

        <div className='home-navbar-right'>
            <Link className='home-navbar-link' to={'/home/message'}>
            <img className='home-navbar-right-message' src='messenger.png' alt='' />
            </Link>
            <Link className='home-navbar-link' to={'/home/user'}>
            <div className='home-navbar-right-user' >
            <img  src='user.png' alt='' />
            <span>{username}</span>
            </div>
            </Link>
        </div>
       </div>

       <div className='home-body'>
        
       </div>
       <Outlet/>
        </>
    )
}
export default Home;
