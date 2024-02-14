import React, { useEffect, useState } from "react";
import "./Patient.css";
import axios from "axios";

const Patient = () => {
  const [PatientDetails, setPatientDetails] = useState([]);

  useEffect(() => {
    loadPatientDetails();
  }, []);

  const loadPatientDetails = async () => {
    const result = await axios.get(
      "http://localhost:8080/patients/getPatients"
    );
    setPatientDetails(result.data);
  };

  return (
    <div className="patient-page">
      <div className="patient-box card">
        <div className="patient-table">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Questions</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {PatientDetails.map((patient, index) => (
                <tr key={patient.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{patient.name}</td>
                  <td>{patient.email}</td>
                  <td>{patient.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Patient;
