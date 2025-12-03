import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function BookingForm({ room, onClose, onSave }) {
    const [formData, setFormData] = useState({
        guestName: '',
        startDate: '',
        endDate: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, roomId: room.id });
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="glass-panel modal-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <h2 style={{ margin: 0 }}>Book {room.name}</h2>
                    <button onClick={onClose} style={{ background: 'none', color: 'var(--text-secondary)' }}>
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input-field"
                        placeholder="Guest Name"
                        value={formData.guestName}
                        onChange={e => setFormData({ ...formData, guestName: e.target.value })}
                        required
                    />
                    <div style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Check-in Date</div>
                    <input
                        className="input-field"
                        type="date"
                        value={formData.startDate}
                        onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                        required
                    />
                    <div style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Check-out Date</div>
                    <input
                        className="input-field"
                        type="date"
                        value={formData.endDate}
                        onChange={e => setFormData({ ...formData, endDate: e.target.value })}
                        required
                    />
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Confirm Booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
