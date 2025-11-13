import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Signup";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Doctors from "./pages/Doctors";
import Lab from "./pages/Lab";
import User_Dashboard from "./pages/User_Dashboard";

function App() {
  const location = useLocation();
  console.log("location.pathname ", location.pathname);

  if (location.pathname == "/") {
    localStorage.clear();
  }
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Registration />} />

      {/* Keep Header and Outlet for Dashboard & Services */}
      <Route path="/" element={<Layout />}>
        {" "}
        {/* Changed from "main" to "/" */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="doctor" element={<Doctors />} />
        <Route path="labs" element={<Lab />} />
        <Route path="user_dash" element={<User_Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
