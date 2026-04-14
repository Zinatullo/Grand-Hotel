import  Link  from 'next/link';

export default function RevBook() {
  return (
    <section className='py-30 bg-gray-100   '>
        <div className="max-w-7xl mx-auto px-5  text-center flex flex-col items-center gap-5">
        <h2 className="text-0.5xl ">Станьте нашим гостем</h2>
        <p className='text-0.5xl text-gray-500'>Присоединяйтесь к тысячам довольных клиентов</p>
        <Link href="/booking" className="bg-amber-700 text-white py-2 px-5 rounded-lg font-medium ">Забронироать номер</Link>
        </div>
    </section>
)
}
