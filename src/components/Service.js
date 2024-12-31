import React from "react";
import './style/Services.css'; // Add a CSS file for styling (optional)

const Service = () => {
  const serviceList = [
    {
      id: 1,
      title: "Car Booking",
      description:
        "Book your preferred car online with ease. Choose from a wide range of cars suitable for all occasions.",
      icon: "🚗",
    },
    {
      id: 2,
      title: "Long-Term Rentals",
      description:
        "Flexible plans for monthly and yearly car rentals, tailored to your needs.",
      icon: "📆",
    },
    {
      id: 3,
      title: "Airport Pickup & Drop",
      description:
        "Convenient airport pickup and drop services for hassle-free travel.",
      icon: "✈️",
    },
    {
      id: 4,
      title: "Luxury Cars",
      description:
        "Experience premium travel with our collection of luxury cars for special occasions.",
      icon: "💎",
    },
    {
      id: 5,
      title: "24/7 Customer Support",
      description:
        "Our team is available around the clock to assist you with your rental queries.",
      icon: "☎️",
    },
    {
      id: 6,
      title: "Insurance Coverage",
      description:
        "Drive stress-free with insurance coverage included in your rental plan.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {serviceList.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
