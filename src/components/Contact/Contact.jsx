import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Msg from './msg/Msg';

const Contact = () => {

      

  const [msg, setMsg] = useState(null);


  const [emailData, setEmailData] = useState({
    name : "",
    email : "",
    message : ""
  });


  const showMsg = (message,type) => {
    setMsg({
      message,type
    });

    setTimeout(() => {
      showMsg(null)
    }, 2000);

  }

  const inputEvent = (e) => {

      const { name, value } = e.target;

      setEmailData((preValue)=>{
          return{
            ...preValue,
            [name]:value,
          }
      })
  }

  
  const sendMail = (e) => {

    e.preventDefault();

    if( emailData.name !== "" && emailData.email !== "" && emailData.message !== ""){

      emailjs.sendForm('service_blbpcgh', 'template_im0atwq',e.target, 'user_4V5Uo6RFRkdW3o4q8Gwp5')
      .then((result) => {
        showMsg('eamil send successful','suc');
      }, (error) => {
          showMsg("something went wrong try again in a few seconds",'err')
      });


      setEmailData({
        name : "",
        email : "",
        message : ""
      })

    }else{
      showMsg('all field are required',"err")
    }


  }


  return (

  <>

    <div className="contact_sec" id='contact'>
    <Msg msg={msg}/>
        <div className="contact_sec_text"><h1>contact me</h1></div>


        <div className="contact_form">

          <form onSubmit={sendMail}>


          <input name='name' value={emailData.name} type="text" onChange={inputEvent} placeholder='Your Name'/>
          <input name='email' value={emailData.email} type="text" onChange={inputEvent} placeholder='Your Email'/>

          <textarea name="message" value={emailData.message} onChange={inputEvent} placeholder='Your Messages '></textarea>

          <button className='primary_btn'>submit</button>



          </form>


        </div>

    </div>
      
  </>

  );
};

export default Contact;
