import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.title}>Dashboard</h1>
        <p style={styles.subtitle}>Manage student registrations and records smoothly.</p>

        <div style={styles.cardContainer}>
          
          {/* Add Student */}
          <div style={styles.card} onClick={() => navigate("/add-student")}>
            <h2 style={styles.cardTitle}>Add Student</h2>
            <p style={styles.cardDesc}>Register a new student in the system.</p>
          </div>

          {/* View Students */}
          <div style={styles.card} onClick={() => navigate("/students")}>
            <h2 style={styles.cardTitle}>View Students</h2>
            <p style={styles.cardDesc}>View or delete registered students.</p>
          </div>

          {/* Logout */}
          <div
            style={{ ...styles.card, background: "#E84545", color: "#fff" }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            <h2 style={styles.cardTitle}>Logout</h2>
            <p style={styles.cardDesc}>Exit from your session.</p>
          </div>

        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    color: "#2B3A55",
    fontSize: "36px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    width: "260px",
    padding: "30px",
    borderRadius: "12px",
    background: "#F5F5F5",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  },
  cardTitle: {
    margin: "0 0 10px 0",
    fontSize: "24px",
    color: "#2B3A55",
  },
  cardDesc: {
    fontSize: "16px",
    color: "#555",
  },
};


export default Dashboard;
