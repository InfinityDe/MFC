export const Nosotros2 = () => {
    return (
      <section id="Nosotros2" className="relative h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/NOSOTROS2.png')] bg-cover bg-center blur-sm brightness-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full mr-[370px]">
            <div className="p-8">
              <p className=" font-Spartan text-xl mb-7">Ofrecemos capacitaciones especializadas para nuestros instructores de forma periódica, junto con el desarrollo de contenido audiovisual cada 3 meses para las distintas disciplinas.</p>
              <p className=" font-Spartan text-xl mb-7">Expertos en lo que hacemos, expertos en fitness.</p>
              <p className=" font-Spartan text-xl">Nos motiva la energía positiva, el movimiento y la mejora contante.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/4 sm:mt-[350px] ml-2 sm:ml-[63%] flex justify-center items-center sm:absolute">
            <div className="flex sm:flex-col items-center flex-row ">
              <div className="flex items-center">
                <button className="mb-10 sm:mt-14 mt-1 transform transition-all hover:-translate-y-2 duration-300 bg-white text-black font-extrabold font-Spartan p-5 mr-2">EMPEZAR AHORA</button>
                <button className="mb-10 sm:mt-14 mt-1 transform transition-all hover:-translate-y-2 duration-300 bg-white p-0">
                  <img src="/assets/FLECHA.png" alt="flecha" className=" size-16 scale-[0.6]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  