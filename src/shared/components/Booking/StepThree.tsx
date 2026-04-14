import React from 'react'
import { CreditCard } from 'lucide-react'

interface Props {
  formData: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
  setFormData: (data: any) => void;
  goNext: () => Promise<void>;  // было () => void
  goBack: () => void;
  canGoNext: () => boolean;
  formatCardNumber: (value: string) => string;
  formatExpiry: (value: string) => string;
  loading: boolean;
}

export default function StepThree({ formData, setFormData, goNext, goBack, canGoNext, formatCardNumber, formatExpiry, loading }: Props) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Оплата</h2>
      
      <div className="space-y-5">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <p className="text-sm text-gray-700">Это демо-версия. Реальная оплата не производится.</p>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <CreditCard className="w-4 h-4" />
            Номер карты
          </label>
          <input
            type="text"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: formatCardNumber(e.target.value) })}
            placeholder="0000 0000 0000 0000"
            className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Срок действия</label>
            <input
              type="text"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: formatExpiry(e.target.value) })}
              placeholder="MM/ГГ"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">CVV</label>
            <input
              type="text"
              value={formData.cvv}
              onChange={(e) => {
                const numbers = e.target.value.replace(/\D/g, '')
                if (numbers.length <= 3) {
                  setFormData({ ...formData, cvv: numbers })
                }
              }}
              placeholder="123"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={goBack}
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
          >
            Назад
          </button>
          <button
            onClick={goNext}
            disabled={!canGoNext() || loading}
            className="px-8 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {loading ? "Отправка..." : "Подтвердить бронирование"}
          </button>
        </div>
      </div>
    </>
  )
}