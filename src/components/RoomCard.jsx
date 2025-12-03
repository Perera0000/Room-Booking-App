import React from 'react';
import { Calendar, User, CheckCircle, Clock } from 'lucide-react';

export default function RoomCard({ room, status, onBook }) {
    const isOccupied = status.status === 'Occupied';

    return (
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.25rem' }}>{room.name}</h3>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{room.type}</span>
                </div>
                <span className={`badge ${isOccupied ? 'badge-occupied' : 'badge-available'}`}>
                    {status.status}
                </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>${room.price}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>/ night</span>
            </div>

            {room.amenities && (
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {room.amenities}
                </div>
            )}

            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                {isOccupied ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                            <User size={16} color="var(--text-secondary)" />
                            <span>{status.guestName}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--warning)', fontWeight: '500' }}>
                            <Clock size={16} />
                            <span>{status.daysLeft} days left to free</span>
                        </div>
                    </div>
                ) : (
                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => onBook(room)}>
                        Book Now
                    </button>
                )}
            </div>
        </div>
    );
}
