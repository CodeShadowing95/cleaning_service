
const AboutUs = () => {
  return (
    <div className="w-full flex justify-center items-center gap-8 px-[130px] py-16 bg-blue-50">
      {/* Left side */}
      <div className="relative flex justify-center w-full h-full items-center rounded-full overflow-hidden" style={{ background: 'url(/blob-haikei.svg) center center / cover no-repeat' }}>
        <img src="/index-left-img.png" className="h-[600px] z-10" alt="left-img" />
        <div className="absolute bottom-12 left-24 z-20 w-[150px] h-[150px] bg-blue-900 border-8 border-white rounded-full overflow-hidden">
          <div className="w-full h-full flex flex-col justify-center items-center rounded-full text-white font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="currentColor" d="M1 7.998a6.998 6.998 0 0 1 13.966-.666a14 14 0 0 0-1.037-.237a6 6 0 0 0-1.894-3.534c-.101.18-.233.407-.384.648c-.338.54-.823 1.24-1.308 1.603a.2.2 0 0 0-.045.04c0 .027.01.101.085.27q.05.111.13.27c.09.182.202.406.303.655a7 7 0 0 0-.99.223a10 10 0 0 0-.162-.334a9 9 0 0 1-.197-.412c-.088-.2-.184-.46-.167-.736c.02-.32.182-.58.443-.776c.317-.238.716-.783 1.06-1.334c.166-.263.307-.51.407-.69l.023-.042A5.97 5.97 0 0 0 7.998 2H7.95c.091.18.191.395.281.634c.244.646.464 1.592.071 2.428c-.361.77-.984.97-1.45 1.09l-.067.017c-.453.117-.64.165-.776.37c-.126.192-.103.433.04.9l.033.105c.057.182.125.398.16.602c.044.254.056.572-.104.88a1.5 1.5 0 0 1-.622.651a2.1 2.1 0 0 1-.664.21l-.068.012c-.358.063-.54.095-.715.282c-.137.147-.222.402-.271.772q-.029.225-.045.456l-.007.082a4 4 0 0 1-.069.53l-.025.11a6 6 0 0 0 2.215 1.476q-.282.42-.524.868A7 7 0 0 1 1 7.998m1 0a5.97 5.97 0 0 0 .787 2.973l.018-.15c.054-.405.169-.933.532-1.322c.415-.444.923-.528 1.248-.581l.092-.016a1.2 1.2 0 0 0 .36-.103a.5.5 0 0 0 .213-.236c.015-.027.033-.09.006-.245a4 4 0 0 0-.122-.451l-.042-.134c-.13-.425-.333-1.115.081-1.744c.36-.547.939-.686 1.314-.777l.114-.028c.397-.103.632-.2.795-.547c.213-.452.12-1.062-.101-1.65a5.4 5.4 0 0 0-.43-.88A6 6 0 0 0 2 7.998m13.925.74A.5.5 0 0 0 15.5 8.5h-.008l-.026-.003l-.091-.018a6 6 0 0 1-.299-.078l-.095-.026a15 15 0 0 0-.841-.218a8.5 8.5 0 0 0-2.952-.153c-1.202.15-2.121.558-2.748 1.142c-.63.589-.94 1.337-.94 2.1q.001.275.038.52c1.05-.916 2.345-1.657 3.776-2.23a.5.5 0 1 1 .372.929c-.797.319-1.534.687-2.198 1.102c-1.652.964-2.681 2.202-3.435 3.71a.5.5 0 1 0 .894.447c.384-.766.843-1.455 1.448-2.068q.03.057.07.124c.11.186.28.435.512.686c.465.5 1.214 1.034 2.273 1.034c.652 0 1.194-.166 1.638-.456c.44-.286.758-.675.996-1.083c.368-.63.579-1.38.735-1.936q.059-.211.109-.377c.173-.564.426-1.07.66-1.484q.179-.31.325-.541l.016-.026a5 5 0 0 0 .218-.373a.5.5 0 0 0-.022-.486"/></svg>
            Eco-friendly
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex flex-col w-full h-full">
        <div className="flex items-end space-x-2 mb-1 text-blue-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M445.1 22.93c-3.8.11-7.9 1.81-11.5 5.98C379.2 107.6 318.8 184.7 257.3 261.4c2.3.9 4.5 1.9 6.5 3.1c4.5 2.5 8.4 5.6 11.7 9C339 197.6 401.3 121.1 455.6 40.87c4.3-9.84 1.1-13.83-3.8-16.4c-1.2-.65-2.6-1.13-4.1-1.37c-.8-.13-1.7-.19-2.6-.17M63.14 46.41c7.69 13.5 16.6 26.49 2.25 47.15c10.45-10.72 22.95-21.51 42.41-1.4c-4.2-10.17-17.26-17.99-6.1-33.71c-17.06 8.58-25.86 0-38.56-12.04M267.2 94.02c-7.4 11.08-18.3 14.68-32.6 10.28c14.3 4.9 21.5 14.5 17.7 31.7c8.3-15.5 18.1-21.4 29.5-17.1c-6.4-6.3-17.3-7-14.6-24.88m181.5 46.78c-4 22.5-6 45.9-43.2 50.9c22.9.8 48.1 3.7 51.7 46.2c5-15-3-37.8 25.6-41.3c-28.6-10.4-30.7-29.2-34.1-55.8m-358.92 96c2.1 24.8-8.1 41.4-37.08 45.6c29.38 3.7 44.88 15.4 45.88 35.5c5.62-13.5-.7-30.8 28.72-36.8c-22.1-5.2-34.82-19.7-37.52-44.3m155.42 39.7l-13.4 16.6c1.5.8 3 1.7 4.5 2.6c4.4 2.8 8.7 6.1 12.3 9.8l15.2-18c-2.3-2.7-5.4-5.4-8.9-7.4c-3-1.7-6.3-3-9.7-3.6M208 304.1c-.8 0-1.5 0-2 .1c-1 .2-1.5.5-1.7.7l-.5.6l-.6.4c-46.9 36-117.06 70.7-173.97 104.3c14.77 4.4 29.83 9.7 44.58 15.6l36.39-30.5L88.37 432c17.03 7.6 33.43 16.2 48.03 25.6l27.3-43.8l-12.2 54.2c9 6.7 17 13.8 23.8 21.1c27.2-59.1 63-100.2 67.7-154.8l.1-.6l.1-.6c.6-2.3-.2-5.7-3.1-10c-3-4.2-7.9-8.7-13.4-12.2c-5.4-3.4-11.5-5.8-15.9-6.5c-1.1-.2-2-.3-2.8-.3m111.2.2c9.7 13.1 9.9 25.8-4.7 38.3c17.6-8.2 30.3-7.2 37.8 3.6c-1.7-9.4-11.1-16.8 3-30.4c-14 4.8-26.1 1.2-36.1-11.5m56.7 90.8c11.7 17.4 20 29.5 4.1 47.8c23.4-10 29.5 7 41.2 13.8c-19.9-26.8-2.6-39.3 14.1-49.5c-30.5 12.8-44.4-.3-59.4-12.1"/></svg>
          <p className="text-lg font-semibold">À Propos de nous</p>
        </div>
        <h1 className="text-4xl font-semibold">Une qualité de nettoyage à découvrir, bienvenue chez <span className="text-blue-900 font-bold">REHOBOTH Nettoyage</span> !</h1>
        <p className="text-md mt-8 text-gray-700 text-justify">Nous sommes une entreprise qui mettons notre expertise et notre passion pour la propreté au service de votre bien-être. Que ce soit pour votre domicile ou vos espaces professionnels, nous proposons des solutions de nettoyage personnalisées, réalisées avec soin et attention aux moindres détails. Avec des produits respectueux de l’environnement et des techniques efficaces, nous vous offrons un espace sain, frais et accueillant, où il fait bon vivre et travailler. Faites confiance à notre équipe de professionnels pour un service impeccable, à la hauteur de vos exigences.</p>
        <div className="w-full flex space-x-10 mt-8">
          <div className="flex flex-col space-y-4">
            {/* Bubble 1 left */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 content-center text-white bg-blue-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
              </div>
              <p className="font-semibold">100% Satisfaction Client</p>
            </div>
             {/* Bubble 2 left */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 content-center text-white bg-blue-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
              </div>
              <p className="font-semibold">Professionnalisme Garanti</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {/* Bubble 1 right */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 content-center text-white bg-blue-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
              </div>
              <p className="font-semibold">Prix Très Abordables</p>
            </div>
             {/* Bubble 2 right */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 content-center text-white bg-blue-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
              </div>
              <p className="font-semibold">Flexibilité Totale</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
          <button className="px-8 py-3 bg-blue-900 text-white hover:shadow-lg hover:shadow-blue-950 font-semibold transition-all duration-500 rounded-lg">Contactez-nous</button>
          <button className="px-8 py-3 bg-white text-gray-900 hover:shadow-lg font-semibold transition-all duration-500 rounded-lg">Nos services</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs