import React, { useState } from "react";
import "./header.css";
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../../assests/logo.ico";

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
      </div>
    </header>
  );
};

export default Header;