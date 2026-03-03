import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 font-bold text-lg">ERP System</div>
      <nav>
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">Dashboard</li>
          <li className="px-4 py-2 hover:bg-gray-700">Employees</li>
          {/* Additional navigation items */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
