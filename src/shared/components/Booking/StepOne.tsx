'use client'
import { useState } from "react";
import { useBookingStore } from "@/src/shared/lib/zustand/useBookingStore";

// добавь в Props:
// goNext теперь не передаём — делаем свой handleNext

interface Props {
  formData: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
  };
  setFormData: (data: any) => void;
  roomTypes: { name: string; price: number }[];
  formatPrice: (price: number) => string;
  goNext: () => void;
  canGoNext: () => boolean;
}

export default function StepOne({ formData, setFormData, roomTypes, formatPrice, goNext, canGoNext }: Props) {
  const { checkAvailability } = useBookingStore();
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);

  async function handleNext() {
    setError(null);
    setChecking(true);
    const available = await checkAvailability(formData.checkIn, formData.checkOut, formData.roomType);
    setChecking(false);

    if (!available) {
      setError(`Номер "${formData.roomType}" занят на выбранные даты. Выберите другой тип номера или другие даты.`);
      return;
    }

    goNext();
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Даты и номер</h2>
      
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor='checkIn' className="block text-sm font-medium mb-2">Дата заезда</label>
            <input
              id='checkIn'
              type="date"
              value={formData.checkIn}
              onChange={(e) => { setFormData({ ...formData, checkIn: e.target.value }); setError(null); }}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor='checkOut' className="block text-sm font-medium mb-2">Дата выезда</label>
            <input
              id='checkOut'
              type="date"
              value={formData.checkOut}
              onChange={(e) => { setFormData({ ...formData, checkOut: e.target.value }); setError(null); }}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor='guests' className="block text-sm font-medium mb-2">Количество гостей</label>
          <select
            id='guests'
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
            className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='roomType' className="block text-sm font-medium mb-2">Тип номера</label>
          <select
            id='roomType'
            value={formData.roomType}
            onChange={(e) => { setFormData({ ...formData, roomType: e.target.value }); setError(null); }}
            className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          >
            <option value="">Выберите номер</option>
            {roomTypes.map(room => (
              <option key={room.name} value={room.name}>
                {room.name} - {formatPrice(room.price)} ₽/ночь
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            X {error}
          </p>
        )}

        <div className="flex justify-end pt-4">
          <button
            onClick={handleNext}
            disabled={!canGoNext() || checking}
            className="px-8 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {checking ? "Проверяем..." : "Далее"}
          </button>
        </div>
      </div>
    </>
  )
}