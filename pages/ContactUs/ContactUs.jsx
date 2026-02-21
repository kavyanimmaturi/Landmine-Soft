import { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
 const [form,setForm] = useState({
    name: "",
    email: "",
    message: "",
 });

 const onHandleChange = (event) => {
  setForm({...form, [event.target.name]: event.target.value});
 }

  return (
    <div className="contact-cont">
      <div className="contact-box">
      <h1 className="contact-tile">Contact Us</h1>
      <p className="contact-para">
        Have any questions or feedback? Drop a message and we will get back to you.
      </p>
      
          <form className="contact-form">
            <label>Name</label>
             <input 
                type="text"
                name="name"
                required
                onChange={onHandleChange}
                />

                <label>Email</label>
                <input 
                type="email"
                name="email"
               
                required
                onChange={onHandleChange}
                />
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Write message here..."
                rows="5"
                cols="24"
                required
                onChange={onHandleChange}
              >
              </textarea>
              <button type="submit" className="contact-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Get in Touch :</h3>
            <p><span>Email</span>: info@landminesoft.com</p>
            <p><span>Phone</span>: +91 9874563145</p>
            <p><span>Address</span>: Hyderabad, Telangana, India</p>
          </div>
      </div>
  </div>
  )
}

export default ContactUs
