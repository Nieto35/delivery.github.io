export default function Info () {
  return (
    <div className="mt-16 relative">
      <img src="/page.png" alt="" className="w-full object-cover h-[390px] " />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

      <div className="absolute inset-0 text-center z-10 max-w-80 top-24 left-0 right-0 mx-auto h-[200px] lg:max-w-4xl">
        <h2 className="text-white text-3xl font-black leading-none mb-4 mt-4 lg:text-7xl lg:mt-0">
          ¿No sabes qué combo elegir?
        </h2>
        <p className="text-white text-lg leading-tight lg:text-3xl">
          Pide información sin compromiso
        </p>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=573195526519&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="absolute bottom-20 lg:bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-secondary px-4 py-2 rounded-full font-black">
          Contáctanos
        </button>
      </a>
    </div>
  )
}
