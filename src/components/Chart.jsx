// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  Pie,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FaChartBar, FaChartPie, FaChartLine } from 'react-icons/fa';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 200 },
  { name: 'May', value: 300 },
];

// eslint-disable-next-line react/prop-types
function Chart({ title, type = 'line' }) {
  const [chartType, setChartType] = useState(type);

  const handleChartTypeChange = (newType) => {
    setChartType(newType);
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded-lg ${
              chartType === 'line' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleChartTypeChange('line')}
          >
            <FaChartLine />
          </button>
          <button
            className={`p-2 rounded-lg ${
              chartType === 'bar' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleChartTypeChange('bar')}
          >
            <FaChartBar />
          </button>
          <button
            className={`p-2 rounded-lg ${
              chartType === 'pie' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleChartTypeChange('pie')}
          >
            <FaChartPie />
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        {chartType === 'line' && (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        )}
        {chartType === 'bar' && (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        )}
        {chartType === 'pie' && (
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;