import { Navbar } from '@/components/navbar'
import { Header } from '@/components/header'
import {Card} from '@/components/card'

export default function Home() {
  return (
    <>
    <div className="flex flex-col h-screen">
      <Navbar />
      <Header />
    </div>
      <Card />
    </>
  )
}
