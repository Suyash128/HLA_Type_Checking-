import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

export default function Registration() {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVariant, setPopupVariant] = useState("danger");

  const handleChange = (name) => (event) => {
    setUserdata({ ...userdata, [name]: event.target.value });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!userdata.role) {
      setPopupMessage("Please select a role before submitting.");
      setPopupVariant("danger");
      setShowPopup(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      setPopupMessage("Registration successful! Redirecting...");
      setPopupVariant("success");
      setShowPopup(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      setPopupMessage("Error registering. Please try again.");
      setPopupVariant("danger");
      setShowPopup(true);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3">
      <div className="bg-dark p-4 rounded shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <form onSubmit={submitHandler}>
          <div className="text-light mb-3 text-center">
            <h3>Sign Up</h3>
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Text>
              <img src="https://circumicons.com/icon/user" alt="User" width="20px" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Full Name"
              name="name"
              onChange={handleChange("name")}
              required
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>
              <img src="https://circumicons.com/icon/mail" alt="Email" width="20px" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange("email")}
              required
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>
              <img src="https://circumicons.com/icon/lock" alt="Password" width="20px" />
            </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange("password")}
              required
            />
          </InputGroup>

      <Form.Group className="mb-3">
  <Form.Label className="text-light small">Select Role</Form.Label>
  <Form.Select
    name="role"
    onChange={handleChange("role")}
    required
    className="form-select-sm" // Bootstrap class for a smaller dropdown
    style={{ fontSize: "14px", padding: "5px 10px" }} // Adjust text & padding
  >
    <option value="">Choose a role</option>
    <option value="doctor">Doctor</option>
    <option value="patient">Patient</option>
    <option value="donor">Donor</option>
  </Form.Select>
</Form.Group>

          <button type="submit" className="btn btn-success btn-block w-100">
            Register
          </button>

          <div className="text-center mt-3">
            <small className="text-light">Already have an account?</small>
            <NavLink to="/" className="text-success text-decoration-none fw-bold ms-2">
              Login
            </NavLink>
          </div>
        </form>
      </div>

      <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
        <Modal.Body className={`text-center text-${popupVariant}`}>{popupMessage}</Modal.Body>
      </Modal>
    </div>
  );
}
