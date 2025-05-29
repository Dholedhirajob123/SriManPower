import React, { useState } from 'react';
import './contact.css';
// import axios from "axios";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    serviceAdd: '',
    message: ''
  });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e ) => {
    const { name, value } = e.target; //Destruction Event
    setFormData({...formData,[name]:value })
  };

 const submit = () =>{
if (formData.name === " " ||
   formData.email === " " ||
   formData.phone === " " || 
   formData.service === " " || 
  formData.serviceAdd === " " ||
  formData.message === " " )
{
  alert("All fields are required")
}
else{
  console.log(formData);
setFormData({
      name: '',
    email: '',
    phone: '',
    service: '',
    serviceAdd: '',
    message: ''
})
}
 }
  return (
    <section className="contact-housekeeping" id="contact">
      <div className="container">
        <div className="section-header">
          <h1>Contact Us</h1>
          <div className="heading-line"></div>
          <p>Get in touch for a free consultation or quote</p>
        </div>
        
        <div className="contact-container">
          {/* Contact Form - Left Side */}
          <div className="contact-form">
            <h3>Request a Quote or Inquiry</h3>
            {/* {submitStatus && (
              <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )} */}
            <form >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    placeholder="Your full name"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    placeholder="Your email address"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    placeholder="Your phone number"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed*</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="House Maid Services">House Maid Services</option>
                    <option value="Cooking Services">Cooking Services</option>
                    <option value="Elderly Care">Elderly Care</option>
                    <option value="Baby Carer">Baby Carer</option>
                    <option value="Nanny Care">Nanny Care</option>
                    <option value="Japa Maid Services">Japa Maid Services</option>
                    <option value="Housekeeping Services">Housekeeping Services</option>
                    <option value="Deep Cleaning Services">Deep Cleaning Services</option>
                    <option value="Driver Services">Driver Services</option>
                    <option value="Painters">Painters</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Interior Works">Interior Works</option>
                    <option value="Property Management System">Property Management System</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceAdd">Service Address (if known)</label>
                <input
                  type="text"
                  id="serviceAdd"
                  name="serviceAdd"
                  value={formData.serviceAdd}
                  placeholder="Street address, city, zip code"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  placeholder="Tell us about your specific needs, square footage, and any special requirements..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                // disabled={isSubmitting}
             onClick={submit} 
             >Submit

                {/* {isSubmitting ? 'Sending...' : 'Submit Request'} */}
              </button>
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div className="contact-info-section">
           <h3>Our Contact Information</h3>
           <div className="contact-info-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>
                        <div className="contact-info-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>info@cleaningservice.com</p>
                  <p>quotes@cleaningservice.com</p>
                </div>
              </div>
             <div className="contact-info-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h3>Office Address</h3>
                  <p>123 Cleaning Street</p>
                  <p>Suite 101, Clean City, CC 12345</p>
                </div>
              </div>
            <div className="contact-info-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
            <div className="contact-text">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Emergency calls only</p>
                </div>
              </div>
             <div className="service-areas">
                <h3><b>Service Areas</b></h3>
                <p>We serve all major areas in Clean City and surrounding communities including:</p>
                <ul>
                  <li>Delhi</li>
                  <li>Maharashtra</li>
                  <li>Gujarat</li>
                  <li>Goa</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;