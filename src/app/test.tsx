"use client"
import Image from "next/image";
import BurgerButton from "./../components/BurguerButton/BurguerButton"
import styled from "styled-components";

export const Header = () => {

  return (
    <>
    <HeaderStyle>
      <div className="absolute inset-0 flex flex-col z-10 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center justify-between bg-gradient-to-b from-black to-transparent w-full"
                style={{ backgroundSize: '100% 100%' }}>
          <Image
            src="/HOOK.png"
            alt="Vercel Logo"
            width={100}
            height={24}
            className="ml-5"
          />
          <div className="links active flex items-center space-x-[100px] mr-10">
            <div className="relative">
              <span className="font-body">INICIO</span>
                <button className="border-b-2 border-[#b12226] px-4 py-3 absolute top-1 left-1.5 h-full cursor-pointer"></button>
              </div>
              <div className="relative">
                <span className="font-body">NOSOTROS</span>
                  <button className="border-b-2 border-[#b12226] px-6 py-3 absolute top-1 left-4 h-full cursor-pointer"></button>
              </div>
              <div className="relative">
                <span className="font-body">SERVICIOS</span>
                  <button className="border-b-2 border-[#b12226] px-6 py-3 absolute top-1 left-3 h-full cursor-pointer"></button>
              </div>
              <div className="relative">
                <span className="font-body">PLANES</span>
                  <button className="border-b-2 border-[#b12226] px-4 py-3 absolute top-1 left-2.5 h-full cursor-pointer"></button>
              </div>
              <button className="border-2 border-[#b12226] px-4 py-2">
                INICIAR SESIÓN
              </button>
            </div>
              <div className="burguer">
                <BurgerButton />
              </div>
          </div>
        </div>
      </HeaderStyle>
      </>
    )
}

export default Header

const HeaderStyle = styled.nav `
.burguer{
  @media(min-width: 768px){
    display: none;
  }
}

`