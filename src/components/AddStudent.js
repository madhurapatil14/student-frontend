import React, { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    course: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // Get existing students from localStorage or an empty array
  const existing = JSON.parse(localStorage.getItem("students")) || [];

  // Add the new student
  const updated = [...existing, formData];

  // Save it back
  localStorage.setItem("students", JSON.stringify(updated));

  alert("Student Registered Successfully!");

  // Clear the form
  setFormData({ name: "", roll: "", course: "", email: "" });
};


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={inputStyle} />
        <input name="roll" placeholder="Roll Number" value={formData.roll} onChange={handleChange} style={inputStyle} />
        <input name="course" placeholder="Course" value={formData.course} onChange={handleChange} style={inputStyle} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
        <br />
        <button type="submit" style={btnStyle}>Submit</button>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px auto",
  padding: "8px",
  width: "250px",
};

const btnStyle = {
  padding: "8px 16px",
  background: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "4px",
};

export default StudentForm;
