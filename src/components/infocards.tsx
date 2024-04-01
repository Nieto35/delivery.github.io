import { MdOutlineFamilyRestroom } from 'react-icons/md'
import { GiHotMeal } from 'react-icons/gi'
import { TbMeat } from 'react-icons/tb'
import { PiBowlFood } from 'react-icons/pi'
import { GiFruitBowl } from 'react-icons/gi'
import { TbFriends } from 'react-icons/tb'

// row for description
import { IoIosArrowForward } from 'react-icons/io'

export const cards = [
  {
    image: '/delivery.github.io/combos/familiares.jpg',
    title: 'Familiares',
    icon: <MdOutlineFamilyRestroom size={50} />,
    description: (
      <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Para comidas tradicionales.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Precio, calidad y cantidad.</p>
        </li>
      </ul>
    )
  },
  {
    image: '/delivery.github.io/combos/asados.jpg',
    title: 'Asados',
    icon: <GiHotMeal size={50} />,
    description: (
        <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Chorizos artesanales.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Cortes perfectos.</p>
        </li>
      </ul>
    )
  },
  {
    image: '/delivery.github.io/combos/carnes.jpg',
    title: 'Carnes',
    icon: <TbMeat size={50} />,
    description: (
      <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Cortes especiales.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Acompañamientos deliciosos.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Porcionado y de primera calidad.</p>
        </li>
      </ul>
    )
  },
  {
    image: '/delivery.github.io/combos/facilPreparar.png',
    title: 'Practicos',
    icon: <PiBowlFood size={50} />,
    description: (
        <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Fácil y rápido para prerparar.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Saludable y rápido.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Cada producto es práctico.</p>
        </li>
      </ul>
    )
  },
  {
    image: '/delivery.github.io/combos/saludable.webp',
    title: 'Saludables',
    icon: <GiFruitBowl size={50} />,
    description: (
        <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Verduras.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Proteínas.</p>
        </li>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Frutas.</p>
        </li>
      </ul>
    )
  },
  {
    image: '/delivery.github.io/combos/solteroPareja.jpg',
    title: 'Soltero o Pareja',
    icon: <TbFriends size={50} />,
    description: (
        <ul>
        <li className="flex items-center">
          <IoIosArrowForward className="text-secondary" />
          <p className="ml-2">Economia y antojos.</p>
        </li>
       
      </ul>
    )
  }

  // Add as many cards as you want
]
