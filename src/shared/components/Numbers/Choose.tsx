
import  Link  from 'next/link';
export default function Choose() {
  return (
    <>
    <section className='my-30'>
        <div className="max-w-7xl mx-auto">
            <div className="text-center  gap-7">
                <h3>Не можете выбрать?</h3>
                <p className=' text-gray-500 my-5'>Свяжитесь с нами, и мы поможем подобрать идеальный номер для вашего <br /> пребывания</p>
                                <Link href='/booking' className="px-7 py-2 mt-4 h-10 rounded-lg bg-amber-700  text-medium
                                   text-white hover:bg-amber-800 transition ">
                  Связатся с нами
                </Link>
            </div>
        </div>
    </section>
    </>
  )
}
