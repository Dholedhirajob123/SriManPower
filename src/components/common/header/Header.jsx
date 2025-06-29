import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { 
  FaSearch, 
  FaBars, 
  FaTimes, 

  FaWhatsapp
} from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../../assests/logo.ico";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showServiceDialog, setShowServiceDialog] = useState(false);
  const searchRef = useRef(null);

  // Services data (same as before)
 const services = [
  {
    id: 1,
    title: "House Maid Services",
    icon: "fa fa-broom",
    description: "Professional home cleaning and maintenance",
    details: "Our comprehensive house maid services include daily, weekly, or monthly cleaning tailored to your schedule. Services cover thorough dusting of all surfaces, vacuuming carpets and upholstery, mopping floors with disinfectants, and sanitizing high-touch areas. We provide kitchen deep cleaning (appliances, cabinets, countertops), bathroom scrubbing (tiles, sinks, showers), bed linen changes, and laundry services. Additional options include closet organization, grocery stocking, and waste management. Our trained staff uses eco-friendly products and follows strict hygiene protocols. Perfect for busy families, working professionals, or seniors who want a spotless home without the hassle."
  },
  {
    id: 2,
    title: "Cooking Services",
    icon: "fa fa-utensils",
    description: "Customized meal preparation by expert chefs",
    details: "Our professional cooking services cater to all dietary needs including vegan, keto, gluten-free, or traditional cuisines. Chefs will plan menus, shop for fresh ingredients, and prepare meals in your kitchen (daily or weekly batches). Services include breakfast/lunch/dinner preparation, kid-friendly meals, special occasion catering, and nutritional guidance. We accommodate allergies, religious dietary requirements (halal/kosher), and post-surgery recovery meals. Additional services: kitchen organization, cooking lessons, and meal storage tips. Ideal for health-conscious individuals, large families, or those recovering from illness who want nutritious, home-cooked meals."
  },
  {
    id: 3,
    title: "Elderly Care",
    icon: "fa fa-user-nurse",
    description: "Compassionate support for seniors",
    details: "Our elderly care services provide safety, companionship, and assistance with daily activities. Certified caregivers help with bathing, dressing, grooming, and mobility support. We offer medication reminders, meal preparation following dietary restrictions, and light housekeeping. Emotional support and social engagement (conversation, activities) are prioritized to reduce loneliness. Additional services include transportation to appointments, overnight care for dementia patients, and coordination with healthcare providers. Respite care is available for family caregivers needing breaks. Perfect for seniors aging at home or those transitioning post-hospitalization."
  },
  {
    id: 4,
    title: "Baby Care",
    icon: "fa fa-baby",
    description: "Specialized infant and newborn care",
    details: "Our certified baby care experts provide overnight newborn care, sleep training, and developmental support. Services include feeding assistance (bottle/breastfeeding), diaper changes, soothing techniques, and maintaining sleep logs. We help establish routines, sterilize baby gear, and prepare nutrient-rich purees for weaning. For parents, we offer postpartum recovery support, lactation consulting, and baby-proofing assessments. Experienced nannies can accompany families on travel or provide emergency backup. Trusted by first-time parents, twins/multiples households, and working professionals returning to work."
  },
  {
    id: 5,
    title: "Nanny Care",
    icon: "fa fa-child",
    description: "Dedicated childcare with educational focus",
    details: "Our professional nannies are rigorously screened and trained in early childhood development. Services range from full-time live-in care to after-school supervision. Responsibilities include school pickups, homework help, meal prep for children, and organizing educational activities (arts/crafts, reading, STEM games). Nannies manage playdates, extracurricular schedules, and light child-related housekeeping (laundry, toy organization). Special needs care and multilingual nannies available. We prioritize trust-building with background-checked professionals and offer trial periods. Ideal for busy families seeking structured, enriching care beyond daycare."
  },
  {
    id: 6,
    title: "Japa Maid Services",
    icon: "fa fa-hands-helping",
    description: "Trusted live-in or live-out housemaids",
    details: "Our Japa maids are trained professionals skilled in comprehensive household management. They handle daily chores (cleaning, laundry, ironing), grocery shopping, and meal preparation tailored to family preferences. Additional services include child supervision, pet care, and running errands (bank/post office). We conduct thorough background checks, verify cooking skills (Indian/Continental cuisine), and provide cultural adaptability training. Contracts include probation periods and performance reviews. Popular among expat families, elderly couples, and households needing reliable long-term assistance with minimal turnover."
  },
  {
    id: 7,
    title: "Housekeeping Services",
    icon: "fa fa-home",
    description: "Complete home maintenance solutions",
    details: "Beyond standard cleaning, our housekeeping services include seasonal deep cleans (window washing, curtain laundering, mattress sanitization), pantry/fridge organization, and appliance maintenance. We use eco-friendly products and HEPA-filter vacuums for allergy sufferers. Additional services: holiday decoration setup, closet decluttering (KonMari method), and move-in/move-out cleaning. Subscription plans offer discounts for regular bookings. Recommended for rental property turnovers, large homes, or post-renovation cleanup. Our staff is trained to handle delicate surfaces and valuable possessions with care."
  },
  {
    id: 8,
    title: "Deep Cleaning Services",
    icon: "fa fa-broom",
    description: "Intensive sanitation for health and hygiene",
    details: "Our deep cleaning targets hidden dirt in kitchens (degreasing exhaust hoods, descaling faucets), bathrooms (grout restoration, mold removal), and hard-to-reach areas (ceiling fans, baseboards). Steam cleaning eliminates bacteria from upholstery and carpets. We sanitize trash bins, light fixtures, and HVAC vents to improve air quality. Special packages for post-illness disinfection, pre-event cleaning, or landlord certifications. Technicians wear PPE and follow hospital-grade protocols. Essential for allergy relief, pet owners, or homes post-construction. Our services restore your home to a like-new condition."
  },
  {
    id: 9,
    title: "Driver Services",
    icon: "fa fa-car",
    description: "Safe and reliable transportation",
    details: "Our professional chauffeurs provide punctual service for daily commutes, school runs, corporate travel, or airport transfers (including meet-and-greet). Fleet includes sedans and SUVs equipped with GPS, child seats, and Wi-Fi. Services cover grocery delivery assistance, appointment waiting time, and multi-stop errands. For businesses, we offer executive cars with discretion. Long-distance trips feature rest breaks and customizable routes. Ideal for elderly passengers, busy parents, or professionals needing a sober driver after events. All drivers are licensed, background-checked, and trained in defensive driving."
  },
  {
    id: 10,
    title: "Painters",
    icon: "fa fa-paint-roller",
    description: "Professional interior/exterior painting",
    details: "Our painting services use premium, low-VOC paints with meticulous preparation (wall patching, sanding, priming) for flawless results. We offer color consultation, accent walls, textured finishes, and exterior weatherproofing. Specializing in tricky areas (high ceilings, cabinets, trim) with minimal disruption. Post-job cleanup and touch-up guarantees included. Expertise in historic home restoration, commercial spaces, and eco-friendly coatings. Recommended for home staging, rental properties, or homeowners seeking durable, aesthetic upgrades. Our painters work efficiently to transform your space with quality craftsmanship."
  },
  {
    id: 11,
    title: "Carpenters",
    icon: "fa fa-hammer",
    description: "Custom woodworking and repairs",
    details: "Our skilled carpenters handle projects like built-in shelving, walk-in closets, and custom furniture (tables, bed frames). Repair services include squeaky floors, door/window adjustments, and deck restoration. We use CAD designs for precision and source quality materials (hardwoods, sustainable bamboo). Specialty work includes wainscoting, crown molding, and Murphy beds. For businesses, we install retail displays and office partitions. All work is insured with warranties on craftsmanship. Ideal for home renovations, DIY projects needing professional help, or antique furniture restoration. We blend functionality with aesthetic appeal."
  },
  {
    id: 12,
    title: "Plumbers",
    icon: "fa fa-faucet",
    description: "24/7 plumbing solutions",
    details: "Our licensed plumbers address leaks, clogged drains (using hydro-jetting), and low water pressure issues. Installation services include smart toilets, tankless water heaters, and whole-house filtration systems. We detect hidden pipe leaks with thermal imaging and repair slab leaks without excessive demolition. Commercial services cover backflow testing and grease trap maintenance. Preventative maintenance plans help avoid emergencies. Serving residential, industrial, and hospitality sectors with same-day response. Trusted for complex jobs like bathroom remodels or sewer line replacements. Our work comes with guarantees on parts and labor."
  },
  {
    id: 13,
    title: "Interior Works",
    icon: "fa fa-couch",
    description: "Complete home design and remodeling",
    details: "Our end-to-end interior services include 3D design renderings, material selection (flooring, tiles, countertops), and project management. We specialize in open-concept conversions, kitchen/bath renovations, and smart home integration. Custom millwork, lighting design, and acoustic treatments for home theaters available. Sustainable options include reclaimed wood and energy-efficient fixtures. We handle permits and coordinate with electricians/plumbers. Ideal for homeowners, Airbnb hosts, or businesses rebranding their space. Post-project styling consultations included. Our team transforms your vision into reality with professional execution and attention to detail."
  },
    {
    id: 14,
    title: "Property Management System",
    icon: "fa fa-building",
    description: "Comprehensive property maintenance and administration",
    details: "Our property management system offers end-to-end solutions for residential and commercial properties. Services include tenant screening and onboarding, rent collection, maintenance coordination (24/7 emergency repairs), and lease management. We handle vendor contracts (cleaning, landscaping, security), property inspections, and financial reporting. Our digital platform provides owners with real-time dashboards for occupancy rates, expense tracking, and maintenance requests. For tenants, we offer a portal for service requests and payment processing. Additional services: utility management, compliance with housing regulations, and renovation project supervision. Ideal for landlords with multiple units, absentee owners, or real estate investors seeking hassle-free asset management with maximum ROI."
  },
    {
    id: 15,
    title: "Gardening Services",
    icon: "fa fa-leaf",
    description: "Professional lawn care and landscape maintenance",
    details: "Our expert gardening services provide comprehensive outdoor care including lawn mowing, hedge trimming, and seasonal planting. We offer weekly or monthly maintenance plans tailored to your garden's needs. Services include weed control, fertilization, pest management, and irrigation system setup/maintenance. Our team specializes in landscape design, flower bed creation, tree/shrub care, and organic gardening solutions. Additional services: seasonal cleanup (leaf removal, winter preparation), patio/pathway maintenance, and eco-friendly gardening practices. Perfect for homeowners, rental properties, or businesses wanting beautiful outdoor spaces without the hassle. We use professional equipment and sustainable practices to keep your garden thriving year-round."
  }

];

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
    
    if (term.length > 0) {
      const filtered = services.filter(service => 
        service.title.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (service) => {
    setSelectedService(service);
    setShowServiceDialog(true);
    setSearchTerm(service.title);
    setShowSuggestions(false);
    if (menuOpen) closeMenu();
  };

  const closeServiceDialog = () => {
    setShowServiceDialog(false);
    setSelectedService(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <header className="header">
        <div className='container header-wrapper'>
          {/* Logo */}
          <div className='logo'>
            <Link to="/">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="logo-img" 
                loading="lazy"
              />
            </Link>
          </div>

          {/* Search Container - Visible on desktop */}
        <div className="search-container desktop-search" ref={searchRef}>
  <div className="search-input-wrapper">
    <FaSearch className="search-icon" />
    <input
      type="text"
      placeholder="Search services..."
      value={searchTerm}
      onChange={handleSearch}
      onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
    />
    {showSuggestions && (
      <ul className="search-suggestions">
        {suggestions.length > 0 ? (
          suggestions.map(service => (
            <li 
              key={service.id} 
              onClick={() => handleSuggestionClick(service)}
            >
              {service.title}
            </li>
          ))
        ) : (
          <li className="no-results">No services match your search</li>
        )}
      </ul>
    )}
  </div>
</div>

          {/* Mobile Menu Button */}
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation */}
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            {menuOpen && (
              <div className="mobile-search-container" ref={searchRef}>
                <div className="search-input-wrapper">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
                  />
                  {showSuggestions && (
                    <ul className="search-suggestions">
                      {suggestions.map(service => (
                        <li 
                          key={service.id} 
                          onClick={() => handleSuggestionClick(service)}
                        >
                          {service.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
            
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  {/* <FaHome className="nav-icon" /> */}
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  {/* <FaServicestack className="nav-icon" /> */}
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  {/* <FaPhone className="nav-icon" /> */}
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Fixed WhatsApp Button */}
      <div className="whatsapp-float">
        <a 
          href="https://wa.me/?text=Hello%20How%20Can%20I%20help%20you?" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span className="whatsapp-tooltip">Message Us</span>
        </a>
      </div>

{showSuggestions && (
  <ul className="search-suggestions">
    {suggestions.length > 0 ? (
      suggestions.map(service => (
        <li 
          key={service.id} 
          onClick={() => handleSuggestionClick(service)}
        >
          {service.title}
        </li>
      ))
    ) : (
      <li className="no-results">No services match your search</li>
    )}
  </ul>
)}

      {/* Service Dialog */}
      {showServiceDialog && selectedService && (
        <div className="modal-overlay" onClick={closeServiceDialog}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={closeServiceDialog}
              aria-label="Close modal"
            >
              &times;
            </button>
            
            <div className="modal-header">
              <div className="modal-icon-circle">
                <i className={`${selectedService.icon} fa-3x`}></i>
              </div>
            </div>
            
            <h3 className="modal-title">{selectedService.title}</h3>
            
            <div className="modal-body">
              <p className="modal-description">{selectedService.description}</p>
              <div className="modal-details">
                <h4>Service Details:</h4>
                <p>{selectedService.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;