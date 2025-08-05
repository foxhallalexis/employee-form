import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm/EmployeeForm.jsx';
import EmployeeList from './components/EmployeeList/EmployeeList.jsx';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);
  const handleAddEmployee = (newEmployee) => {
    newEmployee.id = parseInt(newEmployee.id, 10);
    const idExists = employees.some(emp => emp.id === newEmployee.id);
    const emailExists = employees.some(emp => emp.email === newEmployee.email);

    if (idExists || emailExists) {
      const reason = idExists && emailExists
        ? 'ID and Email already exist.'
        : idExists
          ? 'Employee with this ID already exists.'
          : 'Employee with this Email already exists.';
      alert(reason);
      return;
    }

    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<WelcomePage employees={employees}/>} />
          <Route path="/form" element={<EmployeeForm onAddEmployee={handleAddEmployee} />} />
          <Route path="/list" element={<EmployeeList employees={employees} />} />
          <Route path="/employees/:id" element={<EmployeeDetails employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;