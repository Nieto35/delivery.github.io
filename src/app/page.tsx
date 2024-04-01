import React from 'react'


const Navbar = React.lazy(() => import('../components/navbar'));
const Header = React.lazy(() => import('../components/header'));
const Card = React.lazy(() => import('../components/card'));
const CardDesktop = React.lazy(() => import('../components/CardDesktop'));
const ScrollToTopButton = React.lazy(() => import('../components/buttonUp'));
const HowBuy = React.lazy(() => import('../components/howBuy'));
const Info = React.lazy(() => import('../components/info'));
const News = React.lazy(() => import('../components/news'));
const NewsDesktop = React.lazy(() => import('../components/newsDesktop'));
const Footer = React.lazy(() => import('../components/footer'));

export default function Home() {

  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <Navbar />
        <Header />
      </div>
      <ScrollToTopButton />
      <h2 className='hidden lg:block text-center text-green-300 text-6xl font-black leading-none mb-4 mt-10 '>Elige la mejor opción</h2>
      <div className='hidden lg:block'>
        <CardDesktop />
      </div>
      <div className='lg:hidden'>
        <Card />
      </div>

      <Info/>
      
      <HowBuy/>

      <div className='lg:hidden'>

        <News/>
      </div>

      <div className='hidden lg:block'>
        <NewsDesktop/>
      </div>
      <Footer />
    </>
  )
}
