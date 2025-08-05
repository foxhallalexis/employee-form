import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = ({ employees }) => {
    const totalEmployees = employees.length;
  return (
    <section className="welcome-container">
      <h1>Welcome to the USPS Employee Management System</h1>
      <p>This system helps USPS staff track employee details, assignments, and status updates efficiently.</p>
         <p className="employee-count" aria-live="polite">
        Total Employees: <strong>{totalEmployees}</strong>
      </p>
      <div className="welcome-actions">
        <Link to="/form" className="welcome-button">Add New Employee</Link>
        <Link to="/list" className="welcome-button">View Employee List</Link>
      </div>
    </section>
  );
};

export default WelcomePage;

