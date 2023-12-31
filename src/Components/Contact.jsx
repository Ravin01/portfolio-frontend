/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import linkedIn from "../assets/icons/linkedin.png"
import call from "../assets/icons/call.png"
import whatsapp from "../assets/icons/whatsapp.png"
import Footer from "../Components/Footer"

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [sendBtn, setSendBtn] = useState("Send");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    setSendBtn("Sending...");
    e.preventDefault();
    console.log(formData);
    const serviceId = "service_74xumg9";
    const templateId = "template_o5ssvyt";
    const userId = "cs0_v7BSb4nc-wp9r";
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
      );
      if (response) {
        toast.success("Message sent successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setSendBtn("Send");
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("Message not sent", err, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setSendBtn("Send");
    }
  };

  return (
    <div className="contact-container" id="contact" >
      <h3 className="contact-name">Contact me</h3>
      <div className="contact-con">
        <div className="contact-info">
          <div className="contact-item-mail">

            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="" className="contact-item-icon" />
            <h5 className="contact-item-link" >ravinganapathi@gmail.com</h5>
          </div>
          <div className="contact-item-mail">

            <img src={call} alt="" className="contact-item-icon" />
            <h5 className="contact-item-link" >+91 8870290307</h5>
          </div>
          <div className="contact-item-mail">

            <img src={linkedIn} alt="" className="contact-item-icon" />
            <h5 className="contact-item-link">
              Take a look &nbsp; &nbsp;
              <Link
                to="https://www.linkedin.com/in/ravin-g-00b6b8224"
                target="blank"
                className="contact-item-link-click"
                style={{
                  color : 'white'
                }}
              >
                click
              </Link>
            </h5>
          </div>
          <div className="contact-item-mail">

            <img src={whatsapp} alt="" className="contact-item-icon" />
            <h5 className="contact-item-link">
            Let's Talk &nbsp; &nbsp;
              <Link to="https://wa.me/+918870290307" target="blank" className="contact-item-link-click" style={{
                color : 'white'
              }} >
                click
              </Link>
            </h5>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="contact-input"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            placeholder="Enter your Name"
            required
          />
          <input
            type="text"
            className="contact-input"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
          <input
            type="text"
            className="contact-input"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            required
          />
          <button className="contact-btn" type="submit">
            {sendBtn}
          </button>
        </form>
       
      </div>
      <div className="contact-footer">
          <Footer />
        </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Contact;
