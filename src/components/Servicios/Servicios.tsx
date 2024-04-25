import React from "react";
import { LiaDumbbellSolid } from "react-icons/lia";
import { BsPersonPlusFill } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { LuHeartPulse } from "react-icons/lu";


export function Servicios() {
  return (
    <section id="Servicios" className="text-center mt-32">
      <div className="container mx-auto">
        <h1 className=" font-Impact text-3xl mb-8 tracking-wider">
          SUPERÁ TUS LIMITES.
        </h1>
        <h2 className="font-Spartan text-xl text-gray-300 mb-8 lg:mb-[-100px]">
          Descubrí cómo nuestra academia te lleva al siguente nivel con programas de entrenamientos únicos.
            <br />
          Aprovechá las  ventajas de un enfoque integral que desafía tu cuerpo y 
            <br />
          mente, ofreciéndote la oportunidad de superarte cada día.
          <span>
          </span>
        </h2>
        <div className="bg-black w-full min-h-screen gap-4 flex-wrap flex justify-center items-center mt-[-100px] lg:mb-[-100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[100px] md:mt-[100px] lg:mt-[-100px] ">
            
            <div className=" w-full p-2 bg-black transform transition-all hover:-translate-y-2 duration-300">
              <div className="flex justify-center">
                <LuHeartPulse className=" h-16 w-16" />            
              </div>
              <div className="p-2">
                <h2 className="font-Impact text-lg mb-2 tracking-widest text-center text-white">
                  ENTRENAMIENTO INTEGRAL
                </h2>
                <p className="text-l text-white font-Spartan text-center">
                  Ofrecemos un enfoque holistico
                  <br />
                  para el fitness, combinando cardio,
                  <br />
                  fuerza y flexibilidad en todos nuestros
                  <br />
                  programas.
                </p>
              </div>
            </div>
            <div className=" w-full p-2 bg-black transform transition-all hover:-translate-y-2 duration-300 shadow-lg">
              <div className="flex justify-center">
                <LiaClipboardListSolid className=" h-16 w-16" />             
              </div>
              <div className="p-2">
                <h2 className="font-Impact text-lg mb-2 tracking-widest text-center text-white">
                  VARIEDAD DE RUTINAS
                </h2>
                <p className="text-l font-Spartan text-white text-center">
                  La diversidad de ejercicios
                  <br />
                  hace que nuestros alumnos mantengan
                  <br />
                  la motivacion alta y previene la
                  <br />
                  monotonia de los entrenamientos.
                </p>
              </div>
            </div>
            <div className="w-full p-2 bg-black transform transition-all hover:-translate-y-2 duration-300 shadow-lg">
              <div className="flex justify-center">
                <BsPersonPlusFill className=" h-16 w-16 scale-x-[-1]" />
              </div>
              <div className="p-2">
                <h2 className="font-Impact text-lg mb-2 tracking-widest text-center text-white">
                  COMUNIDAD
                </h2>
                <p className="text-l font-Spartan text-white text-center">
                  Entrenar en grupo fomenta
                  <br />
                  un ambiente de camadería
                  <br />
                  y apoyo mutuo.
                </p>
              </div>
            </div>
            <div className="w-full p-2 bg-black transform transition-all hover:-translate-y-2 duration-300 shadow-lg">
            <div className="flex justify-center">
                <LiaDumbbellSolid className=" h-16 w-16" />
              </div>
              <div className="p-2">
                <h2 className="font-Impact text-lg mb-2 tracking-widest text-center text-white">
                  EQUIPAMIENTO PERSONALIZADOS
                </h2>
                <p className="text-l font-Spartan text-white text-center">
                  El uso de equipos como minitrampolines
                  <br />
                  y bolsas de boxeo proporciona una
                  <br />
                  experiencia de entrenamiento
                  <br />
                  única y efectiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
