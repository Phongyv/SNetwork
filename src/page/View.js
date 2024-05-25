import '../css/View.css'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase';
import { getDocs,collection } from 'firebase/firestore';
function View(){
    const [video,setVideo]=useState(localStorage.getItem('video'))
    const [name,setName]=useState(localStorage.getItem('name'))
    const [url,setUrl]=useState(localStorage.getItem('url'))
    const [mota,setMota]=useState(localStorage.getItem('mota'))
    const [noidung,setNoidung]=useState(localStorage.getItem('noidung'))
    const [key,setKey]=useState(localStorage.getItem('key'))

   const [datas, setDatas] = useState([]);
   useEffect(() => {
     const getData = async () => {
       const query = await getDocs(collection(db, "thumnail"));
       setDatas(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     };
     getData();
   }, []);
   var soluong =13
   var arr=[Math.floor(Math.random() * (soluong - 1) + 1),Math.floor(Math.random() * (soluong - 1) + 1),Math.floor(Math.random() * (soluong - 1) + 1),Math.floor(Math.random() * (soluong - 1) + 1),Math.floor(Math.random() * (soluong - 1) + 1),Math.floor(Math.random() * (soluong - 1) + 1),Math.floor(Math.random() * (soluong - 1) + 1)]
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
    <iframe className='view-body-left-video' height="480" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className='view-body-left-info'>
            <div className='view-body-left-info-top'>
            <h1>{name}</h1>
            <h2>{mota}</h2>
            </div>
            <div className='view-body-left-info-bot'>
                <img src={url} alt="" />
                <h3>{noidung}</h3>
            </div>
            
        </div>
    </div>
    <div className='view-body-right'>{
            datas.map((videodata)=>{
                var i=0
                for(i;i<=6;i++){
                if(videodata.key===arr[i]){
                        return(
                            <div className='view-body-right-item' key={videodata.key} onClick={()=>{
                                setVideo(videodata.video)
                                setName(videodata.name)
                                setUrl(videodata.url)
                                setMota(videodata.mota)
                                setNoidung(videodata.noidung)
                                setKey(videodata.key)
                                localStorage.setItem('key',videodata.key)
                                localStorage.setItem('name',videodata.name)
                                localStorage.setItem('mota',videodata.mota)
                                localStorage.setItem('noidung',videodata.noidung)
                                localStorage.setItem('url',videodata.url)
                                localStorage.setItem('video',videodata.video)
                            }} >
                                <img className='view-body-right-item-img' src={videodata.url} alt="" />
                                <div className='view-body-right-item-info'>
                                <span className='view-body-right-item-name' >{videodata.name}</span>
                                <span className='view-body-right-item-mota' >{videodata.mota}</span>
                                </div> 
                            </div>)} }})  }
</div>
</div>
<div className='view-body-bot'>
    
</div>
</div>
</div>
</>
)
}
export default View;
