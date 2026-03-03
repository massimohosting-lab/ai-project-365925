import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EmployeePage from './pages/EmployeePage';

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Dashboard />
        <EmployeePage />
      </main>
    </div>
  );
};

export default App;
