import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import SensorCard from './components/SensorCard';
import ServoRotationHistory from './components/ServoRotationHistory';

function App() {
  const [sensorLogs, setSensorLogs] = useState([]);
  const [rotationEvents, setRotationEvents] = useState([]);

  const fetchSensorData = async () => {
    const { data, error } = await supabase
      .from('sensors')
      .select('*')
      .eq('device_id', 'SafeGas-001')
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('❌ Supabase fetch error:', error);
    } else {
      setSensorLogs(data);
    }
  };

  const fetchRotationEvents = async () => {
    const { data, error } = await supabase
      .from('rotation_events')
      .select('*')
      .eq('device_id', 'SafeGas-001')
      .order('rotation_time', { ascending: false });

    if (error) {
      console.error('❌ Rotation fetch error:', error);
    } else {
      setRotationEvents(data);
    }
  };

  useEffect(() => {
    fetchSensorData();
    fetchRotationEvents();
    const interval = setInterval(() => {
      fetchSensorData();
      fetchRotationEvents();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const latestPing = sensorLogs[0];
  const latestServoEvent = sensorLogs.find(log => log.servo_angle !== null);

  const formatIST = (timestamp) =>
    new Date(timestamp).toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '40px' }}>
      {latestServoEvent && latestPing && (
        <SensorCard
          name="SafeGas-001 Sensor"
          status={latestServoEvent.status}
          servoTimestamp={formatIST(latestServoEvent.timestamp)}
          pingTimestamp={formatIST(latestPing.timestamp)}
          logs={sensorLogs}
        />
      )}

      <ServoRotationHistory rotationEvents={rotationEvents} />
    </div>
  );
}

export default App;