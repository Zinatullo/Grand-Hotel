import React from 'react'

interface Props {
  currentStep: number;
}

export default function BookingCheck({ currentStep }: Props) {
  return (
    <div className="flex items-center justify-center mb-12">
      {[1, 2, 3].map((step, idx) => (
        <React.Fragment key={step}>
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg
            ${currentStep >= step ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-500'}
          `}>
            {step}
          </div>
          {idx < 2 && (
            <div className={`w-32 h-1 ${currentStep > step ? 'bg-amber-700' : 'bg-gray-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}