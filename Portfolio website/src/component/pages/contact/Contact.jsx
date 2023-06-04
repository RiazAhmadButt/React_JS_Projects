import React from 'react';
import './contactStyle.css';
import EmailImg from '../../../assets/images/email.png';
import LinkedinImg from '../../../assets/images/linkedin.png';
import LocationImg from '../../../assets/images/location.png';
import PhoneImg from '../../../assets/images/phonee.png';

export const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact">
          <div className="contact-heading">
            <h3>Contact</h3>
          </div>
          <div className="contact-sources">
            <div className='contact-body'>
              <img src={PhoneImg} alt="" style={{ width: "100px", height: "100px" }} />
              <h4>Phone</h4>
              <h3>03499596796</h3>
            </div>
            <div className='contact-body'>
              <img src={EmailImg} alt="" style={{ width: "100px", height: "100px" }} />
              <h4>Email</h4>
              <h5>riazahmadbutt01@gmail.com</h5>
            </div>
            <div className='contact-body'>
              <img src={LinkedinImg} alt="" style={{ width: "100px", height: "100px" }} />
              <h4>LinkedIn</h4>
              <h3>Riaz Ahmad Butt</h3>
            </div>
            <div className='contact-body'>
              <img src={LocationImg} alt="" style={{ width: "100px", height: "100px" }} />
              <h4>Location</h4>
              <h4>Muzaffarabad, Pakistan</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
