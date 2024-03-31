import { LuBeef } from "react-icons/lu";
import { BsBox2 } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";

export const HowBuy = () => {
  return (
    <div className="">
      <h2 className='text-center text-green-300 text-3xl font-black leading-none mb-4 mt-24 lg:text-5xl'>
        ¿Cómo comprar?
      </h2>

      <div className="w-full lg:flex lg:justify-center">

        <div className="lg:w-4/5 lg:grid lg:grid-cols-3 mt-10">
            <div className="relative border-l-[6px] lg:border-l-[0px]  ml-8 lg:ml-0 pl-10 text-green-300  pr-5 lg:mt-0 lg:pt-16">
            <div className="lg:flex lg:justify-center">
                <LuBeef size={100} className="text-secondary"/>
            </div>
                <h3 className="text-green-300 text-2xl font-bold text-left mt-5 lg:text-center">
                <span className="hidden lg:inline">1. </span>
                    Elección de combo</h3>
                <p className="mt-2 text-left lg:text-center">
                    
                    Elige el combo que más te guste y se ajuste a tus necesidades, 
                    podrás verlos a través de la web o podrás solicitar el catálogo a través de WhatsApp
                    <a href="https://api.whatsapp.com/send/?phone=573195526519&text&type=phone_number&app_absent=0">
                        <span> </span>
                        <span className="text-green-300 underline">+57-319-552-6519</span>
                    </a>
                    .
                </p>
                <div className="lg:hidden absolute top-20 -left-7 w-12 h-12 bg-green-300 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl">1</span>
                </div>
            </div>
            <div className="relative border-l-[6px] lg:border-l-[0px]  ml-8 lg:ml-0 pl-10 text-green-300 pr-5 pt-16">
                <div className="lg:flex lg:justify-center">

                    <BsBox2 size={100} className="text-secondary"/>
                </div>
                <h3 className="text-green-300 text-2xl font-bold text-left mt-5 lg:text-center">
                <span className="hidden lg:inline">2. </span>
                    Preparamos tu pedido</h3>
                <p className="mt-2 text-left lg:text-center">Preparamos tu pedido y nos ponemos en contacto para brindarte rango de dias y horas de entrega.</p>
                <div className="lg:hidden absolute top-36 -left-7 w-12 h-12 bg-green-300 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl">2</span>
                </div>
            </div>
            <div className="relative border-l-[6px] lg:border-l-[0px]  ml-8 lg:ml-0 pl-10 text-green-300 pr-5 pt-16">
            <div className="lg:flex lg:justify-center">
                <BsHouseDoor size={100} className="text-secondary"/>
            </div>
                <h3 className="text-green-300 text-2xl font-bold text-left mt-5 lg:text-center">
                <span className="hidden lg:inline">3. </span>
                Entrega a tu puerta</h3>
                <p className="mt-2 text-left lg:text-center">Entregamos tu Mercado en la puerta de tu hogar.</p>
                <div className="lg:hidden absolute top-36 -left-7 w-12 h-12 bg-green-300 rounded-full flex items-center justify-center ">
                    <span className="text-white text-4xl">3</span>
                </div>
            </div>

        </div>
      </div>


    </div>
  )
}
