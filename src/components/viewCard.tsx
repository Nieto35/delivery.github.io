'use client'

export const ViewCard = ({
  handlers,
  currentIndex,
  cards
}: {
  handlers: any
  currentIndex: any
  cards: any[]
}) => {
  return (
    <div className="lg:justify-center lg:flex">
      <div
        {...handlers}
        className="carousel lg:grid lg:grid-cols-3 lg:w-4/5"
        style={{ overflow: 'hidden' }}
      >
        <div
          className="card-container"
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
              className="bg-white p-3 "
              style={{ flex: '0 0 auto', width: `${100 / cards.length}%` }}
            >
              <div className="w-full mx-auto ">
                <div className=" ">
                  <div className="bg-white rounded-lg drop-shadow-xl transition-all duration-300 z-0">
                    <img className="mt-5 rounded-t-lg w-full h-64 " src={card.image} alt={card.title} />
                    <div className="py-4 px-8">
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center text-green-300">
                          {card.icon}
                          <h3 className="hover:cursor-pointer mt-2  font-bold text-2xl tracking-tight ml-5">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer py-3 text-gray-600 leading-6 text-green-300 h-24">
                        {card.description}
                      </div>

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
    </div>
  )
}
