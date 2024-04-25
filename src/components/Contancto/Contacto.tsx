import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import styled from 'styled-components';
import { MdOutlineEmail } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Link from 'next/link';

function Contacto() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        message: ''
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const [state, handleSubmit] = useForm("xkndqjjd");
    
      const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(e);
        setIsFormSubmitted(true);
      };

      const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  return (
    <section id="Contacto" className="relative h-[800px] bg-center flex items-center mb-20">
      
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-center bg-no-repeat transform scale-75 h-[870px] mt-80 lg:-mt-20 md:-mt-20">
        <Image
            src="/assets/FONDO3.png"
            alt="Vercel Logo"
            width={1100}
            height={0}
            className='opacity-5'
            />
      </div>
            
      {/* Contenido centrado */}
      <div className="flex-col justify-center items-center h-full w-full text-white mt-1" style={{ zIndex: 2 }}>
        
        {/* Contenedor de título y texto */}
        <div className="flex-col justify-between text-left ml-5 md:ml-20 lg:ml-20 mt-24">
        <h1 className='font-Impact font-extrabold tracking-widest text-[7rem] absolute opacity-20 md:mt-[-90px] lg:mt-[-90px] mt-[-100px]'>03</h1>
            <h1 className="text-2xl font-Impact tracking-widests md:ml-8 lg:ml-8 mb-16">CONTÁCTANOS</h1>
            <h2 className='text-gray-400 font-Spartan text-xl mb-20'>Sientase libre de contactarnos en cualquier momento,<br /> nos comunicaremos con usted tan pronto como podamos!!</h2>
        </div>
        
        {/* Contenedor de formulario y botones */}
        <div className="flex w-full justify-between">
          <Border>
          <form onSubmit={onSubmit} className="flex flex-col ml-[65px] lg:ml-20 md:ml-20 subscribe">
            <input 
                type="text"
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Nombre" 
                className="font-Spartan border-b border-white mb-10 lg:w-[550px] md:w-[400px] w-[250px] ml-[-30px] md:ml-0 lg:ml-0 input-with-placeholder h-14"
            />

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="font-Spartan border-b text-white mb-10 lg:w-[550px] md:w-[400px] w-[250px] ml-[-30px] md:ml-0 lg:ml-0 input-with-placeholder h-14"
                placeholder="Correo electrónico"
                required
            />
                                
            <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="font-Spartan border-b text-white mb-10 lg:w-[550px] md:w-[400px] w-[250px] ml-[-30px] md:ml-0 lg:ml-0 input-with-placeholder h-14"
                placeholder="Número de telefono"
                required
            />
            <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="font-Spartan border-b text-white mb-10 lg:w-[550px] md:w-[400px] w-[250px] ml-[-30px] md:ml-0 lg:ml-0 input-with-placeholder h-14"
                placeholder="Mensaje"
                required
            >
            </input>

            <button 
              type="submit"
              disabled={state.submitting}
              className="bg-white text-black hover:bg-black hover:text-white border border-black hover:border hover:border-white lg:w-[550px] md:w-[400px] w-[200px] px-1 py-2 z-50">Enviar</button>
          </form>
          {isFormSubmitted && (
  <p className="text-green-500 mt-2">¡El formulario se ha enviado con éxito!</p>
)}
          </Border>

          <div className="flex md:flex-col lg:flex-col lg:mr-20 md:mr-20 lg:mt-24 md:mt-24 mt-[500px]">
            <div>
              <Link href="https://www.instagram.com/mfc_fitnessacademy/">
                <button className="mb-10 transform transition-all hover:-translate-y-2 duration-300 md:ml-0 lg:ml-0 ml-[-300px]">
                  <CiInstagram size={52} />
                </button>
              </Link>
              <span></span>
            </div>

            <div>
              <Link href="https://www.instagram.com/mfc_fitnessacademy/">
                <button className="mb-10 transform transition-all hover:-translate-y-2 duration-300 md:ml-0 lg:ml-0 ml-[-200px]">
                  <MdOutlineEmail size={52} />
                </button>
              </Link>
              <span></span>  
            </div>

            <div>
              <Link href="https://www.instagram.com/mfc_fitnessacademy/">
                <button className="transform transition-all hover:-translate-y-2 duration-300 md:ml-0 lg:ml-0 ml-[-100px]">
                  <FaWhatsapp size={52} />
                </button>
              </Link>
              <span></span>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contacto;

const Border = styled.div`
.subscribe input {
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  background: transparent;
  transition: all .25s ease;
}

.subscribe input:focus {
  outline: none;
  border-bottom: 1px solid #ffffff;
}

.subscribe input.input-with-placeholder::placeholder {
  color: #d4d4d4;
  transition: all .25s ease;
}

.subscribe input.input-with-placeholder:focus::placeholder {
  color: #d4d4d4;
  transform: translateY(-20px);
}
` 