import React, { useState } from "react";
import "./Services.css";
import Header from "../../common/header/Header";

const services = [
  {
    id: 1,
    title: "Housekeeping",
    icon: "fa fa-broom",
    description: "Professional home cleaning services",
    details: "Includes dusting, vacuuming, mopping, bathroom sanitization, kitchen deep cleaning, bed making, and laundry services. Weekly, bi-weekly, or monthly packages available."
  },
  {
    id: 2,
    title: "Plumbing",
    icon: "fa fa-faucet",
    description: "24/7 emergency plumbing services",
    details: "Pipe repairs, leak detection, drain cleaning, water heater installation, toilet repairs, faucet replacement, sump pump services, and full bathroom/kitchen plumbing installations."
  },
  {
    id: 3,
    title: "Baby Care",
    icon: "fa fa-baby",
    description: "Professional newborn and infant care",
    details: "Overnight baby care, newborn care specialist services, sleep training, baby proofing consultation, nursery organization, and postpartum doula services."
  },
  {
    id: 4,
    title: "Electrical",
    icon: "fa fa-bolt",
    description: "Certified electrical services",
    details: "Lighting installation, panel upgrades, outlet repairs, ceiling fan installation, home rewiring, surge protection, and smart home electrical setups."
  },
  {
    id: 5,
    title: "Laundry Service",
    icon: "fa fa-tshirt",
    description: "Professional washing and ironing",
    details: "Pickup and delivery laundry service including washing, drying, folding, ironing, stain removal, and special fabric care for delicate items."
  },
  {
    id: 6,
    title: "HVAC Services",
    icon: "fa fa-thermometer-half",
    description: "Heating and cooling system maintenance",
    details: "AC repair, furnace servicing, duct cleaning, thermostat installation, ventilation services, and complete HVAC system installations."
  },
  {
    id: 7,
    title: "Carpentry",
    icon: "fa fa-hammer",
    description: "Custom woodworking and repairs",
    details: "Furniture repair, cabinet installation, shelving units, door/window repairs, molding installation, and custom woodworking projects."
  },
  {
    id: 8,
    title: "Pest Control",
    icon: "fa fa-bug",
    description: "Eco-friendly pest elimination",
    details: "Rodent control, insect extermination, termite inspection, bed bug treatment, wildlife removal, and preventive pest management."
  },
  {
    id: 9,
    title: "Appliance Repair",
    icon: "fa fa-tools",
    description: "Home appliance maintenance",
    details: "Refrigerator, oven, dishwasher, washing machine, dryer, microwave, and small appliance repairs with warranty on parts and labor."
  },
  {
    id: 10,
    title: "Senior Care",
    icon: "fa fa-user-nurse",
    description: "Elderly assistance services",
    details: "Companion care, medication reminders, meal preparation, light housekeeping, transportation assistance, and mobility support."
  },
  {
    id: 11,
    title: "Gardening",
    icon: "fa fa-leaf",
    description: "Landscape maintenance",
    details: "Lawn mowing, hedge trimming, planting, weeding, irrigation system maintenance, seasonal cleanup, and garden design."
  },
  {
    id: 12,
    title: "Home Organization",
    icon: "fa fa-boxes",
    description: "Clutter control solutions",
    details: "Closet organization, pantry optimization, garage cleanup, moving preparation, digital organization, and whole-home decluttering."
  },
  {
    id: 13,
    title: "Painting",
    icon: "fa fa-paint-roller",
    description: "Interior/exterior painting",
    details: "Wall preparation, color consultation, interior painting, exterior painting, cabinet refinishing, wallpaper removal, and decorative finishes."
  },
  {
    id: 14,
    title: "Pet Care",
    icon: "fa fa-paw",
    description: "Animal care services",
    details: "Pet sitting, dog walking, grooming, feeding, litter box cleaning, medication administration, and overnight pet care."
  },
  {
    id: 15,
    title: "Handyman",
    icon: "fa fa-toolbox",
    description: "General home repairs",
    details: "Furniture assembly, picture hanging, shelf installation, small repairs, TV mounting, and various odd jobs around the house."
  }
];

const HousekeepingServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredServices, setFilteredServices] = useState(services);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      
      <section className="services-section">
        <div className="dark-overlay"></div>
        <div className="particles-background"></div>
        
        <div className="container">
          <div className="heading-container">
            <h1 className="main-heading">Our Services</h1>
            <div className="heading-line"></div>
            <p className="section-subtitle">
              Quality services tailored to your needs
            </p>
          </div>
          
          <div className="services-grid">
            {filteredServices.map((service) => (
              <div 
                className="service-card"
                key={service.id}
                onClick={() => handleServiceClick(service)}
              >
                <div className="card-icon">
                  <i className={`${service.icon}`}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                {/* <p className="service-description">{service.description}</p> */}
                <div className="learn-more">
                  Learn More <i className="fas fa-chevron-right"></i>
                </div>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              
              <div className="modal-header">
                <div className="modal-icon-circle">
                  <i className={`${selectedService.icon}`}></i>
                </div>
                <h3 className="modal-title">{selectedService.title}</h3>
              </div>
              
              <div className="modal-body">
                <p className="modal-description">{selectedService.description}</p>
                <div className="modal-details">
                  <p>{selectedService.details}</p>
                </div>
              </div>
              
              {/* <div className="modal-footer">
                <button className="cta-button" onClick={closeModal}>
                  Close
                </button>
              </div> */}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HousekeepingServices;