import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm/EmployeeForm.js';
import EmployeeList from './components/EmployeeList/EmployeeList.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { Link } from 'react-router-dom'; // Import Link for navigation

function EmployeeDetail() {
  return (
    <div>
      <h2>Employee Detail Page</h2>
      <p>This will display employee info based on the ID in the URL.</p>
    </div>
  );
}

const App = () => {
  const [employees, setEmployees] = useState([]);
  // load from localStorage on first render
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  // add employee handler
  const handleAddEmployee = (newEmployee) => {
    const idExists = employees.some(emp => emp.id === newEmployee.id);
    const emailExists = employees.some(emp => emp.email === newEmployee.email);

    if (idExists || emailExists) {
      const reason = idExists && emailExists
        ? 'ID and Email already exist.'
        : idExists
          ? 'Employee with this ID already exists.'
          : 'Employee with this Email already exists.';
      alert(reason );
      return;
    }
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <Router>
      <div className="app">
        <h1>Employee Management System</h1>
        <EmployeeForm onAddEmployee={handleAddEmployee} />
        <EmployeeList employees={employees} />
        
        {/* Add routes if you're planning to show employee details */}
        <Routes>
          <Route path="/employees/:id" element={<EmployeeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App