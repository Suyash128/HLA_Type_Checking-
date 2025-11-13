import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const doctorsData = [
  {
    id: 1,
    name: "Dr. Aryan Mehta",
    specialization: "Hematologist",
    contact: "+91 98765 43210",
    experience: "15+ years",
    address: "Ruby Hall Clinic, Sangamwadi, Pune, Maharashtra",
    whatsapp: "919876543210", // Dummy WhatsApp number
  },
  {
    id: 2,
    name: "Dr. Sneha Patil",
    specialization: "Oncologist",
    contact: "+91 87654 32109",
    experience: "12+ years",
    address: "Deenanath Mangeshkar Hospital, Erandwane, Pune",
    whatsapp: "918765432109",
  },
  {
    id: 3,
    name: "Dr. Rajesh Sharma",
    specialization: "Cardiologist",
    contact: "+91 76543 21098",
    experience: "20+ years",
    address: "Lilavati Hospital, Bandra West, Mumbai, Maharashtra",
    whatsapp: "917654321098",
  },
  {
    id: 4,
    name: "Dr. Priya Iyer",
    specialization: "General Physician",
    contact: "+91 65432 10987",
    experience: "18+ years",
    address: "Nanavati Hospital, Vile Parle, Mumbai, Maharashtra",
    whatsapp: "916543210987",
  },
  {
    id: 5,
    name: "Dr. Vikram Joshi",
    specialization: "Neurologist",
    contact: "+91 54321 09876",
    experience: "16+ years",
    address: "Alexis Multispeciality Hospital, Mankapur, Nagpur",
    whatsapp: "915432109876",
  },
  {
    id: 6,
    name: "Dr. Ananya Deshmukh",
    specialization: "Pediatrician",
    contact: "+91 43210 98765",
    experience: "10+ years",
    address: "Wockhardt Hospital, Shankar Nagar, Nagpur",
    whatsapp: "914321098765",
  },
  {
    id: 7,
    name: "Dr. Kiran Jadhav",
    specialization: "Orthopedic Surgeon",
    contact: "+91 32109 87654",
    experience: "14+ years",
    address: "Anand Rishi Hospital, Savedi, Ahmednagar",
    whatsapp: "913210987654",
  },
  {
    id: 8,
    name: "Dr. Swati Kulkarni",
    specialization: "Gynecologist",
    contact: "+91 21098 76543",
    experience: "17+ years",
    address: "Noble Hospital, Nalegaon, Ahmednagar",
    whatsapp: "912109876543",
  },
  {
    id: 9,
    name: "Dr. Amit Verma",
    specialization: "Endocrinologist",
    contact: "+91 10987 65432",
    experience: "22+ years",
    address: "Apollo Hospital, Andheri, Mumbai, Maharashtra",
    whatsapp: "911098765432",
  },
];

const Doctors = () => {
  return (
    <section className="container mt-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#D2691E" }}>Our Doctors</h2>
      <div className="row">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="col-md-6 col-lg-4 mb-4">
            <motion.div
              className="card shadow-sm p-3 border-0 rounded text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                height: "100%",
                backgroundColor: "#f9f9f9",
                opacity: 0.95,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h5 className="fw-bold" style={{ color: "#D2691E" }}>
                  {doctor.name} - {doctor.specialization}
                </h5>
                <p className="text-muted">
                  <strong>Experience:</strong> {doctor.experience}
                </p>
                <p className="text-muted">
                  <strong>Contact:</strong> {doctor.contact}
                </p>
                <p className="text-muted">
                  <strong>Address:</strong> {doctor.address}
                </p>
              </div>

              {/* WhatsApp Chat Button */}
              <a
                href={`https://wa.me/${doctor.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  padding: "6px",
                  marginTop: "0px",
                  borderRadius: "2px",
                }}
              >
                <FaWhatsapp style={{ marginRight: "8px", fontSize: "1.2rem" }} />
                Chat Now
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
