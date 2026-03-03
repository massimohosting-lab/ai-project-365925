import React, { useState } from 'react';

const EmployeeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for adding a new employee
    console.log('Submitting:', { name, position, department });
    setName('');
    setPosition('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block mb-1" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1" htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1" htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
