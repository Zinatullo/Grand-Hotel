import React from 'react'

interface Props {
  formData: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
  };
  nights: number;
  roomPrice: number;
  totalPrice: number;
  formatDate: (date: string) => string;
  formatPrice: (price: number) => string;
}

export default function BookingBar({ formData, nights, roomPrice, totalPrice, formatDate, formatPrice }: Props) {
  return (
    <div className="right-div bg-white rounded-2xl shadow-xl p-6 h-fit">
      <h3 className="text-lg font-semibold mb-6">Детали бронирования</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Заезд:</span>
          <span className="font-medium">{formData.checkIn ? formatDate(formData.checkIn) : '—'}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Выезд:</span>
          <span className="font-medium">{formData.checkOut ? formatDate(formData.checkOut) : '—'}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Ночей:</span>
          <span className="font-medium">{nights || '—'}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Гостей:</span>
          <span className="font-medium">{formData.guests}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Номер:</span>
          <span className="font-medium">{formData.roomType || '—'}</span>
        </div>

        {formData.roomType && nights > 0 && (
          <>
            <div className="pt-4 mt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{formatPrice(roomPrice)} ₽ × {nights} ночей</span>
                <span className="font-medium text-gray-900">{formatPrice(totalPrice)} ₽</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Итого:</span>
                <span className="font-bold text-xl text-amber-700">{formatPrice(totalPrice)} ₽</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}