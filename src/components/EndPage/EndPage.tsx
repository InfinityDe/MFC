import React from 'react'
import Image from 'next/image'

function EndPage() {
  return (
    <section id="EndPage" className="text-center bg-gradient-to-b from-black to-white sm:mt-0 mt-[100px]">
    <div className="flex justify-center">
        <Image
          src="/assets/LOGO2.png"
          alt="Vercel Logo"
          width={130}
          height={0}
          className="mt-[25px]"
        />

    </div>
        <p className='mt-[-55px] p-10 text-black'>COPYRIGHT © INFINITY</p>
    </section>
  )
}

export default EndPage