import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import RoomCard from './components/RoomCard';
import RoomForm from './components/RoomForm';
import BookingForm from './components/BookingForm';
import { getRooms, saveRoom, getBookings, saveBooking } from './utils/storage';
import { getRoomStatus } from './utils/dateUtils';
import { Loader2, AlertCircle } from 'lucide-react';

function App() {
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showAddRoom, setShowAddRoom] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    try {
      const [roomsData, bookingsData] = await Promise.all([getRooms(), getBookings()]);
      setRooms(roomsData);
      setBookings(bookingsData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data. Please check your connection and permissions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddRoom = async (newRoom) => {
    setLoading(true);
    setError(null);
    try {
      await saveRoom(newRoom);
      await fetchData();
      setShowAddRoom(false); // Close modal on success
    } catch (err) {
      console.error("Error adding room:", err);
      setError("Failed to save room. " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBookRoom = async (booking) => {
    setLoading(true);
    setError(null);
    try {
      await saveBooking(booking);
      await fetchData();
      setSelectedRoom(null); // Close modal on success
    } catch (err) {
      console.error("Error booking room:", err);
      setError("Failed to book room. " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading && rooms.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--accent-primary)' }}>
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <Layout onOpenAddRoom={() => setShowAddRoom(true)}>
      {error && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid var(--danger)',
          color: 'var(--danger)',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {rooms.map(room => (
          <RoomCard
            key={room.id}
            room={room}
            status={getRoomStatus(room.id, bookings)}
            onBook={setSelectedRoom}
          />
        ))}
      </div>

      {!loading && rooms.length === 0 && !error && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
          <h2>No rooms added yet</h2>
          <p>Click the "Add Room" button to get started.</p>
        </div>
      )}

      {showAddRoom && (
        <RoomForm
          onClose={() => setShowAddRoom(false)}
          onSave={handleAddRoom}
        />
      )}

      {selectedRoom && (
        <BookingForm
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onSave={handleBookRoom}
        />
      )}
    </Layout>
  );
}

export default App;
