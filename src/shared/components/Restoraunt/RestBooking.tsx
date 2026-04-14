import Link from 'next/link'

export default function RestBooking() {
  return (
    <>
    <section className='bg-amber-700 py-30 text-white text-center'>
        <div className="flex flex-col gap-5 ">
            <h4 className="text-[18px]">Забронировать столик</h4>
            <span className="text-[19px] opacity-95">Позвоните нам или оставьте заявку онлайн</span>
            <div className=""></div>
            <div className="flex gap-3  justify-center flex-wrap">
                <Link href="/contacts" className="py-2.5 px-5 border border-none bg-white  text-amber-700 font-medium rounded-md">Оставить заявку</Link>
                <button className="text-white py-2.5 px-8 border border-white bg-white/15 rounded-md  ">Позвонить: +7 (495) 123-45-67</button>
            </div>
        </div>
    </section>
    
    </>
  )
}
