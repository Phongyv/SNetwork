
import { Link } from 'react-router-dom';
import '../css/Home.css'
import { useState,useEffect } from 'react';
import { db } from '../firebase';
import { getDocs,collection} from 'firebase/firestore';
function Home(){
 
    var arr=["https://minhtuanmobile.com/uploads/editer/images/2024/05/doraemon-nobita-va-ban-giao-huong-dia-cau-duoc-yeu-thich-3.webp","https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe","https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/26079ab060401d8a76039e985d63a3e9.jpe","https://i.ytimg.com/vi/FXgdEb4kPR4/maxresdefault.jpg","https://staticg.sportskeeda.com/editor/2023/08/63291-16913969569317-1920.jpg?w=640","https://minhtuanmobile.com/uploads/blog/kimetsu-no-yaiba-ss3-cong-bo-thoi-gian-phat-song-tap-cuoi-230613013901.jpg"]
    const [num, setNum] = useState(0);
    setInterval(()=>{
        setNum(num + 1);
        if(num===5) setNum(0)
    },4000);

    const [datas, setDatas] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const query = await getDocs(collection(db, "thumnail"));
        setDatas(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getData();
    }, []);

    return(
        <>
       <div className='home-navbar'>
        <div className='home-navbar-left'>
            <img className='home-navbar-left-logo' src='logonofont.png' alt=''/>
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

       <div className='home-body'>
        <div className='home-body-top'>
            <div className='slider'>
                <div className='list'>
                        <img className='item' src={arr[num]} alt="" />
                </div>
            </div>
        </div>
        <div className='home-body-center'>
           <div className='home-body-center-title'>
            <h1>CÙNG ĐÓN XEM NHỮNG NỘI DUNG MỚI NHẤT TẠI SNETWORK :33</h1>
           </div>
           <div className='home-body-center-main' >
            {
                datas.map((thumnail)=>{
                    return(
                    <Link to={'/home/view'} className='home-body-center-main-item' key={thumnail.key}  onClick={()=>{
                        localStorage.setItem('key',thumnail.key)
                        localStorage.setItem('name',thumnail.name)
                        localStorage.setItem('mota',thumnail.mota)
                        localStorage.setItem('noidung',thumnail.noidung)
                        localStorage.setItem('url',thumnail.url)
                        localStorage.setItem('video',thumnail.video)
                        }} > 
                    <img className='home-body-center-main-item-img' src={thumnail.url} alt="" />
                    <span className='home-body-center-main-item-name' >{thumnail.name}</span>
                </Link>
                )})
            }
           
           </div>
        </div>
       </div>
        </>
    )
}

export default Home;
