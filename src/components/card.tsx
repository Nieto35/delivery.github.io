'use client'
import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

export const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const cards = [
        {
            image: '/combos/icono-combosFamiliares-300x300.jpg',
            title: 'Combos Familiare',
            description: 'Combo para la familia'
        },
        {
            image: '/combos/icono-combosAsados-300x300.jpg',
            title: 'Combos Asados',
            description: 'Combo para que hagan asaditos'
        },
        {
            image: '/combos/icono-combosCarnes-300x300.jpg',
            title: 'Combos Carnes',
            description: 'Mucha carne para todos'
        }
        // Add as many cards as you want
    ]

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % cards.length),
        onSwipedRight: () => setCurrentIndex((currentIndex - 1 + cards.length) % cards.length),
        trackMouse: true
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % cards.length)
        }, 5000) // Change card every 3 seconds

        return () => clearInterval(interval) // Clean up on component unmount
    }, [currentIndex])

    return (
        <div {...handlers} className="carousel " style={{ overflow: 'hidden' }}>
            <div
                className="card-container "
                style={{
                    display: 'flex',
                    width: `${cards.length * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / cards.length)}%)`,
                    transition: 'transform 0.5s'
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white p-3"
                        style={{ flex: '0 0 auto', width: `${100 / cards.length}%` }}
                    >
                        <div className="w-full mx-auto">
                            <div className="">
                                <div className="bg-white rounded-lg shadow-2xl transition-all duration-300 z-0">
                                    <img className="mt-5 rounded-t-lg w-96 h-64 " src={card.image} alt="" />
                                    <div className="py-4 px-8">
                                        <h1 className="hover:cursor-pointer mt-2 text-green-300 font-bold text-2xl tracking-tight">
                                            {card.title}
                                        </h1>
                                        <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
                                            {card.description}
                                        </p>
                                        <button className="mt-5 bg-green-300 text-white px-4 py-2 rounded-full font-black">
                                            Más información
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}