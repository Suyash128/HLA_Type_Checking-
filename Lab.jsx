import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const lab_Data = [
  {
    id: 1,
    name: "Ruby Hall Clinic Pathology Lab",
    contact: "+91 98765 43210",
    services: [
      "Blood tests",
      "Hemoglobin tests",
      "Blood typing",
      "Infection screening",
    ],
    address: "Ruby Hall Clinic, Sangamwadi, Pune, Maharashtra",
  },
  {
    id: 2,
    name: "Deenanath Mangeshkar Hospital Lab",
    contact: "+91 87654 32109",
    services: [
      "Complete blood count (CBC)",
      "Blood donation screening",
      "DNA analysis",
    ],
    address: "Deenanath Mangeshkar Hospital, Erandwane, Pune",
  },
  {
    id: 3,
    name: "Lilavati Hospital & Research Centre Lab",
    contact: "+91 76543 21098",
    services: [
      "Advanced blood testing",
      "Coagulation tests",
      "Blood sugar analysis",
    ],
    address: "Lilavati Hospital, Bandra West, Mumbai, Maharashtra",
  },
  {
    id: 4,
    name: "Nanavati Super Speciality Hospital Lab",
    contact: "+91 65432 10987",
    services: [
      "Complete blood panel",
      "Hematology tests",
      "Blood donor screening",
    ],
    address: "Nanavati Hospital, Vile Parle, Mumbai, Maharashtra",
  },
  {
    id: 5,
    name: "Alexis Multispeciality Hospital Lab",
    contact: "+91 54321 09876",
    services: [
      "Blood group typing",
      "Cross-matching for transfusions",
      "Infection screening",
    ],
    address: "Alexis Multispeciality Hospital, Mankapur, Nagpur",
  },
  {
    id: 6,
    name: "Wockhardt Hospital Diagnostic Lab",
    contact: "+91 43210 98765",
    services: [
      "Platelet count",
      "RBC/WBC count",
      "Genetic blood disorder tests",
    ],
    address: "Wockhardt Hospital, Shankar Nagar, Nagpur",
  },
  {
    id: 7,
    name: "Anand Rishi Blood Testing Lab",
    contact: "+91 32109 87654",
    services: [
      "Blood pressure monitoring",
      "Sugar level tests",
      "Basic pathology",
    ],
    address: "Anand Rishi Hospital, Savedi, Ahmednagar",
  },
  {
    id: 8,
    name: "Noble Hospital Diagnostic Lab",
    contact: "+91 21098 76543",
    services: [
      "Blood typing",
      "Allergy testing",
      "Comprehensive blood analysis",
    ],
    address: "Noble Hospital, Nalegaon, Ahmednagar",
  },
  {
    id: 5,
    name: "Alexis Multispeciality Hospital Lab",
    contact: "+91 54321 09876",
    services: [
      "Blood group typing",
      "Cross-matching for transfusions",
      "Infection screening",
    ],
    address: "Alexis Multispeciality Hospital, Mankapur, Nagpur",
  },
];

const Lab = () => {
  return (
    <section className="container py-5">
      {/* Heading with animation */}
      <motion.h2
        className="text-center fw-bold mb-4"
        style={{ color: "#D2691E" }} // Matching "About Us"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Labs
      </motion.h2>

      <div className="row justify-content-center">
        {lab_Data.map((lab, index) => (
          <motion.div
            key={lab.id}
            className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, boxShadow: " rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="card shadow-lg p-3 border-0 rounded w-100 text-center d-flex flex-column justify-content-between"
              style={{ minHeight: "250px", maxHeight: "270px", opacity: 0.95 }}
            >
              <motion.h5
                className="fw-bold mb-2"
                style={{ color: "#D2691E" }} // Same color as About Us
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {lab.name}
              </motion.h5>

              <p className="text-muted small">
                <strong>Contact:</strong> {lab.contact}
              </p>
              <p className="text-muted small">
                <strong>Address:</strong> {lab.address}
              </p>

              {/* List of Services */}
              <motion.ul
                className="text-muted small text-start ps-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {lab.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Lab;
