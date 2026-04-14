
export default function ContactSMS() {
  return (
    <div className="w-full lg:w-1/2">
      <h2 className="text-xl font-normal text-neutral-900 mb-6">Напишите нам</h2>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="space-y-5">
          <label className="block text-sm font-semibold text-neutral-900">
            Ваше имя
            <input
              type="text"
              placeholder=""
              className="border-none mt-2 w-full rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>
          <label className="block text-sm font-semibold text-neutral-900">
            Email
            <input
              type="email"
              placeholder=""
              className="border-none mt-2 w-full rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>
          <label className="block text-sm font-semibold text-neutral-900">
            Телефон
            <input
              type="tel"
              placeholder=""
              className="border-none mt-2 w-full rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>
          <label className="block text-sm font-semibold text-neutral-900">
            Сообщение
            <textarea
              rows={3}
              placeholder="Расскажите нам, чем мы можем помочь..."
              className="border-none mt-2 w-full resize-none rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-800"
          >
            Отправить сообщение
          </button>
        </div>
      </div>
    </div>
  )
}