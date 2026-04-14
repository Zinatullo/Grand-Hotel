import { create } from "zustand";

interface Booking {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
}

interface BookingStore {
  loading: boolean;
  submitBooking: (booking: Booking) => Promise<void>;
  checkAvailability: (checkIn: string, checkOut: string, roomType: string) => Promise<boolean>;
}

const URL = "https://697cc7c1889a1aecfeb3960e.mockapi.io/Hotel/Numbers";

export const useBookingStore = create<BookingStore>((set) => ({
  loading: false,

  submitBooking: async (booking: Booking) => {
    set({ loading: true });
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    set({ loading: false });
  },

  checkAvailability: async (checkIn: string, checkOut: string, roomType: string) => {
    const res = await fetch(URL);
    const bookings = await res.json();

    const requested = { start: new Date(checkIn), end: new Date(checkOut) };

    const isOccupied = bookings.some((b: any) => {
      if (b.roomType !== roomType) return false;
      const existing = { start: new Date(b.checkIn), end: new Date(b.checkOut) };
      return requested.start < existing.end && requested.end > existing.start;
    });

    return !isOccupied;
    //true своб
    //false занят
  },
}));