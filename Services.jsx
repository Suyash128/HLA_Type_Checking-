import React from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Smart Matching",
    icon: "🔍",
    description:
      "Our AI-powered system instantly connects patients with the most suitable blood donors, ensuring quick and safe transfusions.",
  },
  {
    id: 2,
    title: "Emergency Requests",
    icon: "🚨",
    description:
      "Raise urgent blood requests with a single click, instantly notifying nearby eligible donors for immediate assistance.",
  },
  {
    id: 3,
    title: "Health Records",
    icon: "🔐",
    description:
      "Securely store and manage patient and donor health records, ensuring authorized access for seamless medical care.",
  },
  {
    id: 4,
    title: "Compatibility Check",
    icon: "🧬",
    description:
      "AI-driven compatibility checks verify donor-recipient match, reducing risks and ensuring safe transfusions.",
  },
  {
    id: 5,
    title: "Doctor Consult",
    icon: "👨‍⚕️",
    description:
      "24/7 virtual consultations with certified doctors, providing medical guidance before and after blood donations.",
  },
  {
    id: 6,
    title: "Donation Tracking",
    icon: "📊",
    description:
      "Monitor your donation history, upcoming schedules, and impact on saving lives with real-time updates.",
  },
  {
    id: 7,
    title: "Live Locator",
    icon: "📍",
    description:
      "Find available blood donors in real time, allowing patients and hospitals to quickly locate and connect with donors.",
  },
  {
    id: 8,
    title: "Blood Bank",
    icon: "🏥",
    description:
      "Hospitals and blood banks can efficiently manage inventory, track stock levels, and request urgent supplies.",
  },
  {
    id: 9,
    title: "Awareness",
    icon: "📢",
    description:
      "Join educational campaigns and awareness programs to encourage safe and responsible blood donation.",
  },
];

export default function Services() {
  return (
    <section className="container py-3">
      <motion.h2
        className="text-center fw-bold mb-3"
        style={{ color: "#D2691E" }} // Same color as "Want to know your HLA type"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>

      <div className="row g-3">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            className="col-md-6 col-lg-4 d-flex align-items-stretch"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="card shadow-lg p-3 border-0 rounded text-center w-100"
              style={{
                minHeight: "220px",
                backgroundColor: "rgba(255, 255, 255, 0.9)", // Increased opacity
              }}
            >
              <h5 className="fw-bold d-flex flex-column align-items-center">
                <span style={{ fontSize: "1.8rem" }}>{service.icon}</span>
                {service.title}
              </h5>
              <p className="text-muted small">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
