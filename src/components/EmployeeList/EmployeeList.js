// src/components/EmployeeList/EmployeeList.js
import React from 'react';
import './EmployeeList.css';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function EmployeeList(props) {
  return (
    <div className="employee-list-wrapper">
        <div className="employee-list">
            <div className="employee-list-header">
                <h1>Employee List</h1>
            </div>
            <ul>
                {props.employees.map((employee) => (
                    <li key={employee.EmployeeId}>
                        <span>{employee.name}</span>
                        <Link to={`/employees/${employee.EmployeeId}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default EmployeeList;

