import React from 'react'

interface Props {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  setFormData: (data: any) => void;
  goNext: () => void;
  goBack: () => void;
  canGoNext: () => boolean;
}

export default function StepTwo({ formData, setFormData, goNext, goBack, canGoNext }: Props) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Данные гостя</h2>
      
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor='firstName' className="block text-sm font-medium mb-2">Имя</label>
            <input
              id='firstName'
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor='lastName' className="block text-sm font-medium mb-2">Фамилия</label>
            <input
              id='lastName'
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor='email' className="block text-sm font-medium mb-2">Email</label>
          <input
            id='email'
            type = 'gmail'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Телефон</label>
          <input
            type="number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+7 (___) ___-__-__"
            className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
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
            disabled={!canGoNext()}
            className="px-8 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Далее
          </button>
        </div>
      </div>
    </>
  )
}