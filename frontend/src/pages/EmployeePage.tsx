import React from 'react';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeForm from '../components/EmployeeForm';

const EmployeePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
      <EmployeeForm />
      <EmployeeTable />
    </div>
  );
};

export default EmployeePage;
