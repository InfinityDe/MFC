import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { CiInstagram } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

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
  };

  return (
      <section id="Contacto" className='sm:mt-[300px] mt-[450px]'>
          <div>
          <Image
            src="/assets/FONDO3.png"
            alt="Vercel Logo"
            width={1000}
            height={0}
            className="w-[100%] sm:w-[900px] h-[100%] sm:h-[900px] sm:ml-64 ml-[-100px] sm:mt-[-100px] absolute opacity-5"
            />
          </div>
        <Border className='lg:ml-[-50%] ml-[-50%]'>
          <h1 className='font-Impact font-extrabold tracking-widest text-[7rem] absolute opacity-20 sm:ml-[680px] ml-[250px] mt-[-220px] md:mt-[40px] xl:ml-[820px] xl:mt-[180px]'>03</h1>
          <div className="flex items-center justify-center h-screen">
            <div className="flex justify-center w-full">
              <div className=" w-1/3 mr-[-100px]">
                <div className="p-8">
                  <h2 className="text-2xl font-Impact tracking-widest ml-10 sm:mt-[30px] mt-[-125px] text-white">CONTACTANOS</h2>
                  <p className='text-gray-400 mt-16 ml-10 w-full mb-6 font-Spartan text-xl'>Sientase libre de contactarnos en cualquier momento,<br /> nos comunicaremos con usted tan pronto como podamos!!</p>
                  <form onSubmit={onSubmit} className='ml-10 subscribe'>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="font-Spartan border-b border-white mb-10 w-[250px] sm:w-[400px] input-with-placeholder h-14"
                      placeholder="Nombre"
                      required />
                      
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="font-Spartan border-b text-white mb-10 w-[250px] sm:w-[400px] input-with-placeholder h-14"
                      placeholder="Correo electrónico"
                      required
                    />
                    <input
                      type="number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="font-Spartan border-b text-white mb-10 w-[250px] sm:w-[400px] input-with-placeholder h-14"
                      placeholder="Número de telefono"
                      required
                    />
                    <input
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="font-Spartan border-b text-white mb-10 w-[250px] sm:w-[400px] input-with-placeholder h-14"
                      placeholder="Mensaje"
                      required
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
                    <button
                      type="submit"
                      className="bg-white text-black hover:bg-black hover:text-white hover:border-white hover:border border border-black lg:mr-[3px] ml-[50%] font-bold py-2 lg:px-[200px] px-8 transition ease-in-out duration-150 mb-28 z-50"
                      disabled={state.submitting}
                    >
                      Enviar
                    </button>
                    {state.succeeded && <p className='font-Spartan'>Enviado correctamente</p>}
                    <ValidationError
                      prefix="Error:"
                      field="form"
                      errors={state.errors}
                    />
        </Border>
              <div className="w-full sm:w-1/4 lg:mt-[-750px] ml-2 lg:ml-[63%] flex justify-center items-center sm:absolute">
                <div className="flex sm:flex-col items-center flex-row ">
                  <div className="flex items-center">
                    <button className="mb-10 sm:mt-14 mt-1 transform transition-all hover:-translate-y-2 duration-300">
                      <CiInstagram size={52} />
                    </button>
                    <span className="ml-2 sm:mt-[45px] mb-8">Texto Instagram</span>
                  </div>
                  <div className="flex items-center mr-5 sm:mr-[61px] ml-7">
                    <button className="sm:mb-10 mb-8 transform transition-all hover:-translate-y-2 duration-300">
                      <MdOutlineEmail size={52} />
                    </button>
                    <span className="ml-2 sm:mt-[-12px] mb-8">Texto Email</span>
                  </div>
                  <div className="flex items-center ml-2">
                    <button className="sm:mb-4 mb-8 sm:mr-1 transform transition-all hover:-translate-y-2 duration-300">
                      <FaWhatsapp size={52} />
                    </button>
                    <span className="ml-2 mb-8 sm:mt-[20px]">Texto Whatsapp</span>
                  </div>
                </div>
              </div>
      </section>
  );
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