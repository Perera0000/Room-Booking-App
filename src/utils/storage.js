import { db } from '../firebase';
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';

const ROOMS_COLLECTION = 'rooms';
const BOOKINGS_COLLECTION = 'bookings';

export const getRooms = async () => {
    const q = query(collection(db, ROOMS_COLLECTION), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const saveRoom = async (room) => {
    await addDoc(collection(db, ROOMS_COLLECTION), {
        ...room,
        createdAt: new Date().toISOString()
    });
};

export const getBookings = async () => {
    const q = query(collection(db, BOOKINGS_COLLECTION), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const saveBooking = async (booking) => {
    await addDoc(collection(db, BOOKINGS_COLLECTION), {
        ...booking,
        createdAt: new Date().toISOString()
    });
};
