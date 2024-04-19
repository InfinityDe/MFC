import React from 'react'
import Image from 'next/image'

function Nosotros() {
  return (
    <section id="Nosotros" className="flex text-center mt-32">
      <div className="flex items-center justify-center w-full">
        <div className=' w-full sm:w-1/2 flex flex-col items-center sm:items-start pr-10'>
          <h1 className='font-Impact font-extrabold tracking-widest text-[7rem] absolute opacity-20 sm:ml-7 ml-[-50px]'>02</h1>
          <h1 className='font-Impact tracking-wider text-4xl relative top-20 ml-[10%] sm:text-left'>SOBRE <br /> NOSOTROS</h1>
          <p className='sm:text-left mt-32 sm:ml-10 ml-[10%] font-Spartan text-xl'>Somos un grupo de profesionales expertos en diferentes<br />disciplinas unidos por la misma pasión, el fitness, para<br />mejorar la calidad de vida de las personas.</p>
          <p className='sm:text-left mt-10 ml-[10%] sm:ml-10 font-Spartan text-xl'>Tenemos lo último en tendencias de entrenamiento, resultados<br />físico y salud.</p>
          <p className='sm:text-left mt-10 ml-[10%] sm:ml-10 font-Spartan text-xl'>Contamos con programas, talleres, instructorados,<br /> certificaciones y rutinas de entrenamiento<br/>inovadores que brindan experiencias positivas y<br/>llenas de energía para todas las personas<br /> que lo practican.</p>

        </div>
        <div className='hidden sm:flex w-1/2 justify-start'>
          <Image
            src="/assets/NOSOTROS.png"
            alt="Vercel Logo"
            width={520}
            height={0}
            className=" h-full w-screen mt-[107px] "
            />
          </div>
      </div>
    </section>
  )
}

export default Nosotros