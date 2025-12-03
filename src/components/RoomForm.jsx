import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function RoomForm({ onClose, onSave }) {
    const [formData, setFormData] = useState({
        name: '',
        type: 'Single',
        price: '',
        amenities: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="glass-panel modal-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <h2 style={{ margin: 0 }}>Add New Room</h2>
                    <button onClick={onClose} style={{ background: 'none', color: 'var(--text-secondary)' }}>
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input-field"
                        placeholder="Room Name / Number"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <select
                        className="input-field"
                        value={formData.type}
                        onChange={e => setFormData({ ...formData, type: e.target.value })}
                    >
                        <option value="Single">Single Room</option>
                        <option value="Double">Double Room</option>
                        <option value="Suite">Suite</option>
                        <option value="Deluxe">Deluxe</option>
                    </select>
                    <input
                        className="input-field"
                        type="number"
                        placeholder="Price per night ($)"
                        value={formData.price}
                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                        required
                    />
                    <input
                        className="input-field"
                        placeholder="Amenities (comma separated)"
                        value={formData.amenities}
                        onChange={e => setFormData({ ...formData, amenities: e.target.value })}
                    />
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Room</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
