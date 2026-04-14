import { Trophy } from 'lucide-react'

export default function Sertificate() {
  let reviews = [
    { name: "Лучший отель 2024" },
    { name: "Сертификат качества" },
    { name: "Премия за сервис" },
    { name: "Эко-отель года" },
  ]

  return (
    <section className="py-24 bg-gray-50 px-8">
      <div
        className="
          mx-auto
          max-w-7xl
          "
      >
        <div className="text-center mb-14">
          <h2 className="text-[24px] mb-4">Награды и сертификаты</h2>
          <p className="text-gray-500">
            Наше качество признано профессиональным сообществом
          </p>
        </div>

        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {reviews.map(el => (
<div
  key={el.name}
  className="w-full max-w-[320px] bg-white flex flex-col items-center gap-6 rounded-xl border p-6 text-center border-gray-300"
>
  <Trophy className="w-12 h-12 text-amber-700" />
  <p>{el.name}</p>
</div>
          ))}
        </div>
      </div>
    </section>
  )
}