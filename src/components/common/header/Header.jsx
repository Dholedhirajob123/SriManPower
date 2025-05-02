import React, { useState } from "react";
import "./header.css";
// import { Users } from "./Users";
import { FaSearch } from 'react-icons/fa';

import { Link } from "react-router-dom";

// Import your logo image (replace with your actual logo path)
import logo from "../../assests/logo.ico"; 

const Header = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };


  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className='container flex'>
      <div className='logo'>
  <Link to="/" className="logo-link">
    {/* Logo Image (Left Side) */}
    <img 
  src={logo} 
  alt="Sri Man Power Logo" 
  className="logo-img"
/>
    
    {/* Text Content (Right Side) */}
    <div className="logo-text">
      <h1>Sri Man Power</h1>
      <span className="tagline">Your Trusted Manpower Solution</span>
    </div>
  </Link>
</div>

        <div className='nav'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
             <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

   
    </header>
  );
};

export default Header; 