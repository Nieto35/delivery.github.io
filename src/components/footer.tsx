import { DrawnXLogo } from './drawnXLogo'

export default function Footer() {
  return (
    <div className="bg-green-300 text-white lg:grid lg:grid-cols-3 lg:pt-10 lg:pb-10">

        <div>

            <div className="flex justify-center pt-5">
                <img
                role="img"
                aria-label="Logo la placita delivery"
                className="w-32"
                src="logos/logo-blanco.png"
                alt="logo la placita delivery"
                />
            </div>
            <h2 className="text-center text-white mt-5 font-bold">¡Síguenos en nuestras redes!</h2>

            <div className="flex justify-center mt-2">
                <div className="flex justify-around w-3/5">
                <a href="https://www.facebook.com/p/La-placita-delivery-100066994231199/">
                    <img
                    role="img"
                    aria-label="Logo la placita delivery"
                    className="w-8 h-8 text-white"
                    src="redes/facebook.svg"
                    alt="logo la placita delivery"
                    />
                </a>
                <a href="https://www.instagram.com/laplacitadelivery">
                    <img
                    role="img"
                    aria-label="Logo la placita delivery"
                    className="w-8 h-8"
                    src="redes/instagram.svg"
                    alt="logo la placita delivery"
                    />
                </a>
                <a href="https://www.tiktok.com/@laplacitadelivery">
                    <img
                    role="img"
                    aria-label="Logo la placita delivery"
                    className="w-8 h-8"
                    src="redes/tiktok.svg"
                    alt="logo la placita delivery"
                    />
                </a>
                </div>
            </div>
        </div>

        <div>

        <h2 className="text-left text-white mt-5 font-bold px-5">Horario de atención</h2>
        <p className="mt-2 px-5"> Lunes a Sábado 8:00 a.m – 6:00 p.m </p>

        <h2 className="text-left text-white mt-5 font-bold px-5">Contacto</h2>
        <a className="text-left px-5 mt-2" href="tel:+573195526519">
            +57 319-552-6519
        </a>

        <h2 className="text-left text-white mt-5 font-bold px-5">Sede principal</h2>
        <a href="https://www.google.com/maps/place/La+placita+Delivery/@6.2231404,-75.5836316,17z/data=!3m1!4b1!4m6!3m5!1s0x8e442bcd51779253:0x26e8afa5466b888e!8m2!3d6.2231404!4d-75.5836316!16s%2Fg%2F11qnt2yqyy?entry=ttu">
            <p className="mt-2 px-5">
            {' '}
            Cl. 20A #59-70, Guayabal, Medellín, Guayabal, Medellín, Antioquia, Colombia{' '}
            </p>
        </a>
        </div>


      <div className="w-full h-[2px] bg-white mt-5 mb-5 lg:hidden"></div>


      <div className="px-5 flex justify-between pb-5 lg:items-center lg:px-28">
        <img src="/apoyos/visitMedellin.png" alt="logo visit medellin" className="w-40 h-20" />

        <img src="/apoyos/alcaldia-medellin.png" alt="logo visit medellin" className="w-40 h-20" />
      </div>
    </div>
  )
}
