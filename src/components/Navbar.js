import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={{ color: "#fff" }}>Student App</h2>
      <div>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/add-student">Add Student</Link>
        <Link style={styles.link} to="/students">All Students</Link>
        <button style={styles.logout} onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "#2B3A55",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    marginRight: "15px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
  logout: {
    background: "#E84545",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default Navbar;
