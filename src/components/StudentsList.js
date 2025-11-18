import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("/api/students");
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Students</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{s.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{s.email}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
