export default function Header()  {
  return (
    <div className="relative flex-grow h-full lg:flex lg:justify-center lg:items-center">
      <img
        src="/delivery.github.io/head_image.jpg"
        alt="placita logo"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20"></div>
      <div className="absolute inset-0 text-center z-10 max-w-80 top-8 left-0 right-0 mx-auto h-[200px] lg:relative lg:max-w-4xl">
        <h1 className="text-white text-3xl font-black leading-none mb-4 mt-4 lg:text-7xl lg:mt-0">
          Mercados campesinos
        </h1>
        <p className="text-white text-lg leading-tight lg:text-3xl">
          {' '}
          Trabajamos con agricultura tradicional campesina que está cuidando el planeta. Somos
          agroecología.
        </p>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=573195526519&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-4 py-2 rounded-full font-black">
          Contáctanos
        </button>
      </a>

      <img
        src="/delivery.github.io/resenas-google.png"
        alt="Google Rating"
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
      />
    </div>
  )
}
