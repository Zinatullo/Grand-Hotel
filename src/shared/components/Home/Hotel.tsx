import Link from 'next/link'

export default function Hotel({}) {


  return (
    <>
      <section>
        <div
          className="hero-bg min-h-screen bg-center bg-cover relative flex items-center justify-center text-center"
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div
            className={`relative z-10 max-w-2xl px-4 text-white flex flex-col gap-3
              transition-all duration-700 ease-out
              my-animate`}
          >
            <span className="uppercase tracking-widest text-sm">
              Добро пожаловать в Grand Hotel
            </span>

            <h3 className="text-xl md:text-2xl font-semibold leading-tight">
              Комфорт и уют в самом сердце города
            </h3>

            <div className="flex gap-4 justify-center mt-8 flex-wrap">
              <Link
                href="/booking"
                className="px-6 py-3 rounded-xl font-medium
                           bg-amber-700 text-white
                           hover:bg-amber-800 transition"
              >
                Забронировать номер &gt;
              </Link>

              <Link
                href="/numbers"
                className="px-6 py-3 rounded-xl font-medium
                           bg-white/20 backdrop-blur-md border border-white/30
                           hover:bg-white/30 transition"
              >
                Наши номера
              </Link>
            </div>
          </div>
        </div>
      </section>

<div className="relative -mt-20 z-20">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex flex-col lg:flex-row items-stretch justify-around gap-4
                    rounded-2xl shadow-2xl p-6 sm:p-8 bg-white border border-gray-300">

      <div className="flex flex-col w-full lg:w-64">
        <label htmlFor="checkin" className="text-gray-700 mb-2 font-medium">Дата заезда</label>
        <input
          id="checkin"
          type="date"
          className="w-full py-3 px-4 rounded-xl bg-white border border-gray-300
                     shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
        />
      </div>

      <div className="flex flex-col w-full lg:w-64">
        <label htmlFor="checkout" className="text-gray-700 mb-2 font-medium">Дата выезда</label>
        <input
          id="checkout"
          type="date"
          className="w-full py-3 px-4 rounded-xl bg-white border border-gray-300
                     shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
        />
      </div>

      <div className="relative flex flex-col w-full lg:w-64">
        <label htmlFor="guests" className="text-gray-700 mb-2 font-medium">Количество гостей</label>
        <select
          id="guests"
          className="w-full py-3 px-4 pr-12 rounded-xl bg-white border border-gray-300
                     shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none transition-all duration-200"
        >
          <option>1 гость</option>
          <option>2 гостя</option>
          <option>3 гостя</option>
          <option>4 гостя</option>
          <option>5+ гостей</option>
        </select>
        <div className="absolute right-4 top-11 w-6 h-6 text-gray-500 pointer-events-none">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          </svg>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-64">
        <div className="hidden lg:block mb-2 h-6" />
        <Link
          href="/numbers"
          className="w-full py-3 px-6 rounded-xl font-medium text-center
                     bg-amber-700 text-white hover:bg-amber-800 transition-colors duration-200"
        >
          Найти номер
        </Link>
      </div>

    </div>
  </div>
</div>
    </>
  )
}