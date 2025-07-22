import React from 'react';
import './EmployeeForm.css'; // Assuming you have a CSS file for styling
class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: '',
            employees: [] // NEW: store submitted employees
        };
    }
    componentDidMount() {
        // Load from local storage on component mount
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        this.setState({ employees: storedEmployees });
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    saveData = () => {
        // Save array to local storage
        localStorage.setItem('employees', JSON.stringify(this.state.employees));
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, title, department,employees } = this.state;
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
        const updatedEmployees = [...employees, newEmployee];
        this.setState({ employees: updatedEmployees, 
            name: '',
            email: '',
            title: '',
            department: ''
        }, () => {
            this.saveData(updatedEmployees);
        });

        // Here you would typically handle form submission
        console.log('Form submitted:', this.state);
        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        }); 
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="employee-form">
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Department:</label>
                        <input
                            type="text"
                            name="department"
                            value={this.state.department}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <h2>Employee List</h2>
                <ul>
                    {this.state.employees.map(employee => (
                        <li key={employee.id}>
                            {employee.name} - {employee.email} - {employee.title} - {employee.department}
                        </li>
                    ))}
                </ul>
            </div>
        );
        }
    }
    
    export default EmployeeForm;
