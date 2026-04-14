import BookingForm from "@/src/shared/components/Booking/BookingForm";
import PageUpperInfo from "@/src/shared/components/PageUpperInfo";


export default function page() {
  return (

<>
      <PageUpperInfo
        title="  Бронирование номера
        "
        description="Выберите идеальный номер для вашего проживанияВыберите идеальный номер для вашего проживания"
      />
<BookingForm/>
</>  )
}
