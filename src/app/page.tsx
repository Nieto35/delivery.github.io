import { Navbar } from '@/components/navbar'
import { Header } from '@/components/header'
import {Card} from '@/components/card'
import { CardDesktop } from '@/components/CardDesktop'
import {ScrollToTopButton} from '@/components/buttonUp'
import { HowBuy } from '@/components/howBuy'
import { Info } from '@/components/info'

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
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
    </>
  )
}
