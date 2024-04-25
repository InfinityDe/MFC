export const Nosotros2 = () => {
    return (
      <section id="Nosotros2" className="relative h-screen overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('/assets/NOSOTROS2.png')] bg-cover bg-center blur-sm brightness-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full md:mr-[370px] lg:mr-[370px]">
            <div className="p-8">
              <p className=" font-Spartan text-xl mb-7">Ofrecemos capacitaciones especializadas para nuestros instructores de forma periódica, junto con el desarrollo de contenido audiovisual cada 3 meses para las distintas disciplinas.</p>
              <p className=" font-Spartan text-xl mb-7">Expertos en lo que hacemos, expertos en fitness.</p>
              <p className=" font-Spartan text-xl">Nos motiva la energía positiva, el movimiento y la mejora constante.</p>
            </div>
          </div>
          <div className="md:w-1/4 lg:w-1/4 mb-[-200px] md:mt-[350px] lg:mt-[350px] ml-2 md:ml-[63%] lg:ml-[63%] flex justify-center items-center md:absolute lg:absolute">
            <div className="flex sm:flex-col items-center flex-row ">
              <div className="flex items-center">
                <button className="mb-10 mt-14 md:mt-1 transform transition-all hover:-translate-y-2 duration-300 bg-white text-black font-extrabold font-Spartan lg:text-base md:text-sm text-xs md:p-2 lg:p-5 p-1 mr-2">EMPEZAR AHORA</button>
                <button className=" -mb-80 lg:mb-10 md:mb-10 hidden md:inline-block lg:mt-1 md:mt-1 lg:ml-0 md:ml-0 -ml-72 transform transition-all hover:-translate-y-2 duration-300 bg-white">
                  <img src="/assets/FLECHA.png" alt="flecha" className="lg:size-16 md:size-9 size-14 lg:scale-[0.6] md:scale-[0.7] scale-[0.6]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  