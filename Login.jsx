import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const changeHandler = (name) => (e) => {
    setLoginData({ ...loginData, [name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.token);

      if (response.data.token) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="bg-dark p-4 rounded shadow-lg"
        style={{
          width: "100%",
          maxWidth: "400px",
          minWidth: "300px",
        }}
      >
        <form onSubmit={submitHandler} className="w-100">
          <div className="text-light text-center mb-3">
            <h3 className="fw-bold">Sign In</h3>
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <InputGroup className="mb-3">
            <InputGroup.Text>
              <img
                src="https://circumicons.com/icon/mail"
                alt="User"
                style={{ width: "20px" }}
              />
            </InputGroup.Text>
            <Form.Control
              placeholder="Email"
              type="email"
              name="email"
              onChange={changeHandler("email")}
              value={loginData.email}
              required
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>
              <img
                src="https://circumicons.com/icon/lock"
                style={{ width: "20px" }}
                alt="Lock"
              />
            </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler("password")}
              value={loginData.password}
              required
            />
          </InputGroup>

          <div className="row mb-3">
            <div className="col-6 d-flex align-items-center">
              <input className="form-check-input me-2" type="checkbox" id="rememberMe" />
              <label className="form-check-label text-light" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <div className="col-6 text-end">
              <a href="#!" className="text-light small">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 py-2">
            Sign In
          </button>

          <div className="text-center mt-3">
            <NavLink to="/signup">
              <button type="button" className="btn btn-outline-light w-100 py-2">
                Register
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
