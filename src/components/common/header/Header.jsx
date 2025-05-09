import React, { useState } from "react";
import "./header.css";
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../../assests/logo.ico";
import WhatsApp from "../../assests/download.jpg";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className='container flex header-wrapper'>
        <div className='logo'>
          <Link to="/" className="logo-link">
            <img src={logo} alt="Sri Man Power Logo" className="logo-img" />
            <div className="logo-text">
              <h1>Sri Man Power</h1>
              <span className="tagline">Your Trusted Manpower Solution</span>
            </div>
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul onClick={() => setMenuOpen(false)}>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            {/* <li><a href="#about">About</a></li> */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>

      {/* WhatsApp Add here */}
      <div className="whatsapp-float-container">
  <a 
    href="https://wa.me/7218298534?text=Hello%20How%20Can%20I%20help%20you?" 
    target="_blank" 
    rel="noopener noreferrer"
    className="whatsapp-link"
    onClick={(e) => {
      // For mobile devices, ensure the link opens even if there's a touch delay
      if (window.innerWidth <= 768) {
        e.preventDefault();
        window.location.href = e.currentTarget.href;
      }
    }}
  >
    <img 
      src={WhatsApp} 
      alt="Chat on WhatsApp" 
      className="whatsapp-logo pulse-animation"
    />
    <span className="tooltip">Message Us</span>
  </a>
</div>

<style jsx>{`
  .whatsapp-float-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
  }

  .whatsapp-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #25D366;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    position: relative;
    cursor: pointer;
  }

  .whatsapp-link:active {
    transform: scale(0.95); /* Add tap feedback for mobile */
  }

  .whatsapp-logo {
    width: 40px;
    height: 40px;
    pointer-events: none; /* Ensure clicks go through to the link */
  }

  .tooltip {
    position: absolute;
    right: 70px;
    width: max-content;
    padding: 8px 12px;
    background:  #25D366;;
    color: white;
    border-radius: 4px;
    font-size: 14px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .whatsapp-link:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }

  .pulse-animation {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Mobile-first responsive adjustments */
  @media (min-width: 481px) {
    .whatsapp-link:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    .whatsapp-float-container {
      bottom: 15px;
      right: 15px;
    }

    .whatsapp-link {
      width: 56px;
      height: 56px;
    }

    .whatsapp-logo {
      width: 36px;
      height: 36px;
    }

    .tooltip {
      right: 65px;
    }
  }

  @media (max-width: 480px) {
    .whatsapp-float-container {
      bottom: 12px;
      right: 12px;
    }

    .whatsapp-link {
      width: 52px;
      height: 52px;
    }

    .whatsapp-logo {
      width: 60px;
      height: 60px;
    }

    .tooltip {
      display: none;
    }
  }
`}</style>
      </div>

 
    </header>
  );
};

export default Header;