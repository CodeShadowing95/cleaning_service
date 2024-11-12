
const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[130px] py-16 bg-blue-50">
      <div className="px-4 py-1 flex justify-center items-center text-xs font-semibold text-teal-700 bg-teal-200 rounded-full">Services</div>
      <div className="w-full flex justify-between items-center mt-2 mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold capitalize">Nos Prestations, Pensées pour Vous</h1>
          <p className="text-gray-500 text-sm max-w-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, facilis dolore nobis repellendus ratione mollitia perspiciatis delectus quibusdam consequuntur.</p>
        </div>
        <button
          className="inline-block text-xs py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200"
        >
          Tous nos services
        </button>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col justify-center items-center gap-4 w-72 h-72 p-4 shadow-md rounded-xl bg-white">
          <div className="w-14 h-14 flex justify-center items-center text-white bg-green-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"/></svg>
          </div>
          <p className="text-lg font-bold text-center">Service 1</p>
          <p className="text-[13px] text-gray-600 text-center">Doloribus molestias recusandae similique itaque inventore tempora delectus amet velit magnam natus.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-72 h-72 p-4 shadow-md rounded-xl bg-white">
          <div className="w-14 h-14 content-center bg-blue-600 rounded-full"></div>
          <p className="text-lg font-bold text-center">Service 1</p>
          <p className="text-[13px] text-gray-600 text-center">Doloribus molestias recusandae similique itaque inventore tempora delectus amet velit magnam natus.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-72 h-72 p-4 shadow-md rounded-xl bg-white">
          <div className="w-14 h-14 content-center bg-yellow-600 rounded-full"></div>
          <p className="text-lg font-bold text-center">Service 1</p>
          <p className="text-[13px] text-gray-600 text-center">Doloribus molestias recusandae similique itaque inventore tempora delectus amet velit magnam natus.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-72 h-72 p-4 shadow-md rounded-xl bg-white">
          <div className="w-14 h-14 content-center bg-orange-600 rounded-full"></div>
          <p className="text-lg font-bold text-center">Service 1</p>
          <p className="text-[13px] text-gray-600 text-center">Doloribus molestias recusandae similique itaque inventore tempora delectus amet velit magnam natus.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-72 h-72 p-4 shadow-md rounded-xl bg-white">
          <div className="w-14 h-14 content-center bg-purple-600 rounded-full"></div>
          <p className="text-lg font-bold text-center">Service 1</p>
          <p className="text-[13px] text-gray-600 text-center">Doloribus molestias recusandae similique itaque inventore tempora delectus amet velit magnam natus.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-72 h-72 p-4 shadow-md rounded-xl bg-white">
          <div className="w-14 h-14 content-center bg-stone-600 rounded-full"></div>
          <p className="text-lg font-bold text-center">Service 1</p>
          <p className="text-[13px] text-gray-600 text-center">Doloribus molestias recusandae similique itaque inventore tempora delectus amet velit magnam natus.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-72 h-72 p-4 shadow-md rounded-xl bg-white">
          <div className="w-14 h-14 content-center bg-red-600 rounded-full"></div>
          <p className="text-lg font-bold text-center">Service 1</p>
          <p className="text-[13px] text-gray-600 text-center">Doloribus molestias recusandae similique itaque inventore tempora delectus amet velit magnam natus.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-72 h-72 p-10 shadow-md rounded-xl bg-zinc-900">
          <p className="text-2xl text-white mb-2"><span className="font-bold text-3xl">10+</span> services que vous découvrirez</p>
          <div className="w-full text-yellow-500">
            <img src="/arrow-right.png" alt="arrow-right" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services