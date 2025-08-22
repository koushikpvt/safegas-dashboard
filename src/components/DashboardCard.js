import React from 'react';
import '../styles/DashboardCard.css'; // ✅ Correct
const DashboardCard = ({ title, status, lastUpdated }) => {
  const statusClass = status === 'Safe' ? 'safe' : 'alert';

  return (
    <div className="dashboard-card">
      <h2 className="card-title">{title}</h2>
      <p className={`card-value ${statusClass}`}>{status}</p>
      <p className="card-timestamp">Last updated: {lastUpdated}</p>
      <button className="card-button">View Details</button>
    </div>
  );
};

export default DashboardCard;