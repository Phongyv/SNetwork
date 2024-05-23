import { Outlet } from 'react-router-dom';
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
        <img className='home-navbar-center' src="home.png" alt="" />
        <div className='home-navbar-right'>
            <img className='home-navbar-right-message' src='messenger.png' alt='' />
            <div className='home-navbar-right-user' >
            <img  src='user.png' alt='' />
            <span>{username}</span>
            </div>
        </div>
       </div>
       <div className='home-body'>
        
       </div>
       <Outlet/>
        </>
    )
}
export default Home;