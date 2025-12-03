import React from 'react';
import { Home, Plus, Calendar } from 'lucide-react';

export default function Layout({ children, onOpenAddRoom }) {
    return (
        <div className="min-h-screen">
            <nav className="glass-panel" style={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
                <div className="container" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Home className="text-accent-primary" size={24} color="var(--accent-primary)" />
                        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>RoomMaster</h1>
                    </div>
                    <button className="btn btn-primary" onClick={onOpenAddRoom} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Plus size={18} />
                        Add Room
                    </button>
                </div>
            </nav>
            <main className="container">
                {children}
            </main>
        </div>
    );
}
