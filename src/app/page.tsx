"use client"
import { MFC } from '@/components/Landing/MFC'
import { Header } from '@/components/Header'
import { Servicios } from '@/components/Servicios'
import Planes from '@/components/Planes/Planes'
import EndPage from '@/components/EndPage/EndPage'
import Contacto from '@/components/Contancto/Contacto'
import Nosotros from '@/components/Nosotros/Nosotros'
import { Nosotros2 } from '@/components/Nosotros2/Nosotros2'

export default function Home() {
  return (
    <div className='bg-black flex flex-col'>
      <Header />
      <MFC />
      <Planes />
      <Servicios />
      <Nosotros />
      <Nosotros2 />
      <Contacto />
      <EndPage />
    </div>
  )
}
