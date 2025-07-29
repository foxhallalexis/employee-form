import React, { useState } from 'react';
import './EmployeeForm.css'; // Assuming you have a CSS file for styling

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: '',
        };
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, title, department } = this.state;

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
        // Notify App.js to update its state
        if (this.props.onAddEmployee) {
            this.props.onAddEmployee(newEmployee);
        }

        // Reset form fields
        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        });

        console.log('Form submitted:', newEmployee);
    };
    renderInputField(label, name, type = 'text') {
        return (
            <div className="form-group">
                <label>{label}:</label>
                <input
                    type={type}
                    name={name}
                    value={this.state[name]}
                    onChange={this.handleChange} /> 
            </div>
        );
    }   
    render() {
        return (
            <div className="employee-form-container">
                <form onSubmit={this.handleSubmit} className="employee-form">
                    {this.renderInputField('Name', 'name')}
                    {this.renderInputField('Email', 'email', 'email')}
                    {this.renderInputField('Title', 'title')}  
                    {this.renderInputField('Department', 'department')}
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
        }
    }
    
    export default EmployeeForm;
