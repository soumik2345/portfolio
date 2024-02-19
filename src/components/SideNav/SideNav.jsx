import React, {useState} from 'react';
import './SideNav.css';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';




const SideNav = () => {

  const [navActive, setNavActive] = useState(false);


  const NavActive = () =>{
    if(navActive){
      setNavActive(false)
    }else{
      setNavActive(true)
    }

    console.log(navActive);
  }

  

  return (

  <>


    <div className={`${navActive ? "side_nav navactive" : "side_nav"}`}>

        <div className="side_nav_top">
            <img src="/logo.svg" alt="" />
            <h1>piyush saha</h1>
            <p>web developer</p>
        </div>
        
        <div className="side_nav_main">

            <ul>
                <li><a href="#about" onClick={NavActive}>about</a></li>
                <li><a href="#myskill" onClick={NavActive}>my skill</a></li>
                <li><a href="#mywork" onClick={NavActive}>work</a></li>
                <li><a href="#contact" onClick={NavActive}>contact</a></li>
            </ul>


            <div className="social">

              <div className="icon_1">

                <a href="https://www.facebook.com/piyash.saha.1426" target='_blank'><AiFillFacebook iFillFacebook className='social_icon'/></a>
                <a href="https://www.instagram.com/" target="_blank">
                <AiFillInstagram className='social_icon'/>
                </a>
                <a href="https://twitter.com/?lang=en" target="_blank">
                <AiFillTwitterCircle className='social_icon'/>
                </a>
              </div>

              <div className="icon_2">
                <a href="https://www.linkedin.com/" target="_blank">
                <AiFillLinkedin className='social_icon icon_center'/>
                </a>
                <a href="https://github.com/Piyash002" target="_blank"><AiFillGithub className='social_icon icon_center'/></a>


              </div>


            </div>




        </div>

        
        
    </div>


<div className="burger" onClick={NavActive}>
  <div className="line line1"></div>
  <div className="line line2"></div>
  <div className="line line3"></div>
</div>



  </>

  )
};

export default SideNav;
