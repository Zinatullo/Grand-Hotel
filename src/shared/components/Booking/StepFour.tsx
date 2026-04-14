import React from 'react'
import { Check } from 'lucide-react'

interface Props {
  formData: {
    email: string;
    checkIn: string;
    checkOut: string;
    roomType: string;
    guests: number;
  };
  bookingNumber: string;
  formatDate: (date: string) => string;
}

export default function StepFour({ formData, bookingNumber, formatDate }: Props) {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Бронирование подтверждено!</h2>

      <p className="text-gray-600 mb-2">
        Номер брони: <span className="font-semibold text-gray-900">{bookingNumber}</span>
      </p>

      <p className="text-gray-600 mb-10">
        Мы отправили подтверждение на email <span className="font-semibold">{formData.email}</span>
      </p>

      <div className="bg-amber-50 rounded-xl p-8 max-w-md mx-auto mb-8">
        <div className="grid grid-cols-2 gap-6 text-left">
          <div>
            <p className="text-sm text-gray-600 mb-2">Заезд</p>
            <p className="font-medium">{formatDate(formData.checkIn)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Выезд</p>
            <p className="font-medium">{formatDate(formData.checkOut)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Номер</p>
            <p className="font-medium">{formData.roomType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Гостей</p>
            <p className="font-medium">{formData.guests}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50"
        >
          Новое бронирование
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800"
        >
          Распечатать подтверждение
        </button>
      </div>
    </div>
  )
}