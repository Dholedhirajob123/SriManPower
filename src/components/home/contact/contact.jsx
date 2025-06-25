import React, { useState } from 'react';
import './contact.css';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const fields = Object.values(formData);
    const isEmpty = fields.some(field => field.trim() === "");

    if (isEmpty) {
      alert("All fields are required");
      return;
    }

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    try {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/1sTUGg-IKugq-NE4tP79CeclfKzsl9LnD-_vLy_7poiM/edit?gid=0#gid=0",
        {
          method: "POST",
          body: formPayload
        }
      );

      const result = await response.json();
      console.log("Server Response:", result);

      if (result.result === "success") {
        alert("Form submitted successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          serviceAdd: '',
          message: ''
        });
      } else {
        console.error("Submission error:", result.error);
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section className="contact-housekeeping" id="contact">
      <div className="container">
        <div className="section-header">
          <h1>Contact Us</h1>
          {/* <div className="heading-line"></div> */}
          <p>Get in touch for a free consultation or quote</p>
        </div>

        <div className="contact-container">
          <div className="contact-form">
            <h3>Request a Quote or Inquiry</h3>
            <form onSubmit={submit}>
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

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>

          <div className="contact-info-section">
            <h3>Our Contact Information</h3>

            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@cleaningservice.com</p>
                  <p>quotes@cleaningservice.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-text">
                  <h4>Office Address</h4>
                  <p>123 Cleaning Street</p>
                  <p>Suite 101, Clean City, CC 12345</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><FaClock /></div>
                <div className="contact-text">
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 7:00 AM - 10:00 PM</p>
                  <p>Sunday: Emergency calls only</p>
                </div>
              </div>
            </div>

            <div className="service-areas">
              <h4><b>Service Areas</b></h4>
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
}

export default Contact;