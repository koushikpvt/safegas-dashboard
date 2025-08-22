import React from 'react';

export default function SensorCard({ name, status, servoTimestamp, pingTimestamp }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p style={{ color: status === 'Alert' ? 'red' : 'green' }}>
        ⚠️ <strong>{status}</strong>
      </p>
      <p><strong>Last updated (servo):</strong> {servoTimestamp}</p>
      <p><strong>Last sensor ping:</strong> {pingTimestamp}</p>
      <button style={{ marginTop: '10px' }}>View Details</button>
    </div>
  );
}