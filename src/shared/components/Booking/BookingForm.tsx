'use client'
import { useState, useMemo } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import BookingBar from './BookingBar'
import BookingCheck from './BookingCheck'
import { useBookingStore } from "@/src/shared/lib/zustand/useBookingStore";

interface RoomType {
  name: string
  price: number
}

interface FormData {
  checkIn: string
  checkOut: string
  guests: number
  roomType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  cardNumber: string
  expiryDate: string
  cvv: string
}

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''                                  
  })

  const [bookingNumber] = useState<string>(
    `GH-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`
  )

  const roomTypes: RoomType[] = [
    { name: 'Стандартный номер', price: 3500 },
    { name: 'Улучшенный номер', price: 5000 },
    { name: 'Люкс', price: 8500 },
    { name: 'Семейный номер', price: 6500 }
  ]

  const nights = useMemo<number>(() => {
    if (!formData.checkIn || !formData.checkOut) return 0
    const start = new Date(formData.checkIn)
    const end = new Date(formData.checkOut)
    const diffDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }, [formData.checkIn, formData.checkOut])

  const roomPrice = useMemo<number>(() => {
    const room = roomTypes.find((r) => r.name === formData.roomType)
    return room ? room.price : 0
  }, [formData.roomType])

  const totalPrice: number = roomPrice * nights

  const formatDate = (dateString: string): string => {
    if (!dateString) return ''
    const parts = dateString.split('-')
    return `${parts[2]}.${parts[1]}.${parts[0]}`
  }

  const formatPrice = (price: number): string => {
    return price.toLocaleString('ru-RU')
  }

  const formatCardNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '')
    let formatted = ''
    for (let i = 0; i < numbers.length && i < 16; i++) {
      if (i > 0 && i % 4 === 0) formatted += ' '
      formatted += numbers[i]
    }
    return formatted
  }

  const formatExpiry = (value: string): string => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + '/' + numbers.slice(2, 4)
    }
    return numbers
  }

  const goNext = (): void => setCurrentStep(currentStep + 1)
  const goBack = (): void => setCurrentStep(currentStep - 1)

  const canGoNext = (): boolean => {
    if (currentStep === 1) {
      return !!(formData.checkIn && formData.checkOut && formData.roomType && nights > 0)
    }
    if (currentStep === 2) {
      return !!(formData.firstName && formData.lastName && formData.email && formData.phone)
    }
    if (currentStep === 3) {
      const cardClean = formData.cardNumber.replace(/\s/g, '')
      return cardClean.length === 16 && formData.expiryDate.length === 5 && formData.cvv.length === 3
    }
    return false
  }

  const guestLabel = (n: number): string => {
    if (n === 1) return 'гость'
    if (n < 5) return 'гостя'
    return 'гостей'
  }
  const { submitBooking, loading } = useBookingStore();

const handleConfirm = async (): Promise<void> => {
  await submitBooking({
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    phone: formData.phone,
    checkIn: formData.checkIn,
    checkOut: formData.checkOut,
    guests: formData.guests,
    roomType: formData.roomType,
  });
  setCurrentStep(4);
};

  return (
       <div className={`min-h-screen py-12 px-4 ${currentStep === 4 ? 'bg-linear-to-br from-orange-100 via-amber-100 to-orange-200' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto">
        
        {currentStep < 4 && (
<BookingCheck currentStep={currentStep} />
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          
          <div className={`lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 ${currentStep === 4 ? 'lg:col-span-3 max-w-3xl mx-auto' : ''}`}>
            
            {currentStep === 1 && (
                <StepOne   formData={formData}
  setFormData={setFormData}
  roomTypes={roomTypes}
  formatPrice={formatPrice}
  goNext={goNext}
  canGoNext={canGoNext}
   />
            )}

            {currentStep === 2 && (
             <StepTwo
  formData={formData}
  setFormData={setFormData}
  goNext={goNext}
  goBack={goBack}
  canGoNext={canGoNext}
/>
            )}

            {currentStep === 3 && (
<StepThree
  formData={formData}
  setFormData={setFormData}
  goNext={handleConfirm}
  goBack={goBack}
  canGoNext={canGoNext}
  formatCardNumber={formatCardNumber}
  formatExpiry={formatExpiry}
  loading={loading}
/>
            )}

            {currentStep === 4 && (
<StepFour
  formData={formData}
  bookingNumber={bookingNumber}
  formatDate={formatDate}
/>
            )}
          </div>

          {currentStep < 4 && (
<BookingBar
  formData={formData}
  nights={nights}
  roomPrice={roomPrice}
  totalPrice={totalPrice}
  formatDate={formatDate}
  formatPrice={formatPrice}
/>
          )}
        </div>
      </div>
    </div>
  )
}