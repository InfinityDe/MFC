"use client"
import Image from "next/image";
import { useState } from "react";
import BurgerButton from "./../BurguerButton/BurguerButton"
import styled from "styled-components";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {

  const [clicked, setClicked] = useState(false)
 
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <NavContainer>
      <div className="absolute inset-0 flex flex-col z-10">
      <div className="flex items-center justify-between bg-gradient-to-b from-black to-transparent w-full"
                style={{ backgroundSize: '100% 100%' }}>
          <Image
            src="/assets/HOOK.png"
            alt="Vercel Logo"
            width={100}
            height={0}
            className="ml-5 mt-[-15px]"
          />

        <div className={`links ${clicked ? 'active' : ''}`}>

        <div className="a font-body">
          <button className="font-body underline-on-hover">INICIO</button>
        </div>

          <div className="a font-body">
          <ScrollLink
                  to="Planes"
                  spy={true}
                  smooth={true}
                  offset={15}
                  duration={500}
                ><button className="font-body underline-on-hover">PLANES</button>
            </ScrollLink>
          </div>

          <div className="a font-body">
            <ScrollLink
                  to="Nosotros"
                  spy={true}
                  smooth={true}
                  offset={105}
                  duration={500}
                ><button className="font-body underline-on-hover">NOSOTROS</button>
            </ScrollLink>
          </div>

          <div className="a font-body">
            <ScrollLink
                    to="Servicios"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  ><button className="font-body underline-on-hover">SERVICIOS</button>
              </ScrollLink>
            </div>


          <Link href="https://www.mixfitnesscompany.com/sistema/index.php">
                <button className=" relative mt-[-15px] border-2 border-white px-4 py-2 mr-[50px] text-sm hover:bg-black hover:border-black transition duration-300">
                  INICIAR SESIÓN
                </button>
          </Link>
        </div>
        <div className='burguer'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''} z-40`}></BgDiv>
      </div>
      </div>
      </NavContainer>
    </>
  )
}
const NavContainer = styled.nav`

  span {
    font-size: 16px;
  }

  display: flex;
  div.a{
    text-decoration: none;
    margin-right: 5rem;
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    div.a{
      color: white;
      font-size: 20px;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      div.a{
        font-size: 20px;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: 10px;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    z-index: 5;
    text-align: center;
    div.a{
      font-size: 20px;
      margin-top: 1rem;
      color: white;
      margin-right: 3rem;
    }
    button{
      margin-left: -30px;
      margin-top: 1rem;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }

  .underline-on-hover {
    font-size: 16px;
    color: #e1e1e1;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  
  .underline-on-hover:hover,
  .underline-on-hover:focus {
    color: #fff;
  }

  .underline-on-hover:hover:after,
  .underline-on-hover:focus:after {
    width: 100%;
    left: 0%;
  }


  .underline-on-hover:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #ffffff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`