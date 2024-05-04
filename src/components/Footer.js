import React,{useState} from "react";

import { CgMail } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";
// import { TbPointFilled } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import Razorpay from "./assests/razorpay.png";
import upi from "./assests/upi.png";
import paypal from "./assests/paypallogo.png";
import visa from "./assests/visa.png";
// import bhulogo from "./assests/bhulogo.png";
import "./Footer.css";
import { IconContext } from "react-icons";
import bhulogo from "./assests/divin pass.png";
// import Enquiryform from "./Enquiryform";

const Footer = () => {

const[contact,setcontact]=useState("");

const ContacUs=()=>{
  // console.log("Contact us");
  setcontact("Contact Us");
}


  return (
    <div className="Footer-Container d-flex flex-column ">
 {/* d-flex flex-column flex-lg-row  justify-content-around  */}
      <div className="sub-footer-container row">
        {/* main title and logo */}

        <div className="img-title-section col-12 col-sm-6 col-md-auto my-4 my-sm-0 text-center text-sm-auto">
          {/* <img  src={bhulogo} alt="logo" /> */}
        </div>

        {/* Contact info Area */}

        <div className=" col-12 col-sm-6 col-md-auto my-4 my-sm-0  box ">
          <h3 className="footer-sub-title footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">Contact info</h3>

          <div className="contact-sub-title-content">
            <div className="footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0 ">
              <p>
                <IoMdContact />
              </p>
              <span >
              <Link to="enquiryfrom" onClick={ContacUs} className="sendEnquiry  ms-sm-0 ps-sm-0 ">Contact Us</Link>
              </span>
            </div>

            <div className="footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">
              <p>
                <CgWebsite />
              </p>
              <span>
                <a href="#"> info@KashiVishwanth.com</a>
              </span>
            </div>

            <div className="footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">
              <p>
                <TiMessages />
              </p>
              <span>
                
                <Link to="enquiryfrom" className="sendEnquiry   ms-sm-0 ps-sm-0 ">Send Enquiry</Link>
              </span>
            </div>
          </div>
        </div>

        {/* Media Link Area */}

        <div className="col-12 col-sm-6 col-md-auto my-4 my-sm-0   box">
          <h3 className="footer-sub-title footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">Social Links</h3>

          <div className="media-sub-title-content">

          <div className="media-icon footer-sub-title-contact ms-5 ms-sm-0 ps-sm-0">
            <span><a href="#" style={{color: 'black'}}><BsTwitterX /></a></span>
            <span><a href="#" style={{color: '#1877F2'}}><FaFacebookF /></a></span>
            <span><a href="#" style={{color: '#CD201F'}}><BsYoutube /></a></span>
            <span><a href="#" style={{color: '#E4405F'}}><FaSquareInstagram /></a></span>
          </div>

          </div>
        </div>

        {/* Policy Info */}

        <div className="col-12 col-sm-6 col-md-auto my-4 my-sm-0   box">

          <h3 className="footer-sub-title footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">Policy Info</h3>

          <div className="policy-sub-title-content">

            <div className="footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">
              <a href="#"> Privacy Policy</a>
            </div>

            <div className="footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">
              <a href="#"> Cancellation & Refund Policy</a>
            </div>

          </div>
        </div>

        {/* Payment gatyway link */}

        <div className="col-12 col-sm-6 col-md-auto my-4 my-sm-0  box">
          <h3 className="footer-sub-title text-start footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">Payment Partner</h3>

          <div className="paymentcard footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">
            <img src={Razorpay} style={{'transform':'scale(2.3)'}} alt="Razorpaylogo"/>
            <img src={visa} alt="visalogo" className="ms-3"/>
          </div>
          <div className="paymentcard footer-sub-title-contact ms-5 ps-3 ms-sm-0 ps-sm-0">
          <img src={paypal} alt="paypallogo" className="me-4"/>
            <img src={upi}  alt="upilogo" style={{'transform':'scale(0.8)'}} />
          </div>
        </div>
      </div>

      <div className="copyright">
         <p>Temple</p><span><MdCopyright /></span><p>2024. All Rights Reserved.</p>
        </div>

    </div>
  );
};

export default Footer;
