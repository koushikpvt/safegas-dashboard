import React from 'react';

function RotationLog({ events }) {
  return (
    <div style={{ marginTop: '40px' }}>
      <h2>🔄 Servo Rotation History</h2>
      {events.length === 0 ? (
        <p>No rotation events recorded yet.</p>
      ) : (
        events.map((event, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '1em 0', padding: '1em', borderRadius: '8px' }}>
            <h3>{new Date(event.rotation_time).toLocaleString()} — <span style={{ color: event.rotation_direction === 'OFF' ? 'red' : 'green' }}>{event.rotation_direction}</span></h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>Before:</strong>
                <ul>
                  {event.pre_readings.map((r, i) => (
                    <li key={i}>{new Date(r.timestamp).toLocaleTimeString()} → {r.gas_level}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>After:</strong>
                <ul>
                  {event.post_readings.map((r, i) => (
                    <li key={i}>{new Date(r.timestamp).toLocaleTimeString()} → {r.gas_level}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RotationLog;