import React from 'react';
import './EmployeeDetails.css'; 
import { useParams , useNavigate } from 'react-router-dom';

function EmployeeDetails({ employees }) {
  const { id } = useParams(); // gets the :id from URL
  const navigate = useNavigate(); // for navigation

  // Log the id and employees for debugging
  console.log("URL ID:", id);
  console.log("Employees Length:", employees.length);
  console.log("Employee IDs:", employees.map(emp => emp.id));
  console.log("URL ID Type:", typeof id);
  console.log("Employee ID Types:", employees.map(emp => typeof emp.id));

  // Early return if data isn't ready
  if (!employees || employees.length === 0) {
    return <div><h2>Loading employee data...</h2></div>;
  }

  // Only run this once data is loaded
  const employee = employees.find(emp => String(emp.id) === id);
  console.log("Employee match:", employee); // log the found employee

  // If the ID didn’t match any employee
  if (!employee) {
    return <div><h2>Employee Not Found</h2></div>;
  }
  // Render employee details
  return (
    <div className="welcome-container">
      <h1 id="details-heading">USPS Employee Management System </h1>
      <h2>Employee Details</h2>
      <div className="employee-card">
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Employee ID:</strong> {employee.id}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Title:</strong> {employee.title}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <button className="back-button" onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
);
}

export default EmployeeDetails;