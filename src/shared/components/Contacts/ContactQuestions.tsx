
interface Question {
  text: string
  p: string
}

export default function ContactQuestions() {
  const quest: Question[] = [
    {
      text: "Какое время заезда и выезда?",
      p: "Заезд с 14:00, выезд до 12:00. Ранний заезд и поздний выезд возможны по запросу."
    },
    {
      text: "Есть ли парковка?",
      p: "Да, у нас есть бесплатная парковка для гостей отеля. Стоимость 500 руб./сутки."
    },
    {
      text: "Можно ли с питомцами?",
      p: "Мы принимаем небольших питомцев весом до 5 кг. Необходимо предварительное согласование."
    },
    {
      text: "Есть ли трансфер?",
      p: "Да, мы предоставляем бесплатный трансфер от/до аэропорта при бронировании от 3 ночей."
    },
  ]

  return (
    <section className='bg-gray-100 py-20 mt-10'>
      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-lg text-center mb-10">Часто задаваемые вопросы</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {quest.map((item: Question, index: number) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-md font-semibold mb-2">{item.text}</h3>
              <p className="text-gray-600">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}