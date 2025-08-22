import React from "react";

// Utility function to format timestamp in IST
function formatIST(timestamp) {
  return new Date(timestamp).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

// Individual rotation event renderer
function RotationEvent({ event }) {
  return (
    <div style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
      <p><strong>Rotation Time:</strong> {formatIST(event.rotation_time)}</p>
      <p><strong>Servo Angle:</strong> {event.servo_angle}°</p>
      <p><strong>Gas Readings:</strong> {event.gas_readings.join(", ")}</p>
    </div>
  );
}

// Main history component
export default function ServoRotationHistory({ rotationEvents }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>🔄 Servo Rotation History</h3>
      {rotationEvents && rotationEvents.length > 0 ? (
        rotationEvents.map((event, index) => (
          <RotationEvent key={index} event={event} />
        ))
      ) : (
        <p style={{ color: "#888" }}>No rotation events recorded yet.</p>
      )}
    </div>
  );
}