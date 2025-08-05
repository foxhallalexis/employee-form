import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, title, department } = formData;

    if (!name || !email || !title || !department) {
      alert('Please fill in all fields');
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name,
      email,
      title,
      department
    };

    if (onAddEmployee) onAddEmployee(newEmployee);

    setFormData({ name: '', email: '', title: '', department: '' });
    console.log('Form submitted:', newEmployee);
  };

  const renderInput = (label, name, type = 'text') => (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        required
      />
    </div>
  );

  return (
    <div className="employee-form-container">
        <h1 className="visually-hidden">Employee Management System</h1>
        <nav aria-label="Main Navigation">
            <ul>
            <li><a href="#form-heading">Add Employee</a></li>
            <li><a href="#employee-list">Employee List</a></li>
            </ul>
        </nav>

        <h2 id="form-heading">Add New Employee</h2>


      <form onSubmit={handleSubmit} className="employee-form" aria-label="Add Employee Form">
        {renderInput('Name', 'name')}
        {renderInput('Email', 'email', 'email')}
        {renderInput('Title', 'title')}
        {renderInput('Department', 'department')}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;

