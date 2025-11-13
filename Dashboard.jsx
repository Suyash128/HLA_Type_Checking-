import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  const userData = localStorage.getItem("role");
  console.log("User:", userData);

  return (
    <section className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side: Heading and Text */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start">
          <motion.h1
            className="fw-bold"
            style={{ color: "#D2691E" }} // Chocolate / Reddish Color
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Want to know your HLA type?
          </motion.h1>

          <motion.p
            className="lead mt-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            We will help you find HLA testing labs near you with less effort.
            With our support, you can easily determine your HLA type.
          </motion.p>


        </div>

        {/* Right Side: Image (Centered for Mobile, Side for Large Screens) */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <motion.img
            src="/images/WhatsApp Image 2025-02-12 at 10.41.25 PM.jpeg"
            alt="Lab Testing"
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "85%", marginTop: "20px", borderRadius: "10px" }}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </div>
      </div>
    </section>
  );
}
