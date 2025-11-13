import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";

export default function User_Dashboard() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [matchingDonors, setMatchingDonors] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [donorData, setDonorData] = useState({ contactInfo: "", hlaType: "" });
  const [patientData, setPatientData] = useState({
    hlaType: "",
  });

  // Popup Message
  const [, setShowPopup] = useState(false);
  const [, setPopupMessage] = useState("");
  const [, setPopupVariant] = useState("success");
  console.log("userRole", userRole);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.clear();
      navigate("/");
      return;
    }

    if (decoded.exp * 1000 < Date.now()) {
      console.error("Token expired. Redirecting to login...");
      localStorage.clear();
      navigate("/");
      return;
    }

    setUserRole(decoded.role);

    if (decoded.role === "doctor") {
      fetchPatients();
    } else if (decoded.role === "patient") {
      fetchMatchingDonors();
      submitPatientData();
    } else if (decoded.role === "donor") {
      submitDonorData();
    }
    setLoading(false);
  }, [userRole]);

  // ✅ Fetch all patients for doctors
  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/doctors/patients",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setPatients(response.data.patients || []);
    } catch (error) {
      console.error(
        "Error fetching patients:",
        error.response?.data?.message || error.message
      );
      setError(error.response?.data?.message || "Failed to load patient data.");
    }
  };

  // ✅ Fetch matching donors for patients
  const fetchMatchingDonors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/patients/matching-donors",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setMatchingDonors(response.data.matchingDonors || []);
    } catch (error) {
      console.error(
        "Error fetching matching donors:",
        error.response?.data?.message || error.message
      );
      setMatchingDonors([]);
    }
  };

  // ✅ Submit Patient HLA Type
  const submitPatientData = async (e) => {
    e.preventDefault();
    setPopupMessage("");
    setShowPopup(false);

    try {
      await axios.post(
        "http://localhost:5000/api/patients/register",
        patientData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setPopupMessage("HLA Type submitted successfully!");
      setPopupVariant("success");
      setShowPopup(true);
      setPatientData({ hlaType: "" });

      fetchMatchingDonors();
    } catch (error) {
      setPopupMessage("Failed to submit HLA Type. Please try again.");
      setPopupVariant("danger");
      setShowPopup(true);
    }
  };

  // ✅ Submit Donor Details
  const submitDonorData = async (e) => {
    e.preventDefault();
    setPopupMessage("");
    setShowPopup(false);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/donors/register",
        donorData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setPopupMessage("Patient Type submitted successfully!");
      setPopupVariant("success");
      setShowPopup(true);
      setDonorData({ hlaType: "", contactInfo: "" });
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setPopupMessage("Failed to submit HLA Type. Please try again.");
      setPopupVariant("danger");
      setShowPopup(true);
    }
  };

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-center fw-bold mb-4 text-danger"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        User Dashboard
      </motion.h2>

      {loading ? (
        <p className="text-center text-muted">Loading data...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : userRole === "doctor" ? (
        <div>
          <h4 className="mt-4">Patients List</h4>
          <Table striped bordered hover responsive className="shadow-lg">
            <thead className="bg-dark text-white">
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Email</th>
                <th>HLA Type</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient._id}>
                  <td>{index + 1}</td>
                  <td>{patient.userId.name}</td>
                  <td>{patient.userId.email}</td>
                  <td>{patient.hlaType}</td>
                  <td>{new Date(patient.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : userRole === "patient" ? (
        <div>
          <h4 className="mt-4">Submit HLA Type</h4>
          <Form
            onSubmit={submitPatientData}
            className="shadow-lg p-4 bg-light rounded"
          >
            <Form.Group className="mb-3">
              <Form.Label>HLA Type</Form.Label>
              <Form.Control
                type="text"
                name="hlaType"
                value={patientData.hlaType}
                onChange={(e) =>
                  setPatientData({
                    ...patientData,
                    hlaType: e.target.value,
                  })
                }
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Submit
            </Button>
          </Form>

          <h4 className="mt-5">Matching Donors</h4>
          {matchingDonors.length > 0 ? (
            <Table striped bordered hover responsive className="shadow-lg">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Info</th>
                  <th>HLA Type</th>
                </tr>
              </thead>
              <tbody>
                {matchingDonors.map((donor) => (
                  <tr key={donor._id}>
                    <td>{donor.userId.name}</td>
                    <td>{donor.userId.email}</td>
                    <td>{donor.contactInfo}</td>
                    <td>{donor.hlaType}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-center">No matching donors found.</p>
          )}
        </div>
      ) : userRole === "donor" ? (
        <div>
          <h4 className="mt-4">Submit HLA Type</h4>
          <Form
            onSubmit={submitDonorData}
            className="shadow-lg p-4 bg-light rounded"
          >
            <Form.Group className="mb-3">
              <Form.Label>HLA Type</Form.Label>
              <Form.Control
                type="text"
                name="hlaType"
                value={donorData.hlaType}
                onChange={(e) =>
                  setDonorData({ ...donorData, hlaType: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Info</Form.Label>
              <Form.Control
                type="text"
                name="contactInfo"
                value={donorData.contactInfo}
                onChange={(e) =>
                  setDonorData({ ...donorData, contactInfo: e.target.value })
                }
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Submit
            </Button>
          </Form>

          <h4 className="mt-5">Matching Donors</h4>
          {matchingDonors.length > 0 ? (
            <Table striped bordered hover responsive className="shadow-lg">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Info</th>
                  <th>HLA Type</th>
                </tr>
              </thead>
              <tbody>
                {matchingDonors.map((donor) => (
                  <tr key={donor._id}>
                    <td>{donor.userId.name}</td>
                    <td>{donor.userId.email}</td>
                    <td>{donor.contactInfo}</td>
                    <td>{donor.hlaType}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-center">No matching donors found.</p>
          )}
        </div>
      ) : (
        <p>You are not authorized to view this data.</p>
      )}
    </motion.div>
  );
}
