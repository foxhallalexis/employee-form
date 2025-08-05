// src/components/EmployeeList/EmployeeList.js
import React from 'react';
import './EmployeeList.css';
import { Link } from 'react-router-dom';

function EmployeeList(props) {
    const totalEmployees = props.employees.length;
  return (
    <div className="welcome-container">
        <div className="employee-list">
            <div className="employee-list-header">
                <h1>USPS Employee Management System</h1>
                <p><h2>Employee List</h2></p>
                <p className="employee-count" aria-live="polite">
        Total Employees: <strong>{totalEmployees}</strong>
      </p>
            </div>
            <ul>
                {props.employees.map((employee) => (
                    <li key={employee.id}>
                        <span className="employee-name">{employee.name}</span>
                        <Link to={`/employees/${employee.id}`} className="welcome-button">View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default EmployeeList;

