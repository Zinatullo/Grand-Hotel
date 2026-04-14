import Link from 'next/link'

export default function Booking() {
  return (
    <section className='mt-25'>
      <div
        className="h-[50vh] bg-center bg-cover relative flex items-center justify-center text-center mt-10 hero-bg-booking"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-white px-4">
          <h1 className="text-lg md:text-xl font-semibold mb-2">Готовы забронировать?</h1>
          <p className="text-base md:text-lg mb-6">Свяжитесь с нами по телефону или оставьте заявку онлайн</p>

          <div className="flex gap-4 justify-center mt-6 flex-wrap">
            <Link
              href="/booking"
              className="px-6 py-3 rounded-xl font-medium
                         bg-amber-700 text-white
                         hover:bg-amber-800 transition"
            >
              Забронировать сейчас
            </Link>

            <Link
              href="/contacts"
              className="px-6 py-3 rounded-xl font-medium
                         bg-white/10 backdrop-blur-md border border-white/30
                         hover:bg-white/30 transition"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}