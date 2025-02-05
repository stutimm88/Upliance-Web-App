// src/components/Dashboard.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'User Trends',
        data: [65, 59, 80, 81],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
