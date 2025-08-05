import { Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm/EmployeeForm.jsx';
import EmployeeList from './components/EmployeeList/EmployeeList.jsx';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeForm />} />
      <Route path="/directory" element={<Directory />} />
      <Route path="/summary" element={<SummaryDashboard />} />
    </Routes>
  );
};

export default AppRoutes;

