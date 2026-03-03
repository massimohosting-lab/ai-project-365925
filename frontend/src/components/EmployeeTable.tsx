import React from 'react';

const EmployeeTable: React.FC = () => {
  return (
    <table className="table-auto w-full mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Position</th>
          <th className="px-4 py-2">Department</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Sample Data */}
        <tr>
          <td className="border px-4 py-2">John Doe</td>
          <td className="border px-4 py-2">Developer</td>
          <td className="border px-4 py-2">IT</td>
          <td className="border px-4 py-2 text-center">
            <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
            <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
          </td>
        </tr>
        {/* More rows could go here */}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
