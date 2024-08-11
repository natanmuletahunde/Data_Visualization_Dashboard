// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaChartBar, FaChartPie, FaChartLine } from 'react-icons/fa';
import Chart from './Chart';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('bar');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between mb-6">
          <div className="flex space-x-4">
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'bar'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick('bar')}
            >
              <FaChartBar />
              <span>Bar Chart</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'pie'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick('pie')}
            >
              <FaChartPie />
              <span>Pie Chart</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'line'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick('line')}
            >
              <FaChartLine />
              <span>Line Chart</span>
            </button>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Export Data
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Chart title="Sales Data" type={activeTab} />
          <Chart title="User Growth" type={activeTab} />
          <Chart title="Revenue" type={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;