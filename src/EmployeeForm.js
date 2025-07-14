import React from 'react';
import './EmployeeForm.css'; // Assuming you have a CSS file for styling
class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: ''
        };
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
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
        );
        }
        
    }
    
    export default EmployeeForm;
