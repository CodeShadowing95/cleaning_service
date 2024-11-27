
const Contact = () => {
  return (
    <div className="w-full h-[calc(100vh-25rem)] -mt-20 mb-20 relative">
      <img src="/contact/line.jpg" alt="grid" className="w-full h-full object-center" />
      <div className="absolute inset-0 flex justify-center items-center pt-32 px-[130px]">
        {/* Left side */}
        <div className="w-1/2 h-full">
          <div className="w-[100px] h-5 flex justify-center items-center text-xs font-semibold text-amber-700 bg-amber-200 rounded-full mb-2">Contact</div>
          <h1 className="text-3xl font-bold max-w-md">Des questions ?</h1>
          <h1 className="text-3xl font-bold max-w-md">Écrivez- ou appelez-nous.</h1>
          <h1 className="text-3xl font-bold max-w-md">Nous vous répondrons dans les 12 heures qui suivent.</h1>
          <div className="w-full mt-10 flex items-center gap-8">
            <div className="px-4 py-2 flex justify-center items-center text-xs font-semibold text-gray-700 bg-gray-200/50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 vertical-middle flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="ml-2">+33 7 24 89 62 47</span>
            </div>
            <div className="px-4 py-2 flex justify-center items-center text-xs font-semibold text-gray-700 bg-gray-200/50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 vertical-middle flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
              <span className="ml-2">rehonettoyage@yahoo.com</span>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-1/2 h-full">
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 backdrop-blur-md shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Adresse mail" required />
            </div>
            <div className="mb-5">
              <input type="phone" id="phone" className="bg-gray-50 border border-gray-300 backdrop-blur-md shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Numéro de téléphone (Optionnel)" aria-describedby="phone" />
            </div>
            <div className="mb-5">
              <input type="visitor_name" id="visitor_name" className="bg-gray-50 border border-gray-300 backdrop-blur-md shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Votre nom (Optionnel)" aria-describedby="phone" />
            </div>
            <div className="mb-5">
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 backdrop-blur-md shadow-md focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="Laissez un message..."></textarea>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact