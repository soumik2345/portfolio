import React from 'react';
import "./Header.css";

const Header = () => {




  return (
  
  <>

    <div className="header">

        <div className="heder_bg_box"></div>


        <div className="header_text">

            <div className="all_text">


                {/* HEY THERE ! */}

                <h1 className='hey_there'> HEY THERE ! </h1>

            

                {/* I am soumik saha */}

    
                <h1 className='soumik_saha'> I Am Soumik Saha </h1>
            

                {/* web_and_app_developer */}

                    
                <h1 className='web_and_app_developer'> Web And App Developer </h1>



            <a href='#contact' className='primary_btn' style={{textDecoration:'none'}}>contact me</a>

            </div>

            
            
        </div>


        <div className="header_img">
            <img src="/images/Untitled-2.png" alt="header_images" />
        </div>
  
            
    </div>

  </>

  );
};

export default Header;
