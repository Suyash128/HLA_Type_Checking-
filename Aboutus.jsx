import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Aboutus() {
  return (
    <section className="container py-5 text-center">
      <div className="row align-items-center justify-content-center">
        {/* Image First for Mobile, Left Side for Large Screens */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <motion.img
            src="/images/WhatsApp Image 2025-02-12 at 11.28.18 PM.jpeg"
            alt="About HAL"
            className="img-fluid rounded shadow-lg"
            style={{ maxWidth: "85%" , padding:"10%"}}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>

        {/* Text Section - Centered Content */}
        <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
          <motion.h2
            className="fw-bold mb-4"
            style={{ color: "#D2691E" }} // Same color as "Our Services"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="lead text-muted mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            At HAL, we are committed to saving lives by bridging the gap between
            blood donors and patients in need. Our platform leverages AI-driven
            technology to ensure fast, secure, and reliable blood donor matching.
          </motion.p>

          <motion.p
            className="text-muted mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
          >
            We believe in creating a community of heroes who are ready to make a
            difference. Whether you are a volunteer donor, a patient in need, or
            a healthcare provider, our goal is to provide real-time solutions and
            secure health records.
          </motion.p>

          <motion.p
            className="fw-bold text-center mt-4"
            style={{ fontSize: "1.4rem", color: "#D2691E" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.6,
              delay: 0.7,
              type: "spring",
              stiffness: 100,
            }}
          >
            Join us in our mission to save lives—because every drop counts!
          </motion.p>
        </div>
      </div>
    </section>
  );
}
