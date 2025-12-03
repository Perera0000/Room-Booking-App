import { differenceInDays, isWithinInterval, parseISO, startOfDay, endOfDay } from 'date-fns';

export const getDaysLeft = (endDate) => {
    const today = startOfDay(new Date());
    const end = startOfDay(parseISO(endDate));
    const diff = differenceInDays(end, today);
    return diff > 0 ? diff : 0;
};

export const isRoomOccupied = (roomId, bookings) => {
    const today = new Date();
    return bookings.some(booking => {
        if (booking.roomId !== roomId) return false;
        const start = parseISO(booking.startDate);
        const end = parseISO(booking.endDate);
        return isWithinInterval(today, { start: startOfDay(start), end: endOfDay(end) });
    });
};

export const getRoomStatus = (roomId, bookings) => {
    const occupied = isRoomOccupied(roomId, bookings);
    if (!occupied) return { status: 'Available', daysLeft: null };

    const currentBooking = bookings.find(booking => {
        if (booking.roomId !== roomId) return false;
        const today = new Date();
        const start = parseISO(booking.startDate);
        const end = parseISO(booking.endDate);
        return isWithinInterval(today, { start: startOfDay(start), end: endOfDay(end) });
    });

    return {
        status: 'Occupied',
        daysLeft: currentBooking ? getDaysLeft(currentBooking.endDate) : 0,
        guestName: currentBooking?.guestName
    };
};
